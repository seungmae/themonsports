import React from 'react';
import { FlatList, TouchableOpacity, Modal, Dimensions, StyleSheet, Text, View, Alert } from 'react-native';
import AppStyles from '../AppStyles';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import TextButton from 'react-native-button';
import firebase from 'react-native-firebase';
import DialogInput from 'react-native-dialog-input';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign'
import moment from 'moment'
const WIDTH = Dimensions.get('window').width;
class CreateGroupModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            heAcceptedFriendships: [],
            hiAcceptedFriendships: [],
            friends: [],
            isNameDialogVisible: false,
            input: '',
            filteredUsers: [],
            users: [],

            sort: -1,
        };

        this.heAcceptedFriendshipsRef = firebase.firestore().collection('friendships').where('user1', '==', this.props.userprops.id);
        this.heAcceptedFriendshipssUnsubscribe = null;

        this.iAcceptedFriendshipsRef = firebase.firestore().collection('friendships').where('user2', '==', this.props.userprops.id);
        this.iAcceptedFriendshipssUnsubscribe = null;
    }

    componentDidMount() {
        this.heAcceptedFriendshipssUnsubscribe = this.heAcceptedFriendshipsRef.onSnapshot(this.onHeAcceptedFriendShipsCollectionUpdate);
        this.iAcceptedFriendshipssUnsubscribe = this.iAcceptedFriendshipsRef.onSnapshot(this.onIAcceptedFriendShipsCollectionUpdate);
    }

    componentWillUnmount() {
        this.usersUnsubscribe();
        this.heAcceptedFriendshipssUnsubscribe();
        this.iAcceptedFriendshipssUnsubscribe();
    }

    onUsersCollectionUpdate = (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {

            const user = doc.data();

            user.checked = false;
            if (doc.id != this.props.userprops.id) {
                data.push({ ...user, id: doc.id });
            }
        });
        if(this.state.sort == -1){
            this.setState({
                friends: data
            });
        } else if (this.state.sort == 0) {
            const datatype = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].type == '진행요원') {
                    datatype.push(data[i])
                    this.setState({
                        friends: datatype
                    });
                }
            }
        }else if (this.state.sort == 1) {
            const datatype = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].type == '보안요원') {
                    datatype.push(data[i])
                    this.setState({
                        friends: datatype
                    });
                }
            }
        }else if (this.state.sort == 2) {
            const datatype = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].type == '드라이버') {
                    datatype.push(data[i])
                    this.setState({
                        friends: datatype
                    });
                }
            }
        }else if (this.state.sort == 3) {
            const datatype = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].type == '게스트') {
                    datatype.push(data[i])
                    this.setState({
                        friends: datatype
                    });
                }
            }
        }

    }

    // onUsersCollectionUpdate = (querySnapshot) => {
    //     const data = [];
    //     querySnapshot.forEach((doc) => {
    //         console.log(user)
    //         const user = doc.data();
    //         user.id = doc.id;

    //         const friendships_1 = this.state.heAcceptedFriendships.filter(friend => {
    //             return friend.user2 == user.id;
    //         });

    //         const friendships_2 = this.state.iAcceptedFriendships.filter(friend => {
    //             return friend.user1 == user.id;
    //         });

    //         user.checked = false;
    //         if (friendships_1.length > 0) {
    //             user.friendshipId = friendships_1[0].id;
    //             data.push(user);
    //         } else if (friendships_2.length > 0) {
    //             user.friendshipId = friendships_2[0].id;
    //             data.push(user);
    //         }
    //     });

    //     this.setState({
    //         friends: data,
    //     });
    // }

    onHeAcceptedFriendShipsCollectionUpdate = (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
            const temp = doc.data();
            temp.id = doc.id;
            data.push(temp);
        });
        this.setState({
            heAcceptedFriendships: data,
        });

        if (this.usersUnsubscribe)
            this.usersUnsubscribe();


        this.usersRef = firebase.firestore().collection('users')

        this.usersUnsubscribe = this.usersRef.onSnapshot(this.onUsersCollectionUpdate);

    }

    onIAcceptedFriendShipsCollectionUpdate = (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
            const temp = doc.data();
            temp.id = doc.id;
            data.push(temp);
        });

        this.setState({
            iAcceptedFriendships: data,
        });

        if (this.usersUnsubscribe)
            this.usersUnsubscribe();

        this.usersRef = firebase.firestore().collection('users')


        this.usersUnsubscribe = this.usersRef.onSnapshot(this.onUsersCollectionUpdate);
    }

    onCreate = () => {
        const checkedFriends = this.state.friends.filter(friend => friend.checked);
        if (checkedFriends.length == 0) {
            Alert.alert('한명 이상 선택해주세요.');
        } else {
            this.showNameDialog(true);
        }
    }

    onCheck = (friend) => {
        friend.checked = !friend.checked;
        const newFriends = this.state.friends.map(item => {
            if (item.id == friend.id) {
                return friend;
            } else {
                return item;
            }
        });
        this.setState({ friends: newFriends });
    }

    showNameDialog = (show) => {
        this.setState({ isNameDialogVisible: show });
    }

    onSubmitName = (text) => {
        let created = Date.now();
        const channelData = {
            creator_id: this.props.userprops.id,
            name: text,
            lastMessage: '그룹 채팅방',
            lastMessageDate: moment().format('YYYY-MM-DD HH:mm:ss'),
            lastcreated: created
        };

        const { friends } = this.state;
        const that = this;

        firebase.firestore().collection('channels').add(channelData).then(function (docRef) {
            const participationData = {
                channel: docRef.id,
                user: that.props.userprops.id,
                chat_cnt: 0
            }
            firebase.firestore().collection('channel_participation').add(participationData);

            const checkedFriends = friends.filter(friend => friend.checked);
            checkedFriends.forEach(friend => {
                const participationData = {
                    channel: docRef.id,
                    user: friend.id,
                    chat_cnt: 0
                }
                firebase.firestore().collection('channel_participation').add(participationData);
            });

            that.showNameDialog(false);
            that.props.onCancel();
        }).catch(function (error) {
            alert(error);
        });

    }

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.onCheck(item)}>
            <View style={styles.container}>
                <FastImage style={styles.photo} source={item.profilePictureURL ? { uri: item.profilePictureURL } : null} />
                <Text style={styles.name}>{item.fullName}</Text>
                <Text style={{fontSize:10,color:'grey',fontFamily:'KBFGDisplay-Medium',flex:1,marginLeft:6}}>{item.type}</Text>
                {item.checked &&
                    <Icon color='rgb(250,180,0)' name='checkcircleo' size={24} />
                }
            </View>
        </TouchableOpacity>
    );

    onCancel = () => {
        this.props.onCancel();
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                onRequestClose={this.onCancel}>
                <SafeAreaView style={styles.modalView}>
                    <View style={styles.topBar}>
                        <Text style={styles.title}>대화상대 선택</Text>
                        <TouchableOpacity style={[AppStyles.styleSet.menuBtn.container, styles.leftBtn]} onPress={this.onCancel} >
                            <Icon name='close' size={24} />
                        </TouchableOpacity>
                        <View style={styles.rightBtn}>
                            <TextButton style={styles.rightBtnText} onPress={this.onCreate} >확인</TextButton>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', padding: 10 }}>

                    <TouchableOpacity onPress={() => {
                            this.setState({sort: -1})
                            this.usersUnsubscribe();
                            this.heAcceptedFriendshipssUnsubscribe();
                            this.iAcceptedFriendshipssUnsubscribe();
                            this.heAcceptedFriendshipssUnsubscribe = this.heAcceptedFriendshipsRef.onSnapshot(this.onHeAcceptedFriendShipsCollectionUpdate);
                            this.iAcceptedFriendshipssUnsubscribe = this.iAcceptedFriendshipsRef.onSnapshot(this.onIAcceptedFriendShipsCollectionUpdate);
                            
                        }}
                            style={{ borderRadius: 16, borderColor: 'white', width: WIDTH * 0.2, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={this.state.sort==-1 ? {color:'rgb(250,180,0)',fontFamily:'KBFGDisplay-Medium'}:{fontFamily:'KBFGDisplay-Medium'}}>전체보기</Text></TouchableOpacity>
                    
                        <TouchableOpacity onPress={() => {
                            this.setState({sort: 0})
                            this.usersUnsubscribe();
                            this.heAcceptedFriendshipssUnsubscribe();
                            this.iAcceptedFriendshipssUnsubscribe();
                            this.heAcceptedFriendshipssUnsubscribe = this.heAcceptedFriendshipsRef.onSnapshot(this.onHeAcceptedFriendShipsCollectionUpdate);
                            this.iAcceptedFriendshipssUnsubscribe = this.iAcceptedFriendshipsRef.onSnapshot(this.onIAcceptedFriendShipsCollectionUpdate);
                            
                        }}
                            style={{ borderRadius: 16, borderColor: 'white', width: WIDTH * 0.2, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={this.state.sort==0 ? {color:'rgb(250,180,0)',fontFamily:'KBFGDisplay-Medium'}:{fontFamily:'KBFGDisplay-Medium'}}>진행요원</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setState({sort: 1})
                            this.usersUnsubscribe();
                            this.heAcceptedFriendshipssUnsubscribe();
                            this.iAcceptedFriendshipssUnsubscribe();
                            this.heAcceptedFriendshipssUnsubscribe = this.heAcceptedFriendshipsRef.onSnapshot(this.onHeAcceptedFriendShipsCollectionUpdate);
                            this.iAcceptedFriendshipssUnsubscribe = this.iAcceptedFriendshipsRef.onSnapshot(this.onIAcceptedFriendShipsCollectionUpdate);
                        }}
                            style={{ borderRadius: 16, borderColor: 'white', width: WIDTH * 0.2, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={this.state.sort==1 ? {color:'rgb(250,180,0)',fontFamily:'KBFGDisplay-Medium'}:{fontFamily:'KBFGDisplay-Medium'}}>보안요원</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setState({sort: 2})
                            this.usersUnsubscribe();
                            this.heAcceptedFriendshipssUnsubscribe();
                            this.iAcceptedFriendshipssUnsubscribe();
                            this.heAcceptedFriendshipssUnsubscribe = this.heAcceptedFriendshipsRef.onSnapshot(this.onHeAcceptedFriendShipsCollectionUpdate);
                            this.iAcceptedFriendshipssUnsubscribe = this.iAcceptedFriendshipsRef.onSnapshot(this.onIAcceptedFriendShipsCollectionUpdate);
                        }}
                        style={{ borderRadius: 16, borderColor: 'white', width: WIDTH * 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={this.state.sort==2 ? {color:'rgb(250,180,0)',fontFamily:'KBFGDisplay-Medium'}:{fontFamily:'KBFGDisplay-Medium'}}>드라이버</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setState({sort: 3})
                            this.usersUnsubscribe();
                            this.heAcceptedFriendshipssUnsubscribe();
                            this.iAcceptedFriendshipssUnsubscribe();
                            this.heAcceptedFriendshipssUnsubscribe = this.heAcceptedFriendshipsRef.onSnapshot(this.onHeAcceptedFriendShipsCollectionUpdate);
                            this.iAcceptedFriendshipssUnsubscribe = this.iAcceptedFriendshipsRef.onSnapshot(this.onIAcceptedFriendShipsCollectionUpdate);
                        }}
                        style={{ borderRadius: 16, borderColor: 'white', width: WIDTH * 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={this.state.sort==3 ? {color:'rgb(250,180,0)',fontFamily:'KBFGDisplay-Medium'}:{fontFamily:'KBFGDisplay-Medium'}}>게스트</Text></TouchableOpacity>
                    </View>
                    <FlatList
                        data={this.state.friends}
                        renderItem={this.renderItem}
                        keyExtractor={item => `${item.id}`}
                        initialNumToRender={5}
                    />
                    <DialogInput isDialogVisible={this.state.isNameDialogVisible}
                        title={'대화방 생성'}
                        hintInput={'대화방 이름'}
                        textInputProps={{ selectTextOnFocus: true }}
                        submitText={'OK'}
                        submitInput={(inputText) => { this.onSubmitName(inputText) }}
                        closeDialog={() => { this.showNameDialog(false) }}>
                    </DialogInput>

                </SafeAreaView>
            </Modal>
        );
    }
}


const styles = StyleSheet.create({
    modalView: {
        flex: 1,
    },
    container: {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    rightBtn: {
        position: 'absolute',
        top: 15,
        right: 10,
    },
    rightBtnText: {
        fontSize: 17,
        fontFamily:'KBFGDisplay-Medium',
        color: 'rgb(250,180,0)',
        fontWeight: 'bold',
    },
    leftBtn: {
        position: 'absolute',
        left: 0,
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontFamily:'KBFGDisplay-Medium',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    photo: {
        height: 40,
        borderRadius: 20,
        width: 40,
    },
    name: {
        marginLeft: 15,
        fontFamily:'KBFGDisplay-Medium',
        alignSelf: 'center',
        color: AppStyles.colorSet.mainTextColor,
    },
    checkContainer: {
    },
    checked: {
        width: 30,
        height: 30,
    }

});

const mapStateToProps = state => ({
    //user: state.auth.user,
});

export default connect(mapStateToProps)(CreateGroupModal);
