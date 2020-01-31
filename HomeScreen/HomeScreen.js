import React from 'react';
import moment from 'moment';
import firebase from 'react-native-firebase';
import { StyleSheet, View, Text, Image, TouchableOpacity,StatusBar,Dimensions,Platform } from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
let Width_400 = 0
if(WIDTH >= 400){
  Width_400 = WIDTH*0.7
}else{
  Width_400 = WIDTH*0.8
}
const platformheight = Platform.OS === 'android' ? 70 : HEIGHT*0.08
class HomeScreen extends React.Component {
  state = {
    test: WIDTH
  }

  componentDidMount() {
    if(Platform.OS === 'android'){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
        },
        (error) => {
          console.log(error);
        }
      )
    }
    //   navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log(position)
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    // );
  }

    render() {
      return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: 'rgb(250,180,0)' }}>

        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "rgb(250,180,0)" translucent = {true}/>
            {/* <View style={{alignItems: 'center', marginVertical: 34.5}}>
                <Text style={{fontFamily:'KBFGDisplay-Medium',fontFamily:'KBFGDisplay-Medium',fontSize:36,color:'#ffffff'}}>Monsystem</Text>
                <Text style={{fontFamily:'KBFGDisplay-Medium',fontFamily:'KBFGDisplay-Medium',fontSize:36, color:'#ffffff'}}>Login</Text>
            </View> */}
          <Image  style={{width:'100%',marginTop:150,marginBottom:136,marginVertical: 34.5, resizeMode:'contain'}}
          			source={require('../assets/images/logos.png')}/>

            <View style={{justifyContent: 'flex-end'}}>

                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Login')}
            style={styles.buttonlogin}>
                <Text style={styles.buttonTextlogin}>로그인</Text>
            </TouchableOpacity>   

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signintype')}
            style={styles.buttonsignin}>
            <View style={{ flexDirection: 'row'}}>
            <Image  style={{width:18.3, height: 18.3,marginRight:10.9}}
          			source={require('../assets/images/edit.png')}/>
                <Text style={styles.buttonTextsignin}>회원가입</Text>
            </View>
            </TouchableOpacity>  

            </View>
            
           
          {/* <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          /> */}
        </View>
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
      fontFamily:'KBFGDisplay-Medium',fontSize:16,
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
        paddingVertical: 13,
        alignItems: 'center'
    },
    buttonTextsignin: {
        fontFamily:'KBFGDisplay-Medium',fontSize:18,
        fontWeight:'500',
        color:'#200d14',
        textAlign: 'left',
    }
    
  });
  
  export default HomeScreen