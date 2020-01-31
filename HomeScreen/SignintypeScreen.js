import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions,Image ,ImageBackground } from 'react-native';
import { Input } from 'react-native-elements';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
let Width_400 = 0
if(WIDTH >= 400){
  Width_400 = WIDTH*0.13
}else{
  Width_400 = WIDTH*0.18-6
}
class SignintypeScreen extends React.Component {

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: 'rgb(250,180,0)' }}>
            <View style={{alignItems: 'center', marginBottom: 50}}>
                <Text style={{fontFamily:'KBFGText-Bold',fontSize:36, color:'#ffffff'}}>Monsystem</Text>
                <Text style={{fontFamily:'KBFGText-Bold',fontSize:36, color:'#ffffff'}}>Regist</Text>
            </View>
            <Text style={{fontFamily:'KBFGDisplay-Bold',fontFamily:'KBFGDisplay-Medium',fontSize:25,fontWeight:'bold',color:'#200d14',marginTop:15}}>타입을 선택해 주세요</Text>
            <View style={{flexDirection:'row',flexWrap: 'wrap',
                justifyContent: 'space-evenly',marginTop:41.5}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin_p_agent_terms')}
            style={{backgroundColor:'#ffffff',borderRadius:10, width:WIDTH*0.44, height:119,marginVertical:8}}>
            <Text style={{ marginTop:13,marginLeft:17.3, fontFamily:'KBFGDisplay-Medium',fontWeight:'500',fontFamily:'KBFGDisplay-Medium',fontSize:20,color: '#200d14'}}>진행요원</Text>
            <Image  style={{width:WIDTH*0.18, height: HEIGHT*0.0738,marginTop:22,marginLeft:98}}
                    source={require('../assets/images/2.png')}/>
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin_s_agent_terms')}
            style={{backgroundColor:'#ffffff',borderRadius:10, width:WIDTH*0.44, height:119,marginVertical:8}}>
            <Text style={{ marginTop:13,marginLeft:17.3, fontFamily:'KBFGDisplay-Medium',fontWeight:'500',fontFamily:'KBFGDisplay-Medium',fontSize:20,color: '#200d14'}}>보안요원</Text>
                <Image  style={{width:Width_400, height: HEIGHT*0.0677,marginTop:HEIGHT*0.0359,marginLeft:WIDTH*0.266}}
                    source={require('../assets/images/upmu_s1.png')}/>
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin_d_agent_terms')}
            style={{backgroundColor:'#ffffff',borderRadius:10, width:WIDTH*0.44, height:119,marginVertical:8}}>
                <ImageBackground  style={{width:WIDTH*0.44, height: 119}}
                    source={require('../assets/images/driver.png')}>
                <Text style={{ marginTop:13,marginLeft:17.3, fontFamily:'KBFGDisplay-Medium',fontWeight:'500',fontFamily:'KBFGDisplay-Medium',fontSize:20,color: '#200d14'}}>드라이버</Text>
                </ImageBackground>
            </TouchableOpacity> 
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin_guest_terms')}
            style={{backgroundColor:'#ffffff',borderRadius:10, width:WIDTH*0.44, height:119,marginVertical:8}}>
                <ImageBackground  style={{width:WIDTH*0.44, height: 119}}
                    source={require('../assets/images/comu.png')}>
                <Text style={{ marginTop:13,marginLeft:17.3, fontFamily:'KBFGDisplay-Medium',fontWeight:'500',fontFamily:'KBFGDisplay-Medium',fontSize:20,color: '#200d14'}}>GUEST</Text>
                </ImageBackground>
            </TouchableOpacity> 

            {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('firebaseregists')}
            style={{backgroundColor:'#ffffff',borderRadius:10, width:WIDTH*0.44, height:119,marginVertical:8}}>
                <ImageBackground  style={{width:WIDTH*0.44, height: 119}}
                    source={require('../assets/images/comu.png')}>
                <Text style={{ marginTop:13,marginLeft:17.3, fontFamily:'KBFGDisplay-Medium',fontFamily:'KBFGDisplay-Medium',fontSize:20,color: '#200d14'}}>Firebase</Text>
                </ImageBackground>
            </TouchableOpacity>  */}
            
            </View>   
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
  });
  export default SignintypeScreen