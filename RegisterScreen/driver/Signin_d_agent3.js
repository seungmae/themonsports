import React from 'react';
import { Dimensions, View, Text,Keyboard, TouchableOpacity,TouchableWithoutFeedback,Platform, } from 'react-native';
import { Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/AntDesign'

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  {children}
  </TouchableWithoutFeedback>
)
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const genders = [
  {
    label: '남자',
    value: '남자',
  },
  {
    label: '여자',
    value: '여자',
  }
];
class Signin_d_agent extends React.Component { //드라이버
  state = {
    email: this.props.navigation.getParam('email'),
    password: this.props.navigation.getParam('password'),
    otherbelong: this.props.navigation.getParam('otherbelong'),
    belongs:this.props.navigation.getParam('belongs'),
    firstname_kr: this.props.navigation.getParam('firstname_kr'),
    lastname_kr: this.props.navigation.getParam('lastname_kr'),
    firstname_eu: this.props.navigation.getParam('firstname_eu'),
    lastname_eu: this.props.navigation.getParam('lastname_eu'),
    photo:this.props.navigation.getParam('photo'),
    photo2:this.props.navigation.getParam('photo2'),

    birthday: null,
    birthday_validate: true,
    birthday_length: 0,
    phone: null,
    phone_length: 0,
    phone_validate: true,
    ephone: null,
    ephone_validate: true,
    gender: null,
    job: null,
    platform:null,
  }
  componentDidMount() {
    if(Platform.OS === 'ios'){
      this.setState({
        platform: true
      })
    }   
    else{
      this.setState({
        platform: false
      })
    }
  }
  validate(text,type){
    num=/^[0-9]+$/ //숫자만
    emailv =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i //이메일
    if(type=='phone'){
      var length = text.length.toString()
      this.setState({
        phone: text,
        phone_length: length
      })
      if(num.test(text)){
        this.setState({
          phone_validate:true,
        })
        
      }else{
        this.setState({
          phone_validate:false
        })
      }
    }else if(type=='email'){
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
    }else if(type=='birthday'){
      var length = text.length.toString()
      this.setState({
        birthday: text,
        birthday_length: length
      })
      if(num.test(text)){
        this.setState({
          birthday_validate:true,
        })
        
      }else{
        this.setState({
          birthday_validate:false
        })
      }
    }else if(type=='ephone'){
      var length = text.length.toString()
      
      this.setState({
        ephone: text
      })
      if(num.test(text)){
        this.setState({
          ephone_validate:true,
        })
        
      }else{
        this.setState({
          ephone_validate:false
        })
      }
    }
  }

