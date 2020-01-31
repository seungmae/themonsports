import React from 'react';
import { Dimensions, View, Text,Alert, TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { Input,CheckBox,Divider } from 'react-native-elements';
import firebase from "react-native-firebase";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  {children}
  </TouchableWithoutFeedback>
)
class Signin_s_agent extends React.Component { //보안요원
  state = {
    email: null,
    email_validate:true,
    email_distinct: null,
    password: null,
    passwordvalidate:true,
    password_length: 0,
  }

  //  updateUser = (user) => {
  //     this.setState({ user: user })
  //  }
    constructor(props) {
      super(props);
    }
    validate(text,type){
      idv = /^[a-zA-Z0-9]{4,12}$/ //아이디  패스워드
      emailv =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i //이메일
      if(type=='email'){
        this.setState({
          email: text
        })
        if(emailv.test(text)){
          this.setState({
            email_validate:true,
          })
          
        }else{
          this.setState({
            email_validate:false
          })
        }
      }else if(type=='password'){
        var length = text.length.toString()
        this.setState({
            password:text,
            password_length: length
          })
        if(idv.test(text)){
          this.setState({
            passwordvalidate:true,
          })
          
        }else{
          this.setState({
            passwordvalidate:false
          })
        }
      } 
    }
    id_checker(){
      
      const { email } = this.state
      firebase.auth().fetchSignInMethodsForEmail(email)
      .then(response => {
        if(response == 'password'){
          Alert.alert('중복된 아이디입니다.')
          this.setState({email_distinct: false})
        }else{
          Alert.alert('사용 가능한 아이디입니다.')
          this.setState({email_distinct: true})
        }
      })
      .catch(error => console.log(error))
      
    }
    render() {
      return (
        <DismissKeyboard>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{flexDirection:'row',marginTop:HEIGHT*0.123}}> 
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:36,fontWeight:'bold',color:'#1f0c13'}}>회원가입</Text>
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:17,fontWeight:'bold',color:'#200d14',marginTop:13,marginLeft:18,marginRight:WIDTH*0.226}}>1/4</Text>
        </View>
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontFamily:'KBFGDisplay-Medium',fontSize:12,fontWeight:'500',color:'#200d14',marginTop:10,marginRight:WIDTH*0.32,color:'#ffb400'}}>*표시는 필수작성란 입니다.</Text>

        {
          this.state.email_validate ?
          <View>
            <TouchableOpacity onPress={() => this.id_checker()}
            style={{position: 'absolute', top:110, right: 0 ,zIndex:1,
            borderRadius:11,borderWidth:1,borderColor:'#707070',width:65,height:22,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:14,fontWeight:'300',color:'#3f414f',fontFamily:'KBFGDisplay-Medium'}}>중복확인</Text>
            </TouchableOpacity>
          <Input placeholder='이메일*' placeholderTextColor='#ffb400'
          inputContainerStyle={{borderBottomColor:'#8d8d8d',width:WIDTH*0.44}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(text) => this.validate(text,'email')} value={this.state.email}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,backgroundColor:'#ffffff',marginTop:100}}/>
          </View>
          :
          <View>
            <TouchableOpacity onPress={() => this.id_checker()}
            style={{position: 'absolute', top:110, right: 0 ,zIndex:1,
            borderRadius:11,borderWidth:1,borderColor:'#707070',width:65,height:22,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:14,fontWeight:'300',color:'#3f414f',fontFamily:'KBFGDisplay-Medium'}}>중복확인</Text>
            </TouchableOpacity>
          <Input placeholder='이메일*' placeholderTextColor='#ffb400'
          inputContainerStyle={{borderBottomColor:'red',width:WIDTH*0.44}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          errorStyle={{ color: 'red' }} errorMessage='글자(a-z),숫자(0-9) 및 마침표(.)만 입력할 수 있습니다.'
          onChangeText={(text) => this.validate(text,'email')}  value={this.state.email}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,backgroundColor:'#ffffff',marginTop:100}}/>
          </View>
        }

        {
          this.state.password_length > 5  || this.state.password_length == 0?
          <Input placeholder='비밀번호*' placeholderTextColor='#ffb400'
          inputContainerStyle={{borderBottomColor:'#8d8d8d'}} secureTextEntry={true}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(text) => this.validate(text,'password')}  value={this.state.password}
          containerStyle={{marginBottom:HEIGHT*0.0443, width:WIDTH*0.646,marginTop:0,backgroundColor:'#ffffff'}}/>
          :
          <Input placeholder='비밀번호*' placeholderTextColor='#ffb400'
          inputContainerStyle={{borderBottomColor:'red'}} secureTextEntry={true}
          errorStyle={{ color: 'red' }} errorMessage='비밀번호 너무짧습니다.'
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(text) => this.validate(text,'password')}  value={this.state.password}
          containerStyle={{marginBottom:HEIGHT*0.0443, width:WIDTH*0.646,marginTop:0,backgroundColor:'#ffffff'}}/>
        }

        {
          this.state.password === this.state.password2 || this.state.password2 == null ? 
          <Input placeholder='비밀번호 재확인*' placeholderTextColor='#ffb400'
          inputContainerStyle={{borderBottomColor:'#8d8d8d'}} secureTextEntry={true}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(password2) => this.setState({password2})} value={this.state.password2}
          containerStyle={{marginBottom:100, width:WIDTH*0.646,marginTop:0,backgroundColor:'#ffffff'}}/>
          :
          <Input placeholder='비밀번호 재확인*' placeholderTextColor='#ffb400'
          inputContainerStyle={{borderBottomColor:'red'}} secureTextEntry={true}
          errorStyle={{ color: 'red' }}
          errorMessage='비밀번호가 다릅니다.'
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(password2) => this.setState({password2})} value={this.state.password2}
          containerStyle={{marginBottom:100,width:WIDTH*0.646,marginTop:0,backgroundColor:'#ffffff'}}/>
        }

        <View style={{flexDirection:'row',marginBottom:HEIGHT*0.144}}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}
        style={{width:WIDTH*0.249,height:39.6,borderRadius:28,borderWidth:1,borderColor:'#200d14',backgroundColor:'rgba(255, 255, 255, 0.25)',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:18,fontWeight:'500',color:'#200d14'}}>이전</Text>
        </TouchableOpacity>
        {
          this.state.email != null && this.state.password != null && this.state.email_distinct && this.state.password === this.state.password2 
          && this.state.email_distinct?
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin_s_agent2',{
            email: this.state.email,
            password: this.state.password
          })} 
        style={{marginLeft:30,width:WIDTH*0.249,height:39.6,borderRadius:28,backgroundColor:'#ffb400',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:18,fontWeight:'500',color:'#ffffff'}}>다음</Text>
        </TouchableOpacity>
        :
        <View style={{marginLeft:30,width:WIDTH*0.249,height:39.6,borderWidth:1,borderColor:'#200d14',borderRadius:28,backgroundColor:'#rgba(255, 255, 255, 0.25)',justifyContent:'center',alignItems:'center'}}> 
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:18,fontWeight:'500',color:'#200d14'}}>다음</Text>
        </View>
        }
        </View>
        </View>
        </DismissKeyboard>
      );
    }
  }

  export default Signin_s_agent
