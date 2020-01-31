import React from 'react';
import { Dimensions, View, Text, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform, WebView, ScrollView } from 'react-native';
import { Input, Divider, CheckBox } from 'react-native-elements';
import Modal from 'react-native-modal'
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
class Signin_p_agent extends React.Component { //진행요원
  state = {
    email: this.props.navigation.getParam('email'),
    password: this.props.navigation.getParam('password'),
    otherbelong: this.props.navigation.getParam('otherbelong'),
    belongs: this.props.navigation.getParam('belongs'),
    firstname: this.props.navigation.getParam('firstname'),
    lastname: this.props.navigation.getParam('lastname'),
    gender: this.props.navigation.getParam('gender'),
    job: this.props.navigation.getParam('job'),
    photo: this.props.navigation.getParam('photo'),
    registration_num: this.props.navigation.getParam('registration_num'),
    phone: this.props.navigation.getParam('phone'),
    ephone: this.props.navigation.getParam('ephone'),
    driverskill: this.props.navigation.getParam('driverskill'),
    unifomsize: this.props.navigation.getParam('unifomsize'),
    othersize: this.props.navigation.getParam('othersize'),

    text1: null, //경력사항
    text2: null, //근무가능일자
    text3: null, //건강상태

    checked_all: false,
    checked: false,

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
    if (this.state.belongs === '기타') {
      this.setState({
        belongs: this.state.otherbelong
      })
    }
    if (this.state.unifomsize == 'othersize') {
      this.setState({
        unifomsize: this.state.othersize
      })
    }
    
  }
  submit() {
    this.setState({
      loading: true
    })
    
    // var url = 'http://ec2-13-209-26-68.ap-northeast-2.compute.amazonaws.com/join'

    // const body = new FormData()
    // body.append('id', this.state.email)
    // body.append('pwd', this.state.password)
    // body.append('m_group', 6)
    // body.append('last_name_kr', this.state.firstname)
    // body.append('first_name_kr', this.state.lastname)
    // body.append('belong', this.state.belongs)
    // body.append('id_num', this.state.registration_num)
    // body.append('gender', this.state.gender)
    // body.append('phone', this.state.phone)
    // body.append('emergency_phone', this.state.ephone)
    // body.append('uniform_size', this.state.unifomsize)
    // body.append('occupation', this.state.job)
    // body.append('drive_level', this.state.driverskill)
    // body.append('available_working_day', this.state.text2)
    // body.append('health_status', this.state.text3)
    // body.append('career', this.state.text1)
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
    // body2.append('driver_license', '')
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
    //     this.setState({signcheck:true})
    //     body2.append('master_idx',key)
    //     fetch(url2, {
    //       method: 'POST',
    //       body: body2
    //     }).then(res => res.json())
    //     .then(response => console.log('Success', response))
    //       .catch(error => {console.log(error)
    //         Alert.alert('회원가입 실패')})
    //   })

    //   .catch(error => {console.log(error)
    //     Alert.alert('회원가입 실패')})

    // -------------------------------------
    var url = 'https://api.themonsports.com/v1/account/insert'
    fetch(url, {
      method: 'POST',
      data: {
      },

      body: JSON.stringify({
        "flag": 'insert',
        "loginid": this.state.email,
        "passwd": this.state.password,
        "name_kr1": this.state.firstname,
        "name_kr2": this.state.lastname,
        "name_en1": '',
        "name_en2": '',
        "personalno": this.state.registration_num,
        "workDatail": "",
        "positions": this.state.belongs,
        "birth": '',
        "mobile": this.state.phone,
        "emergency": this.state.ephone,
        "sex": this.state.gender,
        "team_id": "6",
        "email": '',
        "job": this.state.job,
        "driveLevel": this.state.driverskill,
        "langLevel": '',
        "photoFile": `data:image/jpeg;base64,${this.state.photo.data}`,
        "extFile": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD...k=",
        "extfile2": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD...k=",
        "device": this.state.platform,
        "token": "",
        "info1": this.state.text2,
        "info2": this.state.text3,
        "info3": this.state.text1,
        "uniform": this.state.unifomsize
      }),
    }).then(res => res.json())
      .catch(error => console.log('Error:', error))
      .then(response => console.log('Success', response))

    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
      console.log(response)
      const { navigation } = this.props;
      user_uid = response.user._user.uid;
      if (Platform.OS === 'ios') {
        var uri = this.state.photo.sourceURL
      } else {
        var uri = this.state.photo.path
      }
      const { email, belongs, firstname, photo, lastname, gender, job, registration_num, phone, ephone, driverskill, unifomsize, text1, text2, text3 } = this.state;
      const data = {
        email: email,
        type: '진행요원',
        profilePictureURL: '',
        belong: belongs,
        firstName: firstname,
        lastName: lastname,
        fullName: firstname + lastname,
        gender: gender,
        job: job,
        regi_num: registration_num,
        phone: phone,
        e_phone: ephone,
        drive_level: driverskill,
        unifom: unifomsize,
        경력사항: text1,
        근무가능일자: text2,
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
      } else {
        var uri = this.state.photo.path
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
    const { checked, checked_all } = this.state
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
          <Text style={{ fontFamily: 'KBFGText-Bold', fontSize: 12, fontWeight: '500', color: '#200d14', marginTop: 10, marginRight: WIDTH * 0.32, color: '#ffb400' }}>*표시는 필수작성란 입니다.</Text>

          <Text style={{ marginTop: 50, fontFamily: 'KBFGText-Bold', fontSize: 14, fontWeight: '300', color: '#3f414f', marginRight: WIDTH * 0.5 }}>경력사항</Text>
          <Divider style={{ width: WIDTH * 0.646, height: 1, marginTop: 8, marginLeft: 0, backgroundColor: '#8d8d8d' }} />
          <Input placeholder='자유기재' placeholderTextColor='#D3D3D3'
            inputContainerStyle={{ borderBottomColor: '#ffffff' }} multiline
            inputStyle={{ fontFamily: 'KBFGText-Bold', fontSize: 14, fontWeight: '300', color: '#3f414f' }}
            onChangeText={(text1) => this.setState({ text1 })} value={this.state.text1}
            containerStyle={{ width: WIDTH * 0.646, height: HEIGHT * 0.1, backgroundColor: '#ffffff' }} />

          <Text style={{ marginTop: 10, fontFamily: 'KBFGText-Bold', fontSize: 14, fontWeight: '300', color: '#ffb400', marginRight: WIDTH * 0.425 }}>근무가능일자*</Text>
          <View style={{ flexDirection: 'row' }}>
            <CheckBox center title='전 일정' center checkedIcon='dot-circle-o' uncheckedIcon='circle-o'
              checkedColor='#ffb400' containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0 }}
              checked={this.state.checked_all} onPress={() => this.setState({ checked_all: !checked_all, checked: false })} />
            <CheckBox center title='기타 일정' center checkedIcon='dot-circle-o' uncheckedIcon='circle-o'
              checkedColor='#ffb400' containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0 }}
              checked={this.state.checked} onPress={() => this.setState({ checked: !checked, checked_all: false })} />
          </View>
          {
            this.state.checked ?
              <View>
                <Divider style={{ width: WIDTH * 0.646, height: 1, marginTop: 8, marginLeft: 0, backgroundColor: '#ffb400' }} />
                <Input placeholder='예_주말, 금토일' placeholderTextColor='#D3D3D3'
                  inputContainerStyle={{ borderBottomColor: '#ffffff' }} multiline
                  inputStyle={{ fontFamily: 'KBFGText-Bold', fontSize: 14, fontWeight: '300', color: '#3f414f' }}
                  onChangeText={(text2) => this.setState({ text2 })} value={this.state.text2}
                  containerStyle={{ width: WIDTH * 0.646, backgroundColor: '#ffffff' }} />
              </View>
              :
              null
          }

          <Text style={{ marginTop: 10, fontFamily: 'KBFGText-Bold', fontSize: 14, fontWeight: '300', color: '#3f414f', marginRight: WIDTH * 0.5 }}>건강상태</Text>
          <Divider style={{ width: WIDTH * 0.646, height: 1, marginTop: 8, marginLeft: 0, backgroundColor: '#8d8d8d' }} />
          <Input placeholder='질병이 있을 경우,&#13;&#10;병명 및 비상연락처 기재 필수!' placeholderTextColor='#D3D3D3'
            inputContainerStyle={{ borderBottomColor: '#ffffff' }} multiline
            inputStyle={{ fontFamily: 'KBFGText-Bold', fontSize: 14, fontWeight: '300', color: '#3f414f' }}
            onChangeText={(text3) => this.setState({ text3 })} value={this.state.text3}
            containerStyle={{ width: WIDTH * 0.646, height: HEIGHT * 0.1, backgroundColor: '#ffffff' }} />


          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: HEIGHT * 0.144, marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}
              style={{ width: WIDTH * 0.249, height: 39.6, borderRadius: 28, borderWidth: 1, borderColor: '#200d14', backgroundColor: 'rgba(255, 255, 255, 0.25)', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontFamily: 'KBFGText-Bold', fontSize: 18, fontWeight: '500', color: '#200d14' }}>이전</Text>
            </TouchableOpacity>
            {
              this.state.checked_all || this.state.checked ?
              <View>
                <Text style={{position:'absolute',fontFamily:'KBFGDisplay-Medium',left:25,bottom:40,fontSize:11,color:'#ffb400'}}>CS 교육영상이 재생됩니다.</Text>
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

export default Signin_p_agent