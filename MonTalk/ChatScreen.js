import React from 'react';
import { FlatList, Image, StyleSheet, Platform, Text, TextInput, TouchableOpacity, View, Dimensions, Modal } from 'react-native';
import TextButton from 'react-native-button';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import AppStyles from '../AppStyles';
import ActionSheet from 'react-native-actionsheet'
import DialogInput from 'react-native-dialog-input';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/AntDesign'
import ImagePicker from 'react-native-image-picker';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import moment from 'moment'
import ImageViewer from 'react-native-image-zoom-viewer';
import * as Progress from 'react-native-progress';
import RNFetchBlob from 'rn-fetch-blob'
const WIDTH = Dimensions.get('window').width;
class ChatScreen extends React.Component {
    // static navigationOptions = ({ navigation }) => {
    //     let title = navigation.state.params.channel.name;
    //     let isOne2OneChannel = false;
    //     if (!title) {
    //         isOne2OneChannel = true;
    //         title = navigation.state.params.channel.participants[0].fullName;
    //     }
    //     const options = {
    //         title: title,
    //     }
    //     if (!isOne2OneChannel) {
    //         options.headerRight = <TextButton style={AppStyles.styleSet.rightNavButton} onPress={() => navigation.state.params.onSetting()} >Settings</TextButton>
    //     }
    //     return options;
    // };

    constructor(props) {
        super(props);

        const channel = props.navigation.getParam('channel');

        this.state = {
            title: channel.name,
            isRenameDialogVisible: false,
            channel: channel,
            threads: [],
            input: '',
            photo: null,
            downloadUrl: '',
            user: this.props.navigation.getParam('user'),
            user_memberid: this.props.navigation.getParam('user_memberid'),
            sender: null,

            imagevisible: false,
            images: null,
            images_url: null,
            imagloading: false,
        }
        if (!this.state.title) {
            this.setState({
                title: channel.participants[0].fullName
            })
        }

        this.threadsRef = firebase.firestore().collection('channels').doc(channel.id).collection('threads').orderBy('created', 'desc');
        this.threadsUnscribe = null;
    }

    componentDidMount() {
        this.threadsUnscribe = this.threadsRef.onSnapshot(this.onThreadsCollectionUpdate);
        this.props.navigation.setParams({
            onSetting: this.onSetting
        });
        // firebase.firestore().collection('channel_participation')
        //         .where('channel', '==', this.state.channel.id)
        //         .where('user', '==', this.state.user.id)
        //         .get().then(querySnapshot => {
        //             querySnapshot.forEach(function (doc) {
        //                 //console.log(doc)
        //                 doc.ref.update({
        //                     chat_cnt: 0
        //                 })
        //                 return
        //             });

        //         })
    }

    componentWillUnmount() {
        this.threadsUnscribe();
    }

    existSameSentMessage = (messages, newMessage) => {
        for (let i = 0; i < messages.length; i++) {
            const temp = messages[i];
            if (newMessage.senderID == temp.senderID && temp.content == newMessage.content && temp.created == newMessage.created) {
                return true;
            }
        }

        return false;
    }

    onThreadsCollectionUpdate = (querySnapshot) => {

        const data = [];
        querySnapshot.forEach((doc) => {
            const message = doc.data();
            message.id = doc.id;

            if (!this.existSameSentMessage(data, message)) {
                data.push(message);
            }

        });

        this.setState({ threads: data });

    }

    onSettingActionDone = (index) => {
        if (index == 0) {
            this.showRenameDialog(true);
        } else if (index == 1) {
            this.onLeave();
        }
    }

    onConfirmActionDone = (index) => {
        if (index == 0) {
            firebase.firestore().collection('channel_participation')
                .where('channel', '==', this.state.channel.id)
                .where('user', '==', this.state.user.id)
                .get().then(querySnapshot => {
                    querySnapshot.forEach(function (doc) {
                        doc.ref.delete();
                    });
                    this.props.navigation.goBack(null);
                });
        }
    }

    onSetting = () => {
        this.settingActionSheet.show();
    }

    onLeave = () => {
        this.confirmLeaveActionSheet.show();
    }

    onPressChat = (chat) => {

        const img = []
        if (chat.url != '') {
            this.setState({
                images_url: chat.url,
            })
            const img = [{
                url: chat.url,
            },]
            this.setState({
                images: img,
                imagevisible: true,
                imagloading: false,
            })
        }
    }


