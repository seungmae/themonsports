import React from 'react';
import { Dimensions, View, Text,Keyboard, TouchableOpacity,TouchableWithoutFeedback,Platform,ScrollView } from 'react-native';
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
const size = [
  {
    label: '90',
    value: '90',
  },
  {
    label: '95',
    value: '95',
  },
  {
    label: '100',
    value: '100',
  },
  {
    label: '105',
    value: '105',
  },
  {
    label: '110',
    value: '110',
  },
  {
    label: '기타',
    value: 'othersize',
  },
];
const drivers = [
  {
    label: '상',
    value: '상',
  },
  {
    label: '중',
    value: '중',
  },
  {
    label: '하',
    value: '하',
  }
];
class Signin_s_agent extends React.Component { //보안요원
  state = {
    email: this.props.navigation.getParam('email'),
    password: this.props.navigation.getParam('password'),
    // otherbelong: this.props.navigation.getParam('otherbelong'),
    belongs:this.props.navigation.getParam('belongs'),
    firstname: this.props.navigation.getParam('firstname'),
    lastname: this.props.navigation.getParam('lastname'),
    gender: this.props.navigation.getParam('gender'),
    job: this.props.navigation.getParam('job'),
    photo:this.props.navigation.getParam('photo'),
    photo2:this.props.navigation.getParam('photo2'),
    registration_num: null,
    registration_num_length: 0,
    registration_num_validate: true,
    phone: null,
    phone_length: 0,
    phone_validate: true,
    ephone: null,
    ephone_validate: true,
    driverskill: null,
    unifomsize: null,
    othersize: null,

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
    }else if(type=='registration_num'){
      var length = text.length.toString()
      
      this.setState({
        registration_num: text,
        registration_num_length: length
      })
      if(num.test(text)){
        this.setState({
          registration_num_validate:true,
        })
        
      }else{
        this.setState({
          registration_num_validate:false
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
      let registration_num_validate2 = false
      var arrnum = new Array()
      var tempsum = 0
      for(var i=0; i<this.state.registration_num_length; i++){
        arrnum[i] = this.state.registration_num.charAt(i)
      }
      for(var i=0; i<arrnum.length-1; i++){
        if(i<=7){
          tempsum += arrnum[i] * (2+i)
        }else {
          tempsum += arrnum[i] * (2+(i%8))
        }
      }
      
      if((11 - (tempsum % 11)) % 10 != (arrnum[arrnum.length-1] )){
        
      }else{
        registration_num_validate2 = true
      }
      return (
        <DismissKeyboard>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{flexDirection:'row',marginTop:0}}> 
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:36,fontWeight:'bold',color:'#1f0c13'}}>회원가입</Text>
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:17,fontWeight:'bold',color:'#200d14',marginTop:13,marginLeft:18,marginRight:WIDTH*0.226}}>3/4</Text>
        </View>
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:12,fontWeight:'500',color:'#200d14',marginTop:10,marginRight:WIDTH*0.32,color:'#ffb400'}}>*표시는 필수작성란 입니다.</Text>
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:12,fontWeight:'500',color:'#200d14',marginTop:3,color:'#ffb400'}}>주민등록번호는 여행자보험 가입을 위한 수집입니다.</Text>

        {
          this.state.registration_num_validate && registration_num_validate2 || this.state.registration_num_length == 0?
          //this.state.registration_num_validate || this.state.registration_num_length == 0?
          <Input placeholder='주민등록번호(숫자만입력)*' placeholderTextColor='#ffb400'
          keyboardType='number-pad' maxLength={13}
          inputContainerStyle={{borderBottomColor:'#8d8d8d'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}} 
          onChangeText={(text) => this.validate(text,'registration_num')} 
          value={this.state.registration_num}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,marginTop:45,backgroundColor:'#ffffff'}}/>
          :
          <Input placeholder='주민등록번호*' placeholderTextColor='#ffb400'
          keyboardType='number-pad' maxLength={13}
          inputContainerStyle={{borderBottomColor:'red'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          errorStyle={{ color: 'red' }} errorMessage='올바른 주민번호가 아닙니다.'
          onChangeText={(text) => this.validate(text,'registration_num')} 
          value={this.state.registration_num}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,marginTop:45,backgroundColor:'#ffffff'}}/>
        }
{/* 
        {
          this.state.email_validate ?
          <Input placeholder='이메일*' placeholderTextColor='#ffb400'
          inputContainerStyle={{borderBottomColor:'#8d8d8d'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(text) => this.validate(text,'email')} value={this.state.email}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,backgroundColor:'#ffffff'}}/>
          :
          <Input placeholder='이메일*' placeholderTextColor='#ffb400'
          inputContainerStyle={[{borderBottomColor:'red'},!this.state.email_validate ? {borderBottomColor:'red'}:null]}
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
          containerStyle={{marginBottom:HEIGHT*0.0333, width:WIDTH*0.646,backgroundColor:'#ffffff'}}/>
          :
          <Input placeholder='비상연락처(숫자만입력)' placeholderTextColor='#8d8d8d'
          keyboardType='number-pad' maxLength={11}
          inputContainerStyle={{borderBottomColor:'red'}}
          errorStyle={{ color: 'red' }} errorMessage='숫자만 입력가능합니다.'
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(text) => this.validate(text,'ephone')} value={this.state.ephone}
          containerStyle={{marginBottom:HEIGHT*0.0333, width:WIDTH*0.646,backgroundColor:'#ffffff'}}/>
        }
        
        {/* <Input placeholder='운전수준 상/중/하' placeholderTextColor='#8d8d8d'
          inputContainerStyle={{borderBottomColor:'#ffb400'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(driverskill) => this.setState({driverskill})} value={this.state.driverskill}
          containerStyle={{marginBottom:HEIGHT*0.0433, width:WIDTH*0.646,backgroundColor:'#ffffff'}}/> */}
          <View style={{width:WIDTH*0.6,borderBottomWidth:1,borderBottomColor:'#8d8d8d',marginBottom:HEIGHT*0.0333}}>
            <RNPickerSelect placeholder={{label: '운전수준',value: null,color: '#8d8d8d'}} items={drivers}
                onValueChange={value => {this.setState({driverskill: value, }) }}
                Icon={() => {
                  if(Platform.OS === 'ios')
                    return <Icon name="down" size={12} color="#898989" style={{marginTop:2,marginRight:10}}/>
                    else{
                      return <Icon name="down" size={12} color="#898989" style={{marginTop:15,marginRight:10}}/>;
                    }
                }}
                // style={{placeholder: {fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}}
                value={this.state.driverskill}/>
          </View>
          {
            this.state.platform ?
            <View style={{width:WIDTH*0.60,borderBottomWidth:1,borderBottomColor:'#8d8d8d',marginBottom:HEIGHT*0.0233}}>
            <RNPickerSelect placeholder={{label: '유니폼 사이즈 선택*',value: null,color: '#ffb400'}} items={size}
                onValueChange={value => {this.setState({unifomsize: value, }) }}
                Icon={() => {
                  if(Platform.OS === 'ios')
                    return <Icon name="down" size={12} color="#898989" style={{marginTop:2,marginRight:10}}/>
                    else{
                      return <Icon name="down" size={12} color="#898989" style={{marginTop:15,marginRight:10}}/>;
                    }
                }}
                // style={{placeholder: {fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}}
                value={this.state.unifomsize}/>
          </View>
          :
          <View style={{width:WIDTH*0.60,borderBottomWidth:1,borderBottomColor:'#8d8d8d',marginBottom:HEIGHT*0.0233}}>
            <RNPickerSelect placeholder={{label: '유니폼 사이즈 선택*',value: null,color: '#ffb400'}} items={size}
            placeholderTextColor={{color:'#ffb400'}}
                onValueChange={value => {this.setState({unifomsize: value, }) }}
                Icon={() => {
                  if(Platform.OS === 'ios')
                    return <Icon name="down" size={12} color="#898989" style={{marginTop:2,marginRight:10}}/>
                    else{
                      return <Icon name="down" size={12} color="#898989" style={{marginTop:15,marginRight:10}}/>;
                    }
                }}
                // style={{placeholder: {fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}}
                value={this.state.unifomsize}/>
          </View>

          }
          
          {
          this.state.unifomsize == 'othersize' ? 
          <Input placeholder='기타사이즈 작성' placeholderTextColor='#8d8d8d'
          inputContainerStyle={{borderBottomColor:'#ffb400'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(othersize) => this.setState({othersize})} value={this.state.othersize}
          containerStyle={{marginBottom:HEIGHT*0.0433, width:WIDTH*0.646,backgroundColor:'#ffffff'}}/> : <View></View>
          }
        <View style={{flexDirection:'row',marginTop:30}}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}
        style={{width:WIDTH*0.249,height:39.6,borderRadius:28,borderWidth:1,borderColor:'#200d14',backgroundColor:'rgba(255, 255, 255, 0.25)',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:18,fontWeight:'500',color:'#200d14'}}>이전</Text>
        </TouchableOpacity>
        {
        this.state.registration_num_validate 
        && this.state.phone_length == 11 && this.state.unifomsize
        && this.state.phone && registration_num_validate2 && this.state.phone_validate && this.state.ephone_validate?
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin_s_agent4',{
            email: this.state.email,
            password: this.state.password,
            //otherbelong: this.state.otherbelong,
            belongs:this.state.belongs,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            gender: this.state.gender,
            job: this.state.job,
            photo:this.state.photo,
            photo2:this.state.photo2,
            registration_num: this.state.registration_num,
            phone: this.state.phone,
            ephone: this.state.ephone,
            driverskill: this.state.driverskill,
            unifomsize: this.state.unifomsize,
            othersize: this.state.othersize
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