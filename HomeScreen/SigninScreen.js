import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native';
import { Input } from 'react-native-elements';
class SigninScreen extends React.Component {

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: 'rgb(250,180,0)' }}>
            <View style={{alignItems: 'center',width: 196, height: 126, marginVertical: 21}}>
                <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:36, color:'#ffffff'}}>회원가입</Text>
            </View>
            
              <Input labelStyle={{color:'#ffffff',fontFamily:'KBFGDisplay-Medium',fontSize:12}} label='이름' 
              inputContainerStyle={{borderBottomColor:'#ffffff'}}
              containerStyle={{marginBottom:12.5, width:242}}/>
              <Input labelStyle={{color:'#ffffff', fontFamily:'KBFGDisplay-Medium',fontSize:12}} label='이메일' 
              inputContainerStyle={{borderBottomColor:'#ffffff'}}
              containerStyle={{marginBottom:12.5, width:242}}/>
              <Input labelStyle={{color:'#ffffff',fontFamily:'KBFGDisplay-Medium',fontSize:12}} label='Password' 
              inputContainerStyle={{borderBottomColor:'#ffffff'}}
              containerStyle={{marginBottom:12.5, width:242}} secureTextEntry={true}/>
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}
            style={styles.buttonsignin}>
            
            <View style={{ flexDirection: 'row'}}>
            <Image  style={{width:18.3, height: 18.3,marginRight:10.9}}
          			source={require('../assets/images/edit.png')}/>
                <Text style={styles.buttonTextsignin}>회원가입</Text>
            </View>
            
            </TouchableOpacity>  
           {/* <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          /> */}
        </View>

          
        
      );
    }
  }
  const styles = StyleSheet.create({
    buttonsignin: {
        width:242.6,
        height: 50,
        borderWidth: 1,
        backgroundColor:'rgba(255, 255, 255, 0.25)',
        borderRadius: 5,
        marginVertical: 66,
        paddingVertical: 13,
        alignItems: 'center'
    },
    buttonTextsignin: {
        fontFamily:'KBFGDisplay-Medium',fontSize:18,
        fontWeight:'500',
        color:'#200d14',
        textAlign:'center'
    }
    
  });
  export default SigninScreen