    render() {
      console.log(this.state.photo)
      console.log(this.state.photo2)
      return (
        <DismissKeyboard>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{flexDirection:'row',marginTop:0}}> 
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:36,fontWeight:'bold',color:'#1f0c13'}}>회원가입</Text>
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:17,fontWeight:'bold',color:'#200d14',marginTop:13,marginLeft:18,marginRight:WIDTH*0.226}}>3/4</Text>
        </View>
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:12,fontWeight:'500',color:'#200d14',marginTop:10,marginRight:WIDTH*0.32,color:'#ffb400'}}>*표시는 필수작성란 입니다.</Text>

        {
          this.state.platform ?
        <View style={{flexDirection:'row'}}>
        <View style={{width:WIDTH*0.1624,borderBottomWidth:1,borderBottomColor:'#8d8d8d',marginBottom:HEIGHT*0.0333,marginTop:45,marginLeft:10}}>
            <RNPickerSelect placeholder={{label: '성별*',value: null,color: '#8d8d8d'}} items={genders}
                onValueChange={value => {this.setState({gender: value, }) }}
                
                Icon={() => {
                  return <Icon name="down" size={12} color="#898989" style={{marginTop:2,marginRight:10}}/>
                }}
                // style={{placeholder: {fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}}
                value={this.state.gender}/>
          </View>

        <Input placeholder='직업' placeholderTextColor='#8d8d8d'
          inputContainerStyle={{borderBottomColor:'#8d8d8d'}} 
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(job) => this.setState({job})} value={this.state.job}
          containerStyle={{ marginLeft:WIDTH*0.0882,width:WIDTH*0.359,backgroundColor:'#ffffff',marginTop:24}}/>
        </View>
        :
        <View style={{flexDirection:'row',marginBottom:HEIGHT*0.0333,marginTop:45,marginLeft:12}}>
        <View style={{width:WIDTH*0.254,borderBottomWidth:1,borderBottomColor:'#8d8d8d'}}>
            <RNPickerSelect placeholder={{label: '성별*',value: null,color: '#ffb400'}} items={genders}
            placeholderTextColor={{color:'#ffb400'}}
                onValueChange={value => {this.setState({gender: value, }) }}
                Icon={() => {
                  return <Icon name="down" size={12} color="#898989" style={{marginTop:20,marginRight:10}}/>;
                }}
                // style={{placeholder: {fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}}
                value={this.state.gender}/>
          </View>

        <Input placeholder='직업' placeholderTextColor='#8d8d8d'
          inputContainerStyle={{borderBottomColor:'#8d8d8d'}} 
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(job) => this.setState({job})} value={this.state.job}
          containerStyle={{ marginLeft:WIDTH*0.0582,width:WIDTH*0.304,backgroundColor:'#ffffff'}}/>
        </View>
        }

        {
          this.state.birthday_validate ?
          <Input placeholder='생년월일(숫자만입력)*' placeholderTextColor='#ffb400'
          keyboardType='number-pad' maxLength={6}
          inputContainerStyle={{borderBottomColor:'#8d8d8d'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(text) => this.validate(text,'birthday')} value={this.state.birthday}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,marginTop:0,backgroundColor:'#ffffff'}}/>
          :
          <Input placeholder='생년월일(숫자만입력)*' placeholderTextColor='#ffb400'
          keyboardType='number-pad' maxLength={6}
          inputContainerStyle={{borderBottomColor:'red'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          errorStyle={{ color: 'red' }} errorMessage='숫자만 입력가능합니다.'
          onChangeText={(text) => this.validate(text,'birthday')} value={this.state.birthday}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,marginTop:0,backgroundColor:'#ffffff'}}/>
        }
        
        {/* {
          this.state.email_validate ?
          <Input placeholder='이메일*' placeholderTextColor='#ffb400'
          inputContainerStyle={{borderBottomColor:'#8d8d8d'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(text) => this.validate(text,'email')} value={this.state.email}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,backgroundColor:'#ffffff'}}/>
          :
          <Input placeholder='이메일*' placeholderTextColor='#ffb400'
          inputContainerStyle={{borderBottomColor:'red'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          errorStyle={{ color: 'red' }} errorMessage='글자(a-z),숫자(0-9) 및 마침표(.)만 입력할 수 있습니다.'
          onChangeText={(text) => this.validate(text,'email')}  value={this.state.email}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,backgroundColor:'#ffffff'}}/>
        } */}
        {
          this.state.phone_validate ?
          <Input placeholder='휴대전화(숫자만입력)*' placeholderTextColor='#ffb400'
          keyboardType='number-pad' maxLength={11}
          inputContainerStyle={{borderBottomColor:'#8d8d8d'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(text) => this.validate(text,'phone')} value={this.state.phone}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,backgroundColor:'#ffffff'}}/>
          :
          <Input placeholder='휴대전화(숫자만입력)*' placeholderTextColor='#ffb400'
          keyboardType='number-pad' maxLength={11}
          inputContainerStyle={{borderBottomColor:'red'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          errorStyle={{ color: 'red' }} errorMessage='숫자만 입력가능합니다.'
          onChangeText={(text) => this.validate(text,'phone')} value={this.state.phone}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,backgroundColor:'#ffffff'}}/>
        }
        {
          this.state.ephone_validate ?
          <Input placeholder='비상연락처(숫자만입력)' placeholderTextColor='#8d8d8d'
          keyboardType='number-pad' maxLength={11}
          inputContainerStyle={{borderBottomColor:'#8d8d8d'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(text) => this.validate(text,'ephone')}value={this.state.ephone}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,backgroundColor:'#ffffff'}}/>
          :
          <Input placeholder='비상연락처(숫자만입력)' placeholderTextColor='#8d8d8d'
          keyboardType='number-pad' maxLength={11}
          inputContainerStyle={{borderBottomColor:'red'}}
          errorStyle={{ color: 'red' }} errorMessage='숫자만 입력가능합니다.'
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(text) => this.validate(text,'ephone')} value={this.state.ephone}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,backgroundColor:'#ffffff'}}/>
        }
        <View style={{flexDirection:'row',marginTop:30}}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}
        style={{width:WIDTH*0.249,height:39.6,borderRadius:28,borderWidth:1,borderColor:'#200d14',backgroundColor:'rgba(255, 255, 255, 0.25)',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:18,fontWeight:'500',color:'#200d14'}}>이전</Text>
        </TouchableOpacity>
        {
          this.state.gender && this.state.birthday && this.state.phone
          && this.state.birthday_length == 6 && this.state.phone_length == 11
           && this.state.phone_validate && this.state.phone_validate && this.state.ephone_validate && this.state.birthday_validate?
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin_d_agent4',{
            email: this.state.email,
            password: this.state.password,
            otherbelong: this.state.otherbelong,
            belongs:this.state.belongs,
            firstname_kr: this.state.firstname_kr,
            lastname_kr: this.state.lastname_kr,
            firstname_eu: this.state.firstname_eu,
            lastname_eu: this.state.lastname_eu,
            photo:this.state.photo,
            photo2:this.state.photo2,
            
            birthday: this.state.birthday,
            phone: this.state.phone,
            ephone: this.state.ephone,
            gender: this.state.gender,
            job: this.state.job,
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

  export default Signin_d_agent