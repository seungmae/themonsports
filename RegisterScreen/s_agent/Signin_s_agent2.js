import React from 'react';
import { Dimensions, View, Text,ImageBackground,TouchableOpacity,Image,TouchableWithoutFeedback,Keyboard,Platform } from 'react-native';
import { Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/AntDesign'
import ImagePicker_ from 'react-native-image-crop-picker'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  {children}
  </TouchableWithoutFeedback>
)

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
class Signin_s_agent extends React.Component { //보안요원
  state = {
    email: this.props.navigation.getParam('email'),
    password: this.props.navigation.getParam('password'),

    belongs:null,
    firstname: null,
    lastname: null,
    gender: null,
    job: null,

    photo:null,
    photo2:null,
  }
    constructor(props) {
      super(props);
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
  handleChoosePhoto = () => {
    ImagePicker_.openPicker({
      cropping: true,
      width: 300,
      height: 400,
      freeStyleCropEnabled: true,
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      avoidEmptySpaceAroundImage: true,
      includeBase64: true
    }).then(image => {
      this.setState({
        photo:image
      })
    });
  };
  handleChoosePhoto2 = () => {
    ImagePicker_.openPicker({
      cropping: true,
      width: 300,
      height: 400,
      freeStyleCropEnabled: true,
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      avoidEmptySpaceAroundImage: true,
      includeBase64: true
    }).then(image => {
      this.setState({
        photo2:image
      }),
      console.log(image)
    });
  };
    render() {
      const { photo } = this.state;
      const { photo2 } = this.state;
      return (
        <DismissKeyboard>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{flexDirection:'row',marginTop:HEIGHT*0.123}}> 
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:36,fontWeight:'bold',color:'#1f0c13'}}>회원가입</Text>
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:17,fontWeight:'bold',color:'#200d14',marginTop:13,marginLeft:18,marginRight:WIDTH*0.226}}>2/4</Text>
        </View>
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:12,fontWeight:'500',color:'#200d14',marginTop:10,marginRight:WIDTH*0.32,color:'#ffb400'}}>*표시는 필수작성란 입니다.</Text>
        <View style={{flexDirection:'row'}}>
        <View>
        {photo && (
          <Image source={{ uri: photo.path }}
          style={{marginTop:HEIGHT*0.082,width:115,height:115,backgroundColor:'#eaeaea',borderRadius:60}}/>
          
        ) || (<ImageBackground 
          style={{justifyContent:'center',alignItems:'center',marginTop:HEIGHT*0.082,width:115,height:115,backgroundColor:'#eaeaea',borderRadius:60}}>
          <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:10,color:'#200d14'}}>확인용</Text>
          <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:10,color:'#200d14'}}>증명사진*</Text>
          <Text style={{fontFamily:'KBFGDisplay-Medium',fontFamily:'KBFGDisplay-Medium',fontSize:10,color:'#200d14'}}>(3*4)</Text>
          </ImageBackground>)}

        <TouchableOpacity onPress={this.handleChoosePhoto}
        style={{width:37,height:37,backgroundColor:'#ffb400',alignItems:'center',justifyContent:'center',borderRadius:30,position: 'absolute', bottom: -0.5, right: -3 }}>
        <Icon name='plus' size={18} color='#ffffff'/>
        </TouchableOpacity>
        </View>
        <View style={{marginLeft:20}}>
        {photo2 && (
          <Image source={{ uri: photo2.path }}
          style={{marginTop:HEIGHT*0.082,width:115,height:115,backgroundColor:'#eaeaea',borderRadius:60}}/>
          
        ) || (<ImageBackground 
          style={{justifyContent:'center',alignItems:'center',marginTop:HEIGHT*0.082,width:115,height:115,backgroundColor:'#eaeaea',borderRadius:60}}>
          <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:10,color:'#200d14'}}>배치 신고용</Text>
          <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:10,color:'#200d14'}}>신분증*</Text>
          <Text style={{fontFamily:'KBFGDisplay-Medium',fontFamily:'KBFGDisplay-Medium',fontSize:10,color:'#200d14'}}>(8.6*5.4)</Text>
        </ImageBackground>)}

        <TouchableOpacity onPress={this.handleChoosePhoto2}
        style={{width:37,height:37,backgroundColor:'#ffb400',alignItems:'center',justifyContent:'center',borderRadius:30,position: 'absolute', bottom: -0.5, right: -3 }}>
        <Icon name='plus' size={18} color='#ffffff'/>
        </TouchableOpacity>
        </View>
        </View>
        <Input placeholder='소속명*' placeholderTextColor='#ffb400'
          inputContainerStyle={{borderBottomColor:'#8d8d8d'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(belongs) => this.setState({belongs})} value={this.state.belongs}
          containerStyle={{marginBottom:HEIGHT*0.0443, width:WIDTH*0.646,marginTop:HEIGHT*0.0443,backgroundColor:'#ffffff'}}/>
        {/* <View style={{marginTop:10,width:WIDTH*0.60,borderBottomWidth:1,borderBottomColor:'#ffb400',marginTop:HEIGHT*0.0443,marginBottom:HEIGHT*0.0233}}>
            <RNPickerSelect placeholder={{label: '소속*',value: null,color: '#8d8d8d'}} items={belong}
                onValueChange={value => {this.setState({belongs: value, })}}
                Icon={() => {
                  if(Platform.OS === 'ios')
                    return <Icon name="down" size={12} color="#898989" style={{marginTop:2,marginRight:10}}/>
                    else{
                      return <Icon name="down" size={12} color="#898989" style={{marginTop:15,marginRight:10}}/>;
                    }
                }}
                // style={{placeholder: {fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}}
                value={this.state.belongs}/>
        </View>
        
        { 
          this.state.belongs == 'be4' ? 
          <Input placeholder='기타소속 작성' placeholderTextColor='#8d8d8d'
          inputContainerStyle={{borderBottomColor:'#ffb400'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(otherbelong) => this.setState({otherbelong})} value={this.state.otherbelong}
          containerStyle={{marginBottom:HEIGHT*0.0433, width:WIDTH*0.646,backgroundColor:'#ffffff'}}/> : <View></View>
        } */}
        <View style={{flexDirection:'row'}}>
        <Input placeholder='성*' placeholderTextColor='#ffb400'
          inputContainerStyle={{borderBottomColor:'#8d8d8d'}} 
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(firstname) => this.setState({firstname})} value={this.state.firstname}
          containerStyle={{ width:WIDTH*0.2224,marginTop:0,backgroundColor:'#ffffff'}}/>
        <Input placeholder='이름*' placeholderTextColor='#ffb400'
          inputContainerStyle={{borderBottomColor:'#8d8d8d'}} 
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(lastname) => this.setState({lastname})} value={this.state.lastname}
          containerStyle={{ marginLeft:WIDTH*0.0682,width:WIDTH*0.354,marginTop:0,backgroundColor:'#ffffff'}}/>
        </View>

        {
          this.state.platform ?
        <View style={{flexDirection:'row'}}>
        <View style={{width:WIDTH*0.1924,borderBottomWidth:1,borderBottomColor:'#8d8d8d',marginBottom:50,marginTop:45,marginLeft:10}}>
            <RNPickerSelect placeholder={{label: '성별*',value: null,color: '#ffb400'}} items={genders}
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
          containerStyle={{ marginLeft:WIDTH*0.0682,width:WIDTH*0.354,backgroundColor:'#ffffff',marginTop:24}}/>
        </View>
        :
        <View style={{flexDirection:'row',marginBottom:50,marginTop:45,marginLeft:12}}>
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

        <View style={{flexDirection:'row',marginBottom:HEIGHT*0.144}}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}
        style={{width:WIDTH*0.249,height:39.6,borderRadius:28,borderWidth:1,borderColor:'#200d14',backgroundColor:'rgba(255, 255, 255, 0.25)',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:18,fontWeight:'500',color:'#200d14'}}>이전</Text>
        </TouchableOpacity>
        {
          this.state.belongs && this.state.firstname  && this.state.lastname  && this.state.gender && this.state.photo && this.state.photo2?
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin_s_agent3',{
            email: this.state.email,
            password: this.state.password,
            otherbelong: this.state.otherbelong,
            belongs:this.state.belongs,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            gender: this.state.gender,
            job: this.state.job,
            photo:this.state.photo,
            photo2:this.state.photo2,
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