    createOne2OneChannel = () => {
        let created = Date.now();

        const channelData = {
            creator_id: this.state.user.id,
            name: '',
            lastMessage: this.state.input,
            lastMessageDate: moment().format('YYYY-MM-DD HH:mm:ss'),
            lastcreated: created
        };

        const { id, fullName, profilePictureURL } = this.state.user;

        const that = this;
        firebase.firestore().collection('channels').add(channelData).then(function (docRef) {

            channelData.id = docRef.id;
            channelData.participants = that.state.channel.participants;
            console.log(channelData)
            that.setState({ channel: channelData });
            console.log(that.state.channel)
            const participationData = {
                channel: docRef.id,
                user: that.state.user.id,
                chat_cnt: 0
            }
            firebase.firestore().collection('channel_participation').add(participationData);
            let created = Date.now();
            channelData.participants.forEach(friend => {
                const participationData = {
                    channel: docRef.id,
                    user: friend.id,
                    chat_cnt: 0
                }
                firebase.firestore().collection('channel_participation').add(participationData);
                const data = {
                    content: that.state.input,
                    created: created,
                    lastMessageDate: moment().format('YYYY-MM-DD HH:mm:ss'),
                    recipientFirstName: friend.fullName,
                    recipientID: friend.id,
                    recipient_token: friend.push_token,
                    recipientLastName: '',
                    recipientProfilePictureURL: friend.profilePictureURL,
                    senderFirstName: fullName,
                    senderID: id,
                    senderLastName: '',
                    senderProfilePictureURL: profilePictureURL,
                    url: that.state.downloadUrl,
                }

                firebase.firestore().collection('channels').doc(channelData.id).collection('threads').add(data).then(function (docRef) {
                    // alert('Successfully sent friend request!');
                }).catch(function (error) {
                    alert(error);
                });

            });

            that.threadsRef = firebase.firestore().collection('channels').doc(channelData.id).collection('threads').orderBy('created', 'desc');
            that.threadsUnscribe = that.threadsRef.onSnapshot(that.onThreadsCollectionUpdate);

            that.setState({ input: '', downloadUrl: '', photo: '' });

        }).catch(function (error) {
            alert(error);
        });

    }

    uploadPromise = () => {
        const uri = this.state.photo;
        return new Promise((resolve, reject) => {
            let filename = uri.substring(uri.lastIndexOf('/') + 1);
            const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
            firebase.storage().ref(filename).putFile(uploadUri).then(function (snapshot) {
                resolve(snapshot.downloadURL);
            });
        });
    }

    _send = () => {
        if (!this.state.channel.id) {
            this.createOne2OneChannel();
        } else {
            const { id, fullName, profilePictureURL } = this.state.user;
            let created = Date.now();

            this.state.channel.participants.forEach(friend => {

                const data = {
                    content: this.state.input,
                    created: created,
                    lastMessageDate: moment().format('YYYY-MM-DD HH:mm:ss'),
                    name:this.state.channel.name,
                    recipientFirstName: friend.fullName,
                    recipientID: friend.id,
                    recipient_token: friend.push_token,
                    recipientLastName: '',
                    recipientProfilePictureURL: this.state.user._data.profilePictureURL,
                    senderFirstName: this.state.user._data.fullName,
                    senderID: id,
                    senderLastName: '',
                    senderProfilePictureURL: profilePictureURL,
                    url: this.state.downloadUrl,
                }
                this.setState({
                    sender: friend.fullName
                })
                firebase.firestore().collection('channel_participation')
                .where('channel', '==', this.state.channel.id)
                .get().then(querySnapshot => {
                    querySnapshot.forEach(function (doc) {
                        let cnt = doc._data.chat_cnt + 1
                        console.log(doc)
                        if(doc._data.user == friend.id){
                            doc.ref.update({
                                chat_cnt: cnt
                            })
                        }
                        return

                    });
                })
                firebase.firestore().collection('channels').doc(this.state.channel.id).collection('threads').add(data).then(function (docRef) {
                    // alert('Successfully sent friend request!');
                }).catch(function (error) {
                    alert(error);
                });
            });

            let lastMessage = this.state.downloadUrl;
            if (!lastMessage) {
                lastMessage = this.state.input;
            }

            const channel = { ...this.state.channel };

            delete channel.participants;
            channel.lastMessage = lastMessage;
            //channel.lastMessageDate = firebase.firestore.FieldValue.serverTimestamp();
            channel.lastMessageDate = moment().format('YYYY-MM-DD HH:mm:ss')
            channel.lastcreated = Date.now()
            firebase.firestore().collection('channels').doc(this.state.channel.id).set(channel);
            this.setState({ input: '', downloadUrl: '', photo: '' });

        }
    }

    onSend = () => {
        this._send();
    }

