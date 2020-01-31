import React from 'react';
import { Dimensions, View, Text, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform, WebView } from 'react-native';
import { Input, Divider, CheckBox } from 'react-native-elements';
import Modal from 'react-native-modal'
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/AntDesign'
import firebase from 'react-native-firebase'
import * as Progress from 'react-native-progress';
import moment from 'moment'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)
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
const languages = [
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
class Signin_d_agent extends React.Component { //드라이버
  state = {
    email: this.props.navigation.getParam('email'),
    password: this.props.navigation.getParam('password'),
    otherbelong: this.props.navigation.getParam('otherbelong'),
    belongs: this.props.navigation.getParam('belongs'),
    firstname_kr: this.props.navigation.getParam('firstname_kr'),
    lastname_kr: this.props.navigation.getParam('lastname_kr'),
    firstname_eu: this.props.navigation.getParam('firstname_eu'),
    lastname_eu: this.props.navigation.getParam('lastname_eu'),
    photo: this.props.navigation.getParam('photo'),
    photo2: this.props.navigation.getParam('photo2'),

    birthday: this.props.navigation.getParam('birthday'),
    phone: this.props.navigation.getParam('phone'),
    ephone: this.props.navigation.getParam('ephone'),
    gender: this.props.navigation.getParam('gender'),
    job: this.props.navigation.getParam('job'),

    text3: null,
    driverskill: null,
    language: null,

    signcheck: false,
    platform: null,
    loading: false,
    modalvisible: null,
    modalvisible2: null
  }
  componentDidMount() {
    if (Platform.OS === 'ios') {
      this.setState({
        platform: 'ios'
      })
    } else {
      this.setState({
        platform: 'android'
      })
    }
  }
  submit() {
    this.setState({ loading: true })

    var url = 'https://api.themonsports.com/v1/account/insert'
    fetch(url, {
      method: 'POST',
      data: {
      },

      body: JSON.stringify({
        "flag": 'insert',
        "loginid": this.state.email,
        "passwd": this.state.password,
        "name_kr1": this.state.firstname_kr,
        "name_kr2": this.state.lastname_kr,
        "name_en1": this.state.firstname_eu,
        "name_en2": this.state.lastname_eu,
        "personalno": "",
        "workDatail": "",
        "positions": this.state.belongs,
        "birth": this.state.birthday,
        "mobile": this.state.phone,
        "emergency": this.state.ephone,
        "sex": this.state.gender,
        "team_id": "9",
        "email": '',
        "job": this.state.job,
        "driveLevel": this.state.driverskill,
        "langLevel": this.state.language,
        "photoFile": `data:image/jpeg;base64,${this.state.photo.data}`,
        "extFile": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD...k=",
        "extfile2": `data:image/jpeg;base64,${this.state.photo2.data}`,
        "device": this.state.platform,
        "token": "",
        "info1": "",
        "info2": this.state.text3,
        "info3": "",
        "uniform": ""
      }),
      headers: new Headers({

      })
    }).then(res => res.json())
      .catch(error => console.log('Error:', error))
      .then(response => {
        console.log('Success', response)
        this.setState({
          signcheck: true
        })
      })
    //-------------------------
    // var url = 'http://ec2-13-209-26-68.ap-northeast-2.compute.amazonaws.com/join'


    // const body = new FormData()
    // body.append('id', this.state.email)
    // body.append('pwd', this.state.password)
    // body.append('m_group', 9)
    // body.append('last_name_kr', this.state.firstname_kr)
    // body.append('first_name_kr', this.state.lastname_kr)
    // body.append('first_name_eng', this.state.lastname_eu)
    // body.append('last_name_eng', this.state.firstname_eu)
    // body.append('belong', this.state.belongs)
    // body.append('birth', this.state.birthday)
    // body.append('gender', this.state.gender)
    // body.append('phone', this.state.phone)
    // body.append('emergency_phone', this.state.ephone)
    // body.append('occupation', this.state.job)
    // body.append('drive_level', this.state.driverskill)
    // body.append('lang_level',this.state.language)
    // body.append('health_status', this.state.text3)
    // console.log(body)
    // var url2 = 'http://ec2-13-209-26-68.ap-northeast-2.compute.amazonaws.com/join/file_upload'
    // if (Platform.OS === 'ios') {
    //   var uri = this.state.photo.sourceURL
    // } else {
    //   var uri = this.state.photo.path
    // }
    // var name = this.state.photo.filename
    // var type = this.state.photo.mime

    // const file = {
    //   uri,
    //   name,
    //   type
    // }
    // const body2 = new FormData()
    // body2.append('id_photo', file)

    // if (Platform.OS === 'ios') {
    //   var uri = this.state.photo2.sourceURL
    // } else {
    //   var uri = this.state.photo2.path
    // }
    // var name = this.state.photo2.filename
    // var type = this.state.photo2.mime

    // const file2 = {
    //   uri,
    //   name,
    //   type
    // }
    // console.log(file)
    // console.log(file2)

    // body2.append('driver_license', file2)
    // body2.append('id_card', '')
    // body2.append('equipment_edu', '')
    // fetch(url, {
    //   method: 'POST',
    //   body: body
    // })
    //   .then(res => res.json())
    //   .then(response => {
    //     console.log(response)
    //     key = response
    //     this.setState({
    //       signcheck:true
    //     })
    //     body2.append('master_idx',key)
    //     fetch(url2, {
    //       method: 'POST',
    //       body: body2
    //     }).then(res => res.json())
    //       .catch(error => {
    //         console.log('Error:', error)
    //         Alert.alert('회원가입 실패')
    //       })
    //       .then(response => console.log('Success', response))
    //   })
    //   .catch(error =>{
    //     console.log('Error:', error)
    //     Alert.alert('회원가입 실패')
    //   })

    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
      console.log(response)
      user_uid = response.user._user.uid;
      const { email, belongs, firstname_kr, firstname_eu, lastname_eu, lastname_kr, birthday, job, gender, phone, ephone, driverskill, language, text3 } = this.state;
      const data = {
        email: email,
        type: '드라이버',
        profilePictureURL: 'https://firebasestorage.googleapis.com/v0/b/themonsports-c38b9.appspot.com/o/KakaoTalk_Photo_2019-05-08-13-34-25.png?alt=media&token=162b1f92-e271-409d-a329-d1cae40959b3',
        belong: belongs,
        firstName: firstname_kr,
        lastName: lastname_kr,
        fullName: firstname_kr + lastname_kr,
        firstName_eu: firstname_eu,
        lastName_eu: lastname_eu,
        gender: gender,
        job: job,
        phone: phone,
        e_phone: ephone,
        drive_level: driverskill,
        birth: birthday,
        langLevel: language,
        건강상태: text3,
        created:moment().format('YYYY-MM-DD')
      };

      const that = this
      firebase.firestore().collection('users').doc(email).set(data);
      firebase.firestore().collection('users').doc(email).get().then(function (user) {
        //navigation.dispatch({ type: 'Main', user: { ...user.data(), id: user.id } });
        that.setState({ signcheck: true, loading: false })
      }).catch(function (error) {
        console.log(error)
        const { code, message } = error;
        Alert.alert('회원가입 실패');
      });
      if (Platform.OS === 'ios') {
        var uri = this.state.photo.sourceURL
        var uri2 = this.state.photo2.sourceURL
      } else {
        var uri = this.state.photo.path
        var uri2 = this.state.photo2.path
      }
      firebase.storage().ref(`images/${this.state.email}/증명사진`).putFile(uri).on(
        firebase.storage.TaskEvent.STAFE_CHANGED,
        snapshot => {
          firebase.firestore().collection('users').doc(email).update({
            profilePictureURL: snapshot.downloadURL
          })
          console.log(snapshot.downloadURL)
          var url = 'https://api.themonsports.com/v1/account/insert'
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              "flag": 'update',
              "loginid": this.state.email,
              "passwd": this.state.password,
              "img_field_name": "photoFile",
              "img_field_content": snapshot.downloadURL
            }),
          }).then(res => res.json())
            .catch(error => console.log('Error:', error))
            .then(response => console.log('Success', response))
        },
      )
      firebase.storage().ref(`images/${this.state.email}/운전면허증`).putFile(uri2).on(
        firebase.storage.TaskEvent.STAFE_CHANGED,
        snapshot => {
          firebase.firestore().collection('users').doc(email).update({
            profilePictureURL: snapshot.downloadURL
          })
          console.log(snapshot.downloadURL)
          var url = 'https://api.themonsports.com/v1/account/insert'
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              "flag": 'update',
              "loginid": this.state.email,
              "passwd": this.state.password,
              "img_field_name": "extfile2",
              "img_field_content": snapshot.downloadURL
            }),
          }).then(res => res.json())
            .catch(error => console.log('Error:', error))
            .then(response => console.log('Success', response))
        },
      )

    }).catch((error) => {
      console.log(error)
      const { code, message } = error;
      Alert.alert('회원가입 실패');
    });
  }

  render() {
    if (this.state.modalvisible) {
      setTimeout(() => {
        this.setState({
          modalvisible2: true
        })
      }, 10000);
    }
    return (
      <DismissKeyboard>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {
            this.state.loading ?
              <Progress.Circle size={50} indeterminate={true} color='rgb(250,180,0)' style={{ position: 'absolute' }} />
              : null
          }

          <Modal isVisible={this.state.modalvisible}>
            <WebView
              style={{ width: '100%' }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: 'https://www.youtube.com/embed/_LZktdKKUGY?autoplay=1' }}
            />
            {
              this.state.modalvisible2 ?
                <TouchableOpacity onPress={() => this.setState({ modalvisible: false })}
                  style={{ position: 'absolute', top: 30, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon color='white' size={24} name='close' />
                </TouchableOpacity>
                : null
            }

          </Modal>

          <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.123 }}>
            <Text style={{ fontFamily: 'KBFGText-Bold', fontSize: 36, fontWeight: 'bold', color: '#1f0c13' }}>회원가입</Text>
            <Text style={{ fontFamily: 'KBFGText-Bold', fontSize: 17, fontWeight: 'bold', color: '#200d14', marginTop: 13, marginLeft: 18, marginRight: WIDTH * 0.226 }}>4/4</Text>
          </View>
          {/* <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:12,fontWeight:'500',color:'#200d14',marginTop:10,marginRight:WIDTH*0.32}}>*표시는 필수작성란 입니다.</Text>
         */}
          {/* <Input placeholder='운전수준 상/중/하' placeholderTextColor='#8d8d8d'
          keyboardType='numbers-and-punctuation'
          inputContainerStyle={{borderBottomColor:'#ffb400'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(driverskill) => this.setState({driverskill})} value={this.state.driverskill}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,marginTop:35,backgroundColor:'#ffffff'}}/> */}
          <View style={{ width: WIDTH * 0.6, borderBottomWidth: 1, borderBottomColor: '#8d8d8d', marginBottom: HEIGHT * 0.0333, marginTop: 100 }}>
            <RNPickerSelect placeholder={{ label: '운전수준', value: null, color: '#8d8d8d' }} items={drivers}
              onValueChange={value => { this.setState({ driverskill: value, }) }}
              Icon={() => {
                if (Platform.OS === 'ios')
                  return <Icon name="down" size={12} color="#898989" style={{ marginTop: 2, marginRight: 10 }} />
                else {
                  return <Icon name="down" size={12} color="#898989" style={{ marginTop: 15, marginRight: 10 }} />;
                }
              }}
              // style={{placeholder: {fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}}
              value={this.state.driverskill} />
          </View>

          {/* <Input placeholder='어학수준 상/중/하' placeholderTextColor='#8d8d8d'
          keyboardType='numbers-and-punctuation'
          inputContainerStyle={{borderBottomColor:'#ffb400'}}
          inputStyle={{fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}
          onChangeText={(language) => this.setState({language})} value={this.state.language}
          containerStyle={{marginBottom:HEIGHT*0.0233, width:WIDTH*0.646,marginTop:0,backgroundColor:'#ffffff'}}/> */}
          <View style={{ width: WIDTH * 0.6, borderBottomWidth: 1, borderBottomColor: '#8d8d8d', marginBottom: HEIGHT * 0.0233 }}>
            <RNPickerSelect placeholder={{ label: '어학수준', value: null, color: '#8d8d8d' }} items={languages}
              onValueChange={value => { this.setState({ language: value, }) }}
              Icon={() => {
                if (Platform.OS === 'ios')
                  return <Icon name="down" size={12} color="#898989" style={{ marginTop: 2, marginRight: 10 }} />
                else {
                  return <Icon name="down" size={12} color="#898989" style={{ marginTop: 15, marginRight: 10 }} />;
                }
              }}
              // style={{placeholder: {fontFamily:'KBFGDisplay-Medium',fontSize:14,fontWeight:'300',color:'#3f414f'}}}
              value={this.state.language} />
          </View>
          {/* {this.state.loading ? <Progress.Circle size={50} indeterminate={true} color='rgb(250,180,0)'/> : null} */}

          <Text style={{ marginTop: 10, fontFamily: 'KBFGText-Bold', fontSize: 14, fontWeight: '300', color: '#3f414f', marginRight: WIDTH * 0.48 }}>건강상태</Text>
          <Divider style={{ width: WIDTH * 0.6, height: 1, marginTop: 8, marginLeft: 0, backgroundColor: '#8d8d8d' }} />
          <Input placeholder='질병이 있을 경우,&#13;&#10;병명 및 비상연락처 기재 필수!' placeholderTextColor='#D3D3D3'
            inputContainerStyle={{ borderBottomColor: '#ffffff' }} multiline
            inputStyle={{ fontFamily: 'KBFGText-Bold', fontSize: 14, fontWeight: '300', color: '#3f414f' }}
            onChangeText={(text3) => this.setState({ text3 })} value={this.state.text3}
            containerStyle={{ width: WIDTH * 0.646, height: HEIGHT * 0.1, backgroundColor: '#ffffff', marginBottom: 50 }} />


          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: HEIGHT * 0.144, marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}
              style={{ width: WIDTH * 0.249, height: 39.6, borderRadius: 28, borderWidth: 1, borderColor: '#200d14', backgroundColor: 'rgba(255, 255, 255, 0.25)', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontFamily: 'KBFGText-Bold', fontSize: 18, fontWeight: '500', color: '#200d14' }}>이전</Text>
            </TouchableOpacity>
            {
              true ?
              <View>
                <Text style={{position:'absolute',fontFamily:'KBFGDisplay-Medium',left:20,bottom:40,fontSize:11,color:'#ffb400'}}>CS 교육영상이 재생됩니다.</Text>
                <TouchableOpacity onPress={() => this.setState({ modalvisible: true })}
                  style={{ marginLeft: 30, width: WIDTH * 0.249, height: 39.6, borderRadius: 28, backgroundColor: '#ffb400', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'KBFGText-Bold', fontSize: 18, fontWeight: '500', color: '#ffffff' }}>교육영상</Text>
                </TouchableOpacity>
                </View>
                :
                <View style={{ marginLeft: 30, width: WIDTH * 0.249, height: 39.6, borderWidth: 1, borderColor: '#200d14', borderRadius: 28, backgroundColor: '#rgba(255, 255, 255, 0.25)', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'KBFGText-Bold', fontSize: 18, fontWeight: '500', color: '#200d14' }}>교육영상</Text>
                </View>
            }
            {
              this.state.modalvisible2 ?
                <TouchableOpacity onPress=
                  {
                    !this.state.signcheck ? () => this.submit()
                      :
                      this.props.navigation.navigate('Home', Alert.alert('회원가입이 완료되었으며, \n 승인 대기 중입니다.'))
                  }
                  style={{ marginTop: 15, width: WIDTH * 0.549, height: 39.6, borderRadius: 28, backgroundColor: '#ffb400', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'KBFGText-Bold', fontSize: 18, fontWeight: '500', color: '#ffffff' }}>제출</Text>
                </TouchableOpacity> : null
            }
          </View>
        </View>
      </DismissKeyboard>
    );
  }
}

export default Signin_d_agent