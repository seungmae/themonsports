import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert,TouchableWithoutFeedback,Keyboard,AsyncStorage} from 'react-native';
import { Input } from 'react-native-elements';
import firebase from "react-native-firebase";
import moment from 'moment';
import * as Progress from 'react-native-progress';
const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  {children}
  </TouchableWithoutFeedback>
)
class LoginScreen extends React.Component {
  state = {
    password: null,
    email:null,

    logincheck: false,
    firebaselogincheck: false,

    alerts: false,
    user: null,
    user_id: null,
    user_memberid: null,

    loading: false,
  }
  Login = () => {
    this.setState({loading: true})
    var url = 'https://api.themonsports.com/v1/account'
    
    fetch(url,{
      method: 'POST',
      body: JSON.stringify({
        "id" : this.state.id,
        "pw" : this.state.password
      }),
    }).then(res => res.json())
    .catch(error => {
      console.log('Error:',error)
      Alert.alert('이메일 또는 비밀번호가\n 일치하지 않습니다.')
      this.setState({loading:false,logincheck:false})
    })
    .then(response => {
      var user_id = response.data
      var user_memberid = response.team_id
      console.log(response)
      if(response.result == 'FAIL'){
        Alert.alert('이메일 또는 비밀번호가\n 일치하지 않습니다.')
        this.setState({
          loading:false
        })
      }else if(response.result == 'REJECT'){
        Alert.alert('가입승인 대기중입니다.')
        this.setState({
          loading:false
        })
      }
      else{
        AsyncStorage.setItem("@loggedInUserID:key", user_id.toString());
        this.setState({
          user_id: user_id,
          user_memberid: user_memberid,
          logincheck:true
        })
      }
    })

    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const { navigation } = this.props.navigation;
        //user_uid = response.user._user.uid;
        firebase
          .firestore()
          .collection("users")
          // .doc(user_uid)
          .doc(email)
          .get()
          .then(user => {
            console.log(user)
            if (user.exists) {
              //AsyncStorage.setItem("@loggedInUserID:id", user_uid);
              AsyncStorage.setItem("@loggedInUserID:id", email);
              AsyncStorage.setItem("@loggedInUserID:password", password);
              this.setState({user: user,firebaselogincheck:true})
              
            } else {
              //Alert.alert("이메일 또는 비밀번호가\n 일치하지 않습니다.");
              this.setState({loading:false})
            }
          })
          .catch(function(error) {
            const { code, message } = error;
            console.log(error)
            //Alert.alert('이메일 또는 비밀번호가\n 일치하지 않습니다.');
            this.setState({loading:false})
          });
      })
      .catch(error => {
        const { code, message } = error;
        console.log(error)
        Alert.alert('이메일 또는 비밀번호가\n 일치하지 않습니다.');
        this.setState({loading:false})
      });
  }
  firebaselogin = () => {
    
    firebase.auth().sendPasswordResetEmail(this.state.email).then(function() {
      Alert.alert('비밀번호 재설정 이메일을 보냈습니다.')
    }).catch(function(error) {
      Alert.alert('이메일이 올바르지 않습니다.')
    });
  };

  render() {
      return (
        
        <DismissKeyboard>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: 'rgb(250,180,0)' }}>
        {
          this.state.loading ? 
          <Progress.Circle size={50} indeterminate={true} color='black' style={{position:'absolute'}}/> 
          : null
        }
        
            <View style={{alignItems: 'center', marginVertical: 34.5}}>
                <Text style={{fontFamily:'KBFGText-Bold',fontSize:36, color:'#ffffff'}}>Monsystem</Text>
                <Text style={{fontFamily:'KBFGText-Bold',fontSize:36, color:'#ffffff',marginBottom:66}}>Login</Text>
            </View>
            {/* <Image  style={{width:67.3, height: 67.3}}
          			source={require('../assets/images/user.png')}/> */}
            
            <Input labelStyle={{color:'#ffffff',fontFamily:'KBFGText-Medium',fontSize:16}} label='이메일' 
            inputContainerStyle={{borderBottomColor:'#ffffff'}}
            inputStyle={{fontFamily:'KBFGText-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
            onChangeText={(id) => this.setState({id,email:id})} value={this.state.id}
            containerStyle={{marginBottom:12.5, width:242,marginVertical:10,}}/>

            <Input labelStyle={{color:'#ffffff',fontFamily:'KBFGText-Medium',fontSize:16}} label='Password' 
            inputContainerStyle={{borderBottomColor:'#ffffff'}}
            inputStyle={{fontFamily:'KBFGText-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
            onChangeText={(password) => this.setState({password})} value={this.state.password}
            containerStyle={{marginBottom:60.5, width:242,marginVertical:10,}} secureTextEntry={true}/>
            
            <TouchableOpacity onPress={this.state.logincheck && this.state.firebaselogincheck ?  
            this.props.navigation.navigate('Main',{
              user_id: this.state.user_id,
              user: this.state.user,
              user_memberid: this.state.user_memberid
            })
            : () => this.Login()}
            
            style={styles.buttonlogin}>
            <Text style={styles.buttonTextlogin}>로그인</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={!this.state.logincheck ? () => this.firebaselogin() : 
            this.props.navigation.navigate('Main',{
              user: this.state.user,
            })}
            style={styles.buttonlogin}>
            <Text style={styles.buttonTextlogin}>파이어베이스</Text>
            </TouchableOpacity> */}

            <View style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => this.firebaselogin()}>
            <Text style={{fontFamily:'KBFGText-Medium',fontSize:14, fontWeight:'500', color:'#ffffff',textAlign:'left'}}>비밀번호 찾기</Text>
            </TouchableOpacity>
            
            {/* <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:14, fontWeight:'500', color:'#ffffff',textAlign:'right'}}>계정전환하기</Text> */}
            
            </View>
            
           
          {/* <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          /> */}
          
        </View>
        </DismissKeyboard>
          
        
      );
    }
  }
  const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center'
    },
  
    inputBox: {
      width:300,
      backgroundColor:'rgba(255, 255,255,0.2)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontFamily:'KBFGText-Medium',fontSize:16,
      color:'#ffffff',
      marginVertical: 10
    },
    buttonlogin: {
        width:242.6,
        height: 50,
        backgroundColor:'#200d14',
        borderRadius: 5,
        marginVertical: 16,
        paddingVertical: 13
    },
    buttonTextlogin: {
      fontFamily:'KBFGDisplay-Medium',fontSize:18,
      marginVertical:3,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center',
    },
    buttonsignin: {
        width:242.6,
        height: 50,
        borderWidth: 1,
        backgroundColor:'rgba(255, 255, 255, 0.25)',
        borderRadius: 5,
        marginVertical: 16,
        paddingVertical: 13
    },
    buttonTextsignin: {
        fontFamily:'KBFGText-Medium',fontSize:18,
        fontWeight:'500',
        color:'#200d14',
        textAlign:'center'
    }
    
  });
  export default LoginScreen