    onSelect = () => {
        const options = {
            title: '선택해주세요..',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        const { id, fullName, profilePictureURL } = this.state.user;

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {

                const data = {
                    content: '',
                    created: Date.now(),
                    senderFirstName: fullName,
                    senderID: id,
                    senderLastName: '',
                    senderProfilePictureURL: profilePictureURL,
                    url: 'http://fake',
                    lastMessageDate: moment().format('YYYY-MM-DD HH:mm:ss')
                }

                this.setState({
                    photo: response.uri,
                    threads: [data, ...this.state.threads],
                });

                this.uploadPromise().then((url) => {
                    this.setState({ downloadUrl: url });
                    this._send();
                });
            }
        });
    }

    showRenameDialog = (show) => {
        this.setState({ isRenameDialogVisible: show });
    }

    onChangeName = (text) => {

        this.showRenameDialog(false);

        const channel = { ...this.state.channel };
        delete channel.participants;
        channel.name = text;

        firebase.firestore().collection('channels').doc(this.state.channel.id).set(channel).then(() => {
            const newChannel = this.state.channel;
            newChannel.name = text;
            this.setState({ channel: newChannel });
            this.props.navigation.setParams({
                channel: newChannel
            });
        });
    }

    renderChatItem = ({ item }) => (
        //console.log(item),
        <TouchableOpacity onPress={() => this.onPressChat(item)}>
            {item.senderID == this.state.user.id &&
                <View style={styles.sendItemContainer}>
                    {item.url != '' &&
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'grey', fontFamily: 'GodoM', padding: 5, fontSize: 10, alignSelf: 'flex-end' }}>{AppStyles.utils.timeFormat(item.lastMessageDate)}</Text>
                            <View style={[styles.itemContent, styles.sendItemContent, { padding: 0 }]}>
                                <FastImage style={styles.sendPhotoMessage} source={{ uri: item.url }} />
                            </View>
                        </View>
                    }
                    {item.url == '' &&
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'grey', fontFamily: 'GodoM', padding: 5, fontSize: 10, alignSelf: 'flex-end' }}>{AppStyles.utils.timeFormat(item.lastMessageDate)}</Text>
                            <View style={{
                                maxWidth: WIDTH * 0.68,
                                padding: 10,
                                backgroundColor: 'rgb(250,180,0)',
                                borderRadius: 10,
                                marginRight: 10
                            }}>
                                <Text style={styles.sendTextMessage}>{item.content}</Text>
                            </View>
                        </View>
                    }
                    <FastImage style={styles.userIcon} source={{ uri: item.recipientProfilePictureURL }} />
                </View>
            }
            {item.senderID != this.state.user.id &&
                <View style={styles.receiveItemContainer}>
                    <FastImage style={styles.userIcon} source={{ uri: item.recipientProfilePictureURL }} />
                    {item.url != '' &&
                        <View>
                            <Text style={{ fontSize: 10, color: 'grey', marginLeft: 10, fontFamily: 'GodoM' }}>{item.senderFirstName}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={[styles.itemContent, styles.receiveItemContent, { padding: 0 }]}>
                                    <FastImage style={styles.receivePhotoMessage} source={{ uri: item.url }} />
                                </View>
                                <Text style={{ color: 'grey', fontFamily: 'GodoM', marginLeft: 10, padding: 5, fontSize: 10, alignSelf: 'flex-end' }}>{AppStyles.utils.timeFormat(item.lastMessageDate)}</Text>
                            </View>
                        </View>
                    }
                    {item.url == '' &&
                        <View style={{ maxWidth: '100%' }}>
                            <Text style={{ fontSize: 10, color: 'grey', fontFamily: 'GodoM', marginLeft: 10 }}>{item.senderFirstName}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{
                                    maxWidth: WIDTH * 0.68,
                                    padding: 10,
                                    backgroundColor: AppStyles.colorSet.hairlineColor,
                                    borderRadius: 10,
                                    marginLeft: 10
                                }}>
                                    <Text style={styles.receiveTextMessage}>{item.content}</Text>
                                </View>
                                <Text style={{ color: 'grey', fontFamily: 'GodoM', padding: 5, fontSize: 10, alignSelf: 'flex-end' }}>{AppStyles.utils.timeFormat(item.lastMessageDate)}</Text>
                            </View>
                        </View>
                    }

                </View>
            }
        </TouchableOpacity>
    );

    isDisable = () => {
        return !this.state.input;
    }

    sendBtnStyle = () => {
        const style = { padding: 10 };
        if (this.isDisable()) {
            style.opacity = 0.2;
        } else {
            style.opacity = 1;
        }
        return style;
    }

    saveImage() {
        RNFetchBlob
            .config({
                // add this option that makes response data to be stored as a file,
                // this is much more performant.
                fileCache: true,
            })
            .fetch('GET', this.state.images_url, {
                //some headers ..
            })
            .then((res) => {
                // the temp file path
                console.log('The file saved to ', res.path())
            })
    }

    render() {
        return (

            <SafeAreaView style={styles.container}>
                <Modal visible={this.state.imagevisible} transparent={true}>

                    <ImageViewer onSave={() => { }}
                        imageUrls={this.state.images} />
                    <TouchableOpacity onPress={() => this.setState({ imagevisible: false })}
                        style={{ position: 'absolute', top: 25, left: WIDTH * 0.77, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon color='white' size={24} name='close' />
                    </TouchableOpacity>
                </Modal>
                <View style={{ height: 75, width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'center', padding: 24, marginTop: 5 }}>
                        <TouchableOpacity style={{ width: 35.8 }}
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon color='rgb(250,180,0)' size={25.5} name='arrowleft' />
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: 'center', padding: 24, marginTop: 5 }}>
                        <Text style={{ fontSize: 17, fontFamily: 'GodoM', fontWeight: 'bold', color: '#200d14' }}>{this.state.title}</Text>
                    </View>

                    <View style={{ marginTop: 27, flexDirection: 'row', marginHorizontal: 16, alignItems: 'center', justifyContent: 'center' }}>
                        {
                            this.state.user_memberid == 1 ?
                                <TouchableOpacity style={{ width: 35.8 }}
                                    onPress={() => this.onSetting()}>
                                    <Icon color='rgb(250,180,0)' size={25.5} name='setting' />
                                </TouchableOpacity> : null
                        }

                    </View>
                </View>
                <KeyboardAwareView style={styles.chats}>
                    <FlatList
                        inverted
                        vertical
                        showsVerticalScrollIndicator={false}
                        data={this.state.threads}
                        renderItem={this.renderChatItem}
                        keyExtractor={item => `${item.id}`}
                    />

                    <View style={styles.inputBar}>
                        <TouchableOpacity style={styles.btnContainer} onPress={this.onSelect}>
                            <Image style={styles.icon} source={AppStyles.iconSet.camera_filled} />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            value={this.state.input}
                            multiline={true}
                            onChangeText={(text) => this.setState({ input: text })}
                            placeholder='입력해주세요...'
                            underlineColorAndroid='transparent' />
                        <TouchableOpacity disabled={this.isDisable()} style={this.sendBtnStyle()} onPress={this.onSend}>
                            <Image style={styles.icon} source={AppStyles.iconSet.share} />
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareView>
                <ActionSheet
                    ref={o => this.settingActionSheet = o}
                    title={'채팅방 설정'}
                    options={['채팅방 이름변경', '채팅방 나가기', '취소']}
                    cancelButtonIndex={2}
                    destructiveButtonIndex={1}
                    onPress={(index) => { this.onSettingActionDone(index) }}
                />
                <ActionSheet
                    ref={o => this.confirmLeaveActionSheet = o}
                    title={'정말 하시겠습니까?'}
                    options={['확인', '취소']}
                    cancelButtonIndex={1}
                    destructiveButtonIndex={0}
                    onPress={(index) => { this.onConfirmActionDone(index) }}
                />
                <DialogInput isDialogVisible={this.state.isRenameDialogVisible}
                    title={'채팅방 이름변경'}
                    hintInput={this.state.channel.name}
                    textInputProps={{ selectTextOnFocus: true }}
                    submitText={'OK'}
                    submitInput={(inputText) => { this.onChangeName(inputText) }}
                    closeDialog={() => { this.showRenameDialog(false) }}>
                </DialogInput>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(242,242,242)',
        flex: 1,
    },
    chats: {
        padding: 10,
        flex: 1,
    },
    itemContent: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: AppStyles.colorSet.hairlineColor,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        maxWidth: '70%',
    },
    sendItemContainer: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        marginBottom: 10,
    },
    userIcon: {
        width: 34,
        height: 34,
        borderRadius: 17,
    },
    sendItemContent: {
        marginRight: 10,
        backgroundColor: 'rgb(250,180,0)',
    },
    receiveItemContainer: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        marginBottom: 10,
    },
    receiveItemContent: {
        marginLeft: 10,
        maxWidth: '70%'
    },
    sendPhotoMessage: {
        width: 200,
        height: 150,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    receivePhotoMessage: {
        width: 200,
        height: 150,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    sendTextMessage: {
        fontSize: 16,
        fontFamily: 'GodoM',
        color: AppStyles.colorSet.mainThemeBackgroundColor,
    },
    receiveTextMessage: {
        color: AppStyles.colorSet.mainTextColor,
        fontFamily: 'GodoM',
        fontSize: 16,
    },
    inputBar: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: AppStyles.colorSet.hairlineColor,
        flexDirection: 'row',
        marginBottom: 10,
    },
    icon: {
        tintColor: 'rgb(250,180,0)',
        width: 25,
        height: 25,
    },
    input: {
        margin: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        backgroundColor: AppStyles.colorSet.grayBgColor,
        fontSize: 16,
        fontFamily: 'GodoM',
        borderRadius: 20,
    }



});

const mapStateToProps = state => ({
    //user: state.auth.user,
});

export default connect(mapStateToProps)(ChatScreen);

