import React from 'react';
import { Dimensions, View, Text, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input, CheckBox, Divider } from 'react-native-elements';

import firebase from 'react-native-firebase'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class FirebaseRegist extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            id: null,
            phone: null,
            email: null,
            password: null,
            fullname: null,
            success: null,
        };
    }

    componentDidMount() {
        this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                loading: false,
                user,
            });
        });
    }

    componentWillUnmount() {
        this.authSubscription();
    }

    onRegister = () => {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
            console.log(response)
            const { navigation } = this.props;
            user_uid = response.user._user.uid;

            const { fullname, phone, email } = this.state;
            const data = {
                email: email,
                firstName: fullname,
                phone: phone,
                userID: user_uid,
                appIdentifier: "rn-messenger-android",
                profilePictureURL: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
            };
            const that = this
            firebase.firestore().collection('users').doc(user_uid).set(data);
            firebase.firestore().collection('users').doc(user_uid).get().then(function (user) {
                navigation.dispatch({ type: 'Main', user: { ...user.data(), id: user.id } });
                that.setState({success:true})
            }).catch(function (error) {
                const { code, message } = error;
                alert(message);
            });

        }).catch((error) => {
            console.log(error)
            const { code, message } = error;
            alert(message);
        });
    }

    render() {
        return (
            <DismissKeyboard>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.123 }}>
                        <Text style={{ fontFamily: 'GodoM', fontSize: 36, fontWeight: 'bold', color: '#1f0c13' }}>회원가입</Text>
                        <Text style={{ fontFamily: 'GodoM', fontSize: 13, fontWeight: 'bold', color: '#200d14', marginTop: 13, marginLeft: 18, marginRight: WIDTH * 0.226 }}>테스트용</Text>
                    </View>


                    <View>
                        <Input placeholder='이메일' placeholderTextColor='#8d8d8d'
                            inputContainerStyle={{ borderBottomColor: '#ffb400' }}
                            inputStyle={{ fontFamily: 'GodoM', fontSize: 14, fontWeight: '300', color: '#3f414f' }}
                            onChangeText={(text) => this.setState({ email: text })} value={this.state.id}
                            containerStyle={{ marginBottom: HEIGHT * 0.0443, width: WIDTH * 0.646, marginTop: 100, backgroundColor: '#ffffff', zIndex: 0 }} />
                    </View>
                    <Input placeholder='비밀번호' placeholderTextColor='#8d8d8d'
                        inputContainerStyle={{ borderBottomColor: '#ffb400' }} secureTextEntry={true}
                        inputStyle={{ fontFamily: 'GodoM', fontSize: 14, fontWeight: '300', color: '#3f414f' }}
                        onChangeText={(text) => this.setState({ password: text })} value={this.state.password}
                        containerStyle={{ marginBottom: HEIGHT * 0.0443, width: WIDTH * 0.646, marginTop: 0, backgroundColor: '#ffffff' }} />

                    <Input placeholder='전화번호' placeholderTextColor='#8d8d8d'
                        inputContainerStyle={{ borderBottomColor: '#ffb400' }}
                        inputStyle={{ fontFamily: 'GodoM', fontSize: 14, fontWeight: '300', color: '#3f414f' }}
                        onChangeText={(text) => this.setState({ phone: text })} value={this.state.phone}
                        containerStyle={{ marginBottom: HEIGHT * 0.0443, width: WIDTH * 0.646, marginTop: 0, backgroundColor: '#ffffff' }} />

                    <Input placeholder='닉네임' placeholderTextColor='#8d8d8d'
                        inputContainerStyle={{ borderBottomColor: '#ffb400' }}
                        inputStyle={{ fontFamily: 'GodoM', fontSize: 14, fontWeight: '300', color: '#3f414f' }}
                        onChangeText={(text) => this.setState({ fullname: text })} value={this.state.fullname}
                        containerStyle={{ marginBottom: 100, width: WIDTH * 0.646, marginTop: 0, backgroundColor: '#ffffff' }} />

                    <View style={{ flexDirection: 'row', marginBottom: HEIGHT * 0.144 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                            style={{ width: WIDTH * 0.249, height: 39.6, borderRadius: 28, borderWidth: 1, borderColor: '#200d14', backgroundColor: 'rgba(255, 255, 255, 0.25)', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'GodoM', fontSize: 18, fontWeight: '500', color: '#200d14' }}>이전</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={!this.state.success ? () => this.onRegister() : this.props.navigation.navigate('Login')}
                            style={{ marginLeft: 30, width: WIDTH * 0.249, height: 39.6, borderRadius: 28, backgroundColor: '#ffb400', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'GodoM', fontSize: 18, fontWeight: '500', color: '#ffffff' }}>가입</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </DismissKeyboard>
        );
    }
}

export default FirebaseRegist;