import React from 'react';
import { AsyncStorage, View, Text, Image, TouchableOpacity,StatusBar,Dimensions,Platform } from 'react-native';
import firebase from "react-native-firebase";
// import { resolve } from 'dns';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
let Width_400 = 0
if(WIDTH >= 400){
  Width_400 = WIDTH*0.7
}else{
  Width_400 = WIDTH*0.77
}
const platformheight = Platform.OS === 'android' ? 70 : HEIGHT*0.08
class Splash extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      logincheck: false,
      firebaselogincheck: false,
      user: null,
      user_id: null,
      user_memberid: null,
    }
    this.Loginauth()
  }
//   performTimeConsumingTask = async() => {
//     return new Promise((resolve) =>
//     setTimeout(
//       () => { resolve('result')},
//       2000
//     ))
//   }
//   async componentDidMount() {
//     // Preload data from an external API
//     // Preload data using AsyncStorage
//     const data = await this.performTimeConsumingTask();

//     if (data !== null) {
//       this.props.navigation.navigate('Home');
//     }
//   }
async Loginauth() {
  const email = await AsyncStorage.getItem("@loggedInUserID:id")
  const password = await AsyncStorage.getItem("@loggedInUserID:password")
  const key = await AsyncStorage.getItem("@loggedInUserID:key")
  console.log(email,password,key)
  const that = this;
  if(email != null && email.length > 0 && password != null && password.length > 0 && key != null)
  {
    
    var url = 'https://api.themonsports.com/v1/account'
    
    fetch(url,{
      method: 'POST',
      body: JSON.stringify({
        "id" : email,
        "pw" : password
      }),
    }).then(res => res.json())
    .catch(error => {
    })
    .then(response => {
      console.log(response)
      var user_memberid = response.team_id
      this.setState({
        user_id: key,
        user_memberid: user_memberid,
        logincheck: true
      })
    })

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        firebase
          .firestore()
          .collection("users")
          .doc(email)
          .get()
          .then(function(doc) {
            that.setState({
              firebaselogincheck: true,
            })
            if(that.state.logincheck && that.state.firebaselogincheck){
              that.props.navigation.navigate('Main',{
                user_id: that.state.user_id,
                user_memberid: that.state.user_memberid,
                user: doc
              })
            }
          })
          .catch(function(error) {
            const { code, message } = error;
            console.log(error)
            alert(message);
          });
      })
      .catch(error => {
        const { code, message } = error;
        console.log(error)
        alert(message);
      });

    return;
  }else{
    setTimeout(() => {
      this.props.navigation.replace('Home')
    },3000)
  }

}
componentDidMount() {
    // setTimeout(() => {
    //   firebase.auth().onAuthStateChanged(user => {
    //     if(user){
    //       this.props.navigation.navigate('Main',{user: user})
    //     }else{
    //       this.props.navigation.navigate('Home')
    //     }
        
    //   })
    //   this.props.navigation.replace('Home')
    // },3000)
    
  }
    render() {
      return (
        
        <View style={{ flex: 1,backgroundColor: 'rgb(250,180,0)' }}>

        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "rgb(250,180,0)" translucent = {true}/>
        <TouchableOpacity style={{marginBottom:200,marginRight:10,marginTop:50,alignItems:'flex-end'}}
        onPress={() => this.Loginauth()}>
        <Text style={{textAlign:'right',fontFamily:'KBFGDisplay-Medium',fontSize:15,color:'#ffffff'}}>건너뛰기 >></Text>
        </TouchableOpacity>
        <View style={{justifyContent:'center',alignItems: 'center'}}>
          <Image  style={{width:'100%',marginBottom:136,marginVertical: 34.5,resizeMode:'contain'}}
          			source={require('../assets/images/logos.png')}>

                </Image>
                </View>
            
        </View>
      );
    }
  }
  
  export default Splash