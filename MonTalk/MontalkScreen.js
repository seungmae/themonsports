import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import FastImage from 'react-native-fast-image';
import firebase from 'react-native-firebase';
import Icons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import AppStyles from '../AppStyles';
// import ChatIconView from './ChatScreen';
import SearchModal from './SearchModal';
import ChatIconView from './ChatIconView';
import CreateGroupModal from './CreateGroupModal';
import { Badge } from 'react-native-elements';
class MontalkScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchModalVisible: false,
      createGroupModalVisible: false,
      heAcceptedFriendships: [],
      hiAcceptedFriendships: [],
      friends: [],
      
      channelParticipations: [],
      channels: [],
      user: this.props.navigation.getParam('user'),
      user_memberid: this.props.navigation.getParam('user_memberid'),
      chatcnt: [],
    }

    // this.heAcceptedFriendshipsRef = firebase.firestore().collection('friendships').where('user1', '==', this.state.user.id);
    // this.heAcceptedFriendshipsUnsubscribe = null;

    // this.iAcceptedFriendshipsRef = firebase.firestore().collection('friendships').where('user2', '==', this.state.user.id);
    // this.iAcceptedFriendshipsUnsubscribe = null;

    this.channelPaticipationRef = firebase.firestore().collection('channel_participation').where('user', '==', this.state.user.id);
    this.channelPaticipationUnsubscribe = null;

    this.channelsRef = firebase.firestore().collection('channels').orderBy('lastcreated', 'desc');
    this.channelsUnsubscribe = null;

  }

  componentDidMount() {
    // this.heAcceptedFriendshipsUnsubscribe = this.heAcceptedFriendshipsRef.onSnapshot(this.onHeAcceptedFriendShipsCollectionUpdate);
    // this.iAcceptedFriendshipsUnsubscribe = this.iAcceptedFriendshipsRef.onSnapshot(this.onIAcceptedFriendShipsCollectionUpdate);
    this.channelPaticipationUnsubscribe = this.channelPaticipationRef.onSnapshot(this.onChannelParticipationCollectionUpdate);
    this.channelsUnsubscribe = this.channelsRef.onSnapshot(this.onChannelCollectionUpdate);

    this.props.navigation.setParams({
      onCreate: this.onCreate
    });
    firebase.messaging().getToken().then(token => {
      firebase.firestore().collection('users').doc(this.state.user._data.email).update({
        push_token: token
      })
      console.log("토큰: ", token);
    })
    
  }

  componentWillUnmount() {

    
    //this.usersUnsubscribe();
    //this.heAcceptedFriendshipsUnsubscribe();
    //this.iAcceptedFriendshipsUnsubscribe();
    this.channelPaticipationUnsubscribe();
    this.channelsUnsubscribe();
  }

  // onUsersCollectionUpdate = (querySnapshot) => {
  //   const data = [];
  //   querySnapshot.forEach((doc) => {
  //     const user = doc.data();
  //     user.id = doc.id;

  //     var friendships_1;
  //     if (this.state.heAcceptedFriendships != null) {
  //       friendships_1 = this.state.heAcceptedFriendships.filter(friend => {
  //         return friend.user2 == user.id;
  //       });
  //     }

  //     var friendships_2;
  //     if (this.state.iAcceptedFriendships != null) {
  //       friendships_2 = this.state.iAcceptedFriendships.filter(friend => {
  //         return friend.user1 == user.id;
  //       });
  //     }

  //     if (friendships_1.length > 0) {
  //       user.friendshipId = friendships_1[0].id;
  //       data.push(user);
  //     } else if (friendships_2.length > 0) {
  //       user.friendshipId = friendships_2[0].id;
  //       data.push(user);
  //     }
  //   });

  //   this.setState({
  //     friends: data,
  //   });
  // }

  // onHeAcceptedFriendShipsCollectionUpdate = (querySnapshot) => {
  //   const data = [];
  //   querySnapshot.forEach((doc) => {
  //     const temp = doc.data();
  //     temp.id = doc.id;
  //     data.push(temp);
  //   });

  //   this.setState({
  //     heAcceptedFriendships: data,
  //   });

  //   if (this.usersUnsubscribe)
  //     this.usersUnsubscribe();

  //   this.usersRef = firebase.firestore().collection('users');
  //   this.usersUnsubscribe = this.usersRef.onSnapshot(this.onUsersCollectionUpdate);
  // }

  // onIAcceptedFriendShipsCollectionUpdate = (querySnapshot) => {
  //   const data = [];
  //   querySnapshot.forEach((doc) => {
  //     const temp = doc.data();
  //     temp.id = doc.id;
  //     data.push(temp);
  //   });

  //   this.setState({
  //     iAcceptedFriendships: data,
  //   });

  //   if (this.usersUnsubscribe)
  //     this.usersUnsubscribe();

  //   this.usersRef = firebase.firestore().collection('users');
  //   this.usersUnsubscribe = this.usersRef.onSnapshot(this.onUsersCollectionUpdate);
  // }

  onChannelParticipationCollectionUpdate = (querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      const user = doc.data();
      user.id = doc.id;

      if (user.id != this.state.user.id) {
        data.push(user);
      }
    });

    const channels = this.state.channels.filter(channel => {
      return data.filter(participation => channel.id == participation.channel).length > 0
    });

    this.setState({
      channels: channels,
      channelParticipations: data,
    });

    if (this.channelsUnsubscribe) {
      this.channelsUnsubscribe();
    }
    this.channelsUnsubscribe = this.channelsRef.onSnapshot(this.onChannelCollectionUpdate);
  }

  onChannelCollectionUpdate = (querySnapshot) => {
    const data = [];
    const channelPromiseArray = [];
    querySnapshot.forEach((doc) => {
      channelPromiseArray.push(new Promise((channelResolve, channelReject) => {
        const channel = doc.data();
        channel.id = doc.id;
        channel.participants = [];
        //channel.chatcnt = []
        const filters = this.state.channelParticipations.filter(item => item.channel == channel.id);
        if (filters.length > 0) {
          firebase.firestore().collection('channel_participation').where('channel', '==', channel.id).onSnapshot((participationSnapshot) => {
            const userPromiseArray = [];
            participationSnapshot.forEach((participationDoc) => {
              const participation = participationDoc.data();
             // console.log(participation)
              participation.id = participationDoc.id;
              if (participation.user != this.state.user.id) {
                userPromiseArray.push(new Promise((userResolve, userReject) => {
                  firebase.firestore().collection('users').doc(participation.user).get().then((user) => {
                    const userData = user.data();
                    // const chatcnt = []
                    // firebase.firestore().collection('channel_participation').where('channel', '==', channel.id).where('user', '!=', this.state.user.id)
                    // .onSnapshot((participationSnapshot) => {
                    //   participationSnapshot.forEach((participationDoc) => {
                    //     const participation2 = participationDoc.data();
                    //     chatcnt.push(participation2)
                    //     userResolve();
                    //   });
                    // })
                    // channel.chatcnt = chatcnt
                    userData.id = user.id;
                    userData.participationId = participation.id;
                    channel.participants = [...channel.participants, userData];
                    userResolve();
                  });
                }));
              }
            });
            Promise.all(userPromiseArray).then(values => {
              data.push(channel);
              channelResolve();
            });
          });
        } else {
          channelResolve();
        }
      }));

    });

    Promise.all(channelPromiseArray).then(values => {
      const sortedData = data.sort((a, b) => {
        return b.lastMessageDate - a.lastMessageDate;
      });

      this.setState({
        channels: sortedData,
      });
    });
  }

  onCreate = () => {
    this.setState({ createGroupModalVisible: true });
  }

  // onPressFriend = (friend) => {
  //   const one2OneChannel = this.state.channels.filter(channel => {
  //     return channel.participants.length == 1 && !channel.name && channel.participants[0].id == friend.id;
  //   });
  //   let channel;
  //   if (one2OneChannel.length > 0) {
  //     channel = one2OneChannel[0];
  //   } else {
  //     channel = {
  //       name: '',
  //       id: null,
  //       participants: [friend],
  //     };
  //   }

  //   this.props.navigation.navigate('Chat', { channel: channel, user: this.state.user });
  // }

  // renderFriendItem = ({ item }) => (
  //   <TouchableOpacity onPress={() => this.onPressFriend(item)}>
  //     <View style={styles.friendItemContainer}>
  //       <FastImage style={styles.friendPhoto} source={{ uri: item.profilePictureURL }} />
  //       <Text style={styles.friendName}>{item.fullName}</Text>
  //     </View>
  //   </TouchableOpacity>
  // );

  renderFriendSeparator = () => {
    return (<View style={styles.friendDivider} />);
  };

  onPressChat = (chat) => {
    this.props.navigation.navigate('Chat', { channel: chat, user: this.state.user,user_memberid:this.state.user_memberid });
  }

  formatMessage = (item) => {
    if (item.lastMessage.startsWith('https://firebasestorage.googleapis.com')) {
      return '사진';
    } else {
      return item.lastMessage;
    }
  }
  
  renderChatItem = ({ item }) => {
    let title = item.name;
    const data = []
    if (!title) {
      if (item.participants.length > 0) {
        title = item.participants[0].fullName;
      }
    }
    // let a = 0
    //  firebase.firestore().collection('channel_participation').where('channel', '==', item.id).where('user', '==', this.state.user.id)
    // .onSnapshot((participationSnapshot) => {
    //   participationSnapshot.forEach((participationDoc) => {
    //     const participation2 = participationDoc.data();
    //     if(participation2.user == this.state.user.id){
    //      Promise.all([item,participation2]).then(value => {
    //        console.log(value)
    //        data.push(value)
    //      })
    //     }
        
    //     //data.push(participation2.chat_cnt)
    //   });
    // })

    //console.log(data[0])
    console.log(data)
    let chat = 0
    // if(item.chatcnt.length > 0){
    //   console.log(item.chatcnt[0].chat_cnt)
    //   chat = item.chatcnt[0].chat_cnt
    // }
    //const cnt = item.chatcnt[0].chat_cnt
    return (<TouchableOpacity onPress={() => this.onPressChat(item)}>
      <View style={styles.chatItemContainer}>
        <ChatIconView style={styles.chatItemIcon} participants={item.participants} />
        <View style={styles.chatItemContent}>
          <Text style={styles.chatFriendName}>{title}</Text>
          <View style={styles.content}>
            <Text numberOfLines={1} ellipsizeMode={'middle'} style={styles.message}>{this.formatMessage(item)} · {AppStyles.utils.timeFormat(item.lastMessageDate)}</Text>
            {
              chat > 0 ? <Badge badgeStyle={{marginLeft: 5, height: 15.7,
                borderRadius: 7, borderWidth: 0, shadowColor: 'rgb(250,180,0)', backgroundColor: 'rgb(250,180,0)'
              }}
                status="success"
                value={chat}
                textStyle={{ fontFamily: 'KBFGDisplay-Medium', fontSize: 10, fontWeight: 'bold', color: '#ffffff' }}
              /> : null
            }
            
          </View>
          
        </View>
      </View>
    </TouchableOpacity>);
  };

  onTapSearch = () => {
    this.setState({ searchModalVisible: true });
  }

  onSearchCancel = () => {
    this.setState({ searchModalVisible: false });
  }

  onCreateGroupCancel = () => {
    this.setState({ createGroupModalVisible: false });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgb(242,242,242)' }}>

        <View style={{ backgroundColor: 'rgb(250,180,0)', height: 90, width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <View style={{ alignItems: 'flex-start', marginLeft:15, marginTop: 39.9 }}>
            <TouchableOpacity style={{ width: 35.8 }}
              onPress={() => this.props.navigation.navigate('Main')}>
              <Icon color='#ffffff' size={25.5} name='arrowleft' />
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: 'flex-start', marginLeft:0, marginTop: 39.9 }}>
            <Text style={{ fontSize: 23,fontFamily:'KBFGDisplay-Bold', fontWeight: 'bold', color: '#ffffff' }}>Montalk</Text>
          </View>

          <View style={{ marginTop: 39.9, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            
              {
                this.state.user_memberid == 1 ?
                <TouchableOpacity style={{ marginTop: 0, width: 35.8, height: 25,marginRight:10}}
              onPress={() => this.onCreate()}>
              <Icon name="pluscircleo" size={25.5} color='white'/>
            </TouchableOpacity> : null
              }
              
          </View>
        </View>

        <ScrollView style={styles.container}>
                {/* <TouchableOpacity onPress={this.onTapSearch}>
                    <View style={styles.searchSection}>
                        <Icons style={styles.searchIcon} name="ios-search" size={15} color={AppStyles.colorSet.inputBgColor} />
                        <Text style={styles.input}> 검색</Text>
                    </View>
                    
                </TouchableOpacity>
                <View style={styles.friends}>
                    <FlatList
                        horizontal={true}
                        initialNumToRender={4}
                        ItemSeparatorComponent={this.renderFriendSeparator}
                        data={this.state.friends}
                        showsHorizontalScrollIndicator={false}
                        renderItem={this.renderFriendItem}
                        keyExtractor={item => `${item.id}`}
                    />
                </View> */}
                <View style={styles.chats}>
                    <FlatList
                        vertical
                        showsVerticalScrollIndicator={false}
                        data={this.state.channels}
                        renderItem={this.renderChatItem}
                        keyExtractor={item => `${item.id}`}
                    />
                </View>
                {this.state.searchModalVisible &&
                    <SearchModal userprops={this.state.user} categories={this.state.categories} onCancel={this.onSearchCancel}></SearchModal>
                }
                {this.state.createGroupModalVisible &&
                    <CreateGroupModal userprops={this.state.user} onCancel={this.onCreateGroupCancel}></CreateGroupModal>
                }
            </ScrollView>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyles.colorSet.grayBgColor,
    margin: 8,
    borderRadius: 8,
  },
  searchIcon: {
    padding: 10,
    paddingRight: 0,
  },
  input: {
    flex: 1,
    padding: 5,
    paddingLeft: 0,
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  userPhoto: {
    width: 40,
    height: 40,
    marginLeft: 5,
  },
  friends: {
    minHeight: 75,
    padding: 10,
  },
  friendDivider: {
    width: 30,
    height: "100%",
  },
  friendItemContainer: {
    alignItems: 'center',
  },
  friendPhoto: {
    height: 60,
    borderRadius: 30,
    width: 60,
  },
  friendName: {
    marginTop: 10,
    alignSelf: 'center',
  },
  chats: {
    flex: 1,
    padding: 10,
  },
  chatItemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  chatItemIcon: {
    height: 70,
    // borderRadius: 45,
    width: 70,
  },
  chatItemContent: {
    flex: 1,
    alignSelf: 'center',
    marginLeft: 10,
  },
  chatFriendName: {
    color: AppStyles.colorSet.mainTextColor,
    fontSize: 17,
    fontFamily: 'GodoM',
  },
  content: {
    flexDirection: 'row',
  },
  message: {
    flex: 2,
    fontFamily:'KBFGDisplay-Medium',
    color: AppStyles.colorSet.mainSubtextColor
  },
  time: {
    marginLeft: 5,
    color: AppStyles.colorSet.mainSubtextColor
  }
});

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default MontalkScreen