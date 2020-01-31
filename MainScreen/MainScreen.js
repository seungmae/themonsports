import React from 'react';
import Weather from './Weather'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, Dimensions,Linking,WebView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal'
import { Badge } from 'react-native-elements';
import firebase from 'react-native-firebase';
const API_KEY = '9df9da6857c4da9d7e2c7570012e83ec';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height
let Width_400 = 0
if(WIDTH >= 400){
  Width_400 = WIDTH*0.7
}else{
  Width_400 = WIDTH*0.77
}
class MainScreen extends React.Component {
  state = {
    loading: true, // 로딩 여부
    weather: null, // 날씨 정보
    isModalVisible: true,
    isemergencyVisible: false,
    scoremodal: false,
    user: this.props.navigation.getParam('user'),
    user_id: this.props.navigation.getParam('user_id'),
    user_memberid: this.props.navigation.getParam('user_memberid'),
    lat: null,
    lon: null,
  }
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

   componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this._getWeather(position.coords);
      },
      (error) => {
        console.log(error);
      }
      // ,{ timeout: 30000, maximumAge: 1000 },
    )

  firebase.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          firebase.messaging().getToken().then(token => {
            firebase.firestore().collection('users').doc(this.state.user._data.email).update({
              push_token: token
            })
            console.log("토큰: ", token);
          })
          // user has permissions
        } else {
          firebase.messaging().requestPermission()
            .then(() => {
            })
            // .catch(error => {
            //   alert("Error", error)
            // });
        }
      });
   }

   componentDidMount() {
  //   // navigator.geolocation.getCurrentPosition(
  //   //   (position) => {
  //   //     console.log(position)
  //   //     //this._getWeather(position.coords);
  //   //     this.gpspost(position.coords)
  //   //   },
  //   //   (error) => {
  //   //     console.log(error);
  //   //   },
  //   //   {enableHighAccuracy: true, timeout: 20000, distanceFilter: 10},
  //   // );
  
    navigator.geolocation.watchPosition(
      (position) => {
        console.log(position)
        //this._getWeather(position.coords);
        this.gpspost(position.coords)
      },
      (error) => {
        console.log(error);
      },{ 
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    )
  }
  
//     //1
// async checkPermission() {
//   const enabled = await firebase.messaging().hasPermission();
//   if (enabled) {
//       this.getToken();
//   } else {
//       this.requestPermission();
//   }
// }
//   //3
//   async getToken() {
//     let fcmToken = await AsyncStorage.getItem('fcmToken');
//     if (!fcmToken) {
//         fcmToken = await firebase.messaging().getToken();
//         if (fcmToken) {
//             // user has a device token
//             await AsyncStorage.setItem('fcmToken', fcmToken);
//         }
//     }
//   }
//     //2
// async requestPermission() {
//   try {
//       await firebase.messaging().requestPermission();
//       // User has authorised
//       this.getToken();
//   } catch (error) {
//       // User has rejected permissions
//       console.log('permission rejected');
//   }
// }

  gpspost = ({latitude, longitude }) => {
    console.log(this.state.user_id,latitude,longitude)
    
    this.setState({
      lat:latitude,
      lon:longitude,
    })
    var url = 'https://api.themonsports.com/v1/gps'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        "member_id": this.state.user_id,
        "lat": latitude,
        "lon": longitude,
        "push_token": "23123123123123",
        "device": "android"
      }),
    }).then(res => res.json())
      .catch(error => console.log('Error:', error))
      .then(response => {
        console.log('Success', response)
        //console.warn(response)
      })
      
  }

  _getWeather = ({ latitude, longitude }) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      .then(response => response.json()) 
      .then(json => {
        console.log(json.weather);
        //console.warn(json)
        if(json.weather){
          this.setState({
            weather: json,
            loading: false
          })
        }
        
      });
  }


  render() {
    // setTimeout(() => {
    //   navigator.geolocation.watchPosition(
    //     (position) => {
    //       console.log(position)
    //       //this._getWeather(position.coords);
    //       this.gpspost(position.coords)
    //     },
    //     (error) => {
    //       console.log(error);
    //     },{ 
    //       enableHighAccuracy: true,
    //       timeout: 20000,
    //       maximumAge: 1000,
    //       distanceFilter: 10
    //     }
    //   );
    // }, 2000);
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(250,180,0)' }}>

        <Modal isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false })}>
          <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(250,180,0)' }}>
            <Image style={{ width: '45%', marginVertical: 24,resizeMode:'contain' }}
              source={require('../assets/images/logos.png')} />
            <Text style={{ fontFamily: 'KBFGDisplay-Medium', fontSize: 25, color: '#ffffff', fontWeight: 'bold' }}>{this.state.user._data.fullName}님,</Text>
            <Text style={{ fontFamily: 'KBFGDisplay-Medium', fontSize: 25, color: '#ffffff', fontWeight: 'bold' }}>오늘도 좋은하루 되세요!</Text>

            <Text style={{ marginTop: 16, fontFamily: 'KBFGDisplay-Bold', fontSize: 16, color: '#200d14', fontWeight: 'bold' }}>이름: {this.state.user._data.fullName}</Text>
            <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 3 }}> </Text>
            <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 16, color: '#200d14', fontWeight: 'bold' }}>소속: {this.state.user._data.belong}</Text>
            <Text style={{ fontFamily: 'GodoM', fontSize: 3 }}> </Text>
            <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 16, color: '#200d14', fontWeight: 'bold' }}>업무: {this.state.user._data.type}</Text>

            <ImageBackground source={require('../assets/images/modal1.png')}
              style={{ alignItems: 'center', justifyContent: 'center', marginTop: 44.1, width: 107.3, height: 120.1 }} >
              <View style={{ height: 64 }} />
              <TouchableOpacity onPress={() => this.props.navigation.navigate('MyInfo',{ user: this.state.user }, this.setState({ isModalVisible: false }))}
                style={styles.modalbutton}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.modalbuttontext}>자세히 보기</Text>
                  <Image style={{ width: 26, height: 26, marginTop: 16, marginBottom: 12, marginRight: 16, marginLeft: 7 }}
                    source={require('../assets/images/modal2.png')} />
                </View>
              </TouchableOpacity>
            </ImageBackground>

            <View style={{ height: 28 }} />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => this.setState({ isModalVisible: false })}>
              <Image style={{ width: 36, height: 36, marginVertical: 24 }}
                source={require('../assets/images/modal3.png')} />
            </TouchableOpacity>

          </View>
        </Modal>

        {/* 모달창 긴급버튼 */}
        <Modal isVisible={this.state.isemergencyVisible}
          onBackdropPress={() => this.setState({ isemergencyVisible: false })}>
          <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(250,180,0)' }}>
            <Image style={{ width: 86, height: 82, marginTop: 38, marginBottom: 33 }}
              source={require('../assets/images/emegicon.png')} />
            <Text style={{ fontFamily: 'GodoM', fontSize: 21, color: '#ffffff', fontWeight: 'bold' }}>비상버튼을 선택하셨습니다.</Text>
            <Text style={{ marginTop: 10, fontFamily: 'GodoM', fontSize: 21, color: '#200d14', fontWeight: 'bold' }}>관제센터에 보고하시겠습니까?</Text>
            <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 25, justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ isemergencyVisible: false })}
              style={{ marginTop: 30, marginLeft: 0, width: 80, height: 44, borderRadius: 22, backgroundColor: '#bf244d', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'GodoM', fontSize: 22, fontWeight: 'bold', color: '#ffffff' }}>확인</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ isemergencyVisible: false })}
                style={{ marginTop: 30, marginLeft: 60, width: 80, height: 44, borderRadius: 22, borderColor: '#707070', backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'GodoM', fontSize: 22, fontWeight: 'bold', color: '#000000' }}>취소</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 28 }} />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => this.setState({ isemergencyVisible: false })}>
              <Image style={{ width: 36, height: 36, marginVertical: 24 }}
                source={require('../assets/images/modal3.png')} />
            </TouchableOpacity>

          </View>
        </Modal>

        {/* 스코어 */}
        <Modal isVisible={this.state.scoremodal}
          onBackdropPress={() => this.setState({ scoremodal: false })}>
          <WebView
              style={{ width: '100%' }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: 'http://live.kpga.co.kr/livescore/progressRound.asp' }}
            />
            <TouchableOpacity onPress={() => this.setState({ scoremodal: false })}
                  style={{ position: 'absolute', top: 30, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon color='black' size={28} name='close' />
                </TouchableOpacity>
        </Modal>


        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ alignItems: 'center', marginTop: 19, padding: 15.6 }}>
            <TouchableOpacity onPress={() => Linking.openURL('https://weather.naver.com/')}>
            {
              this.state.loading ? <Icon color='#ffffff' size={44} name='weather-sunny' />
                : <Weather data={this.state.weather} />
            }
            </TouchableOpacity>
          </View>
          <View style={{ padding: 15.6, flexDirection: 'row', marginHorizontal: 16, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Image  style={{width:30.9, height: 35.3,marginTop:22,marginRight:25.8}}
                    source={require('../assets/images/alarm.png')}/> */}
            <View style={{ width: 30.9, height: 35.3, marginTop: 22 }} />
            {/* <TouchableOpacity style={{ marginTop: 22, width: 35.8, height: 23 }}
              onPress={() => this.props.navigation.openDrawer({ user: this.state.user })}>
              <Image style={{ width: 35.8, height: 23 }} source={require('../assets/images/menu.png')} />
            </TouchableOpacity> */}
          </View>
        </View>

        <Image style={{ width: '100%',marginBottom: 20,resizeMode:'contain' }}
          source={require('../assets/images/logos.png')} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Comu')}
        style={{ flexDirection: 'row' }}>
          <Text style={{ fontFamily: 'GodoM', fontSize: 14, color: '#ffffff', fontWeight: 'bold' }}>[공지사항]</Text>
          <Text style={{ fontFamily: 'GodoM', fontSize: 14, color: '#ffffff' }}> 더몬스포츠 공지사항 입니다.</Text>
        </TouchableOpacity>
        <ScrollView>
          <View style={{
            flexDirection: 'row', flexWrap: 'wrap',
            justifyContent: 'space-evenly'
          }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('EventInfo')}
              style={{ backgroundColor: '#ffffff', borderRadius: 10, width: WIDTH * 0.44, height: 119, marginVertical: 8 }}>
              <ImageBackground style={{ width: WIDTH * 0.44, height: 119 }}
                source={require('../assets/images/eventinfo.png')}>
                <Text style={{ marginTop: 13, marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 20, color: '#200d14' }}>대회안내</Text>
                <Text style={{ marginTop: 13, marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 13, fontWeight: 'bold', color: '#898989' }}>대회개요</Text>
                <Text style={{ marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 13, fontWeight: 'bold', color: '#898989' }}>정보</Text>
                <Text style={{ marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 13, fontWeight: 'bold', color: '#898989' }}>코스</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Edu',{
              user: this.state.user
            })}
              style={{ backgroundColor: '#ffffff', borderRadius: 10, width: WIDTH * 0.44, height: 119, marginVertical: 8 }}>
              <ImageBackground style={{ width: WIDTH * 0.44, height: 119 }}
                source={require('../assets/images/edu.png')}>
                <Text style={{ marginTop: 13, marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 20, color: '#200d14' }}>교육프로그램</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              if(this.state.user._data.type == '보안요원'){
                return this.props.navigation.navigate('Intro_sup')
              }else{
                return this.props.navigation.navigate('Intro')
              }
            }}
              style={{ backgroundColor: '#ffffff', borderRadius: 10, width: WIDTH * 0.44, height: 119, marginVertical: 8 }}>
              <ImageBackground style={{ width: WIDTH * 0.44, height: 119 }}
                source={require('../assets/images/upmu.png')}>
                <Text style={{ marginTop: 13, marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 20, color: '#200d14' }}>업무소개</Text>
                <Text style={{ marginTop: 44, marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 13, fontWeight: 'bold', color: '#898989' }}>담당 업무별 소개</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Comu')}
              style={{ backgroundColor: '#ffffff', borderRadius: 10, width: WIDTH * 0.44, height: 119, marginVertical: 8 }}>
              <ImageBackground style={{ width: WIDTH * 0.44, height: 119 }}
                source={require('../assets/images/comu.png')}>
                <Text style={{ marginTop: 13, marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 20, color: '#200d14' }}>소통광장</Text>
                <Text style={{ marginTop: 31, marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 13, fontWeight: 'bold', color: '#898989' }}>공지사항 및</Text>
                <Text style={{ marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 13, fontWeight: 'bold', color: '#898989' }}>문의</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('MyInfo',{ user: this.state.user })}
              style={{ backgroundColor: '#ffffff', borderRadius: 10, width: WIDTH * 0.44, height: 119, marginVertical: 8 }}>
              <ImageBackground style={{ width: WIDTH * 0.44, height: 119 }}
                source={require('../assets/images/myinfo.png')}>
                <Text style={{ marginTop: 13, marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 20, color: '#200d14' }}>내정보</Text>
                <Text style={{ marginTop: 44, marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 13, fontWeight: 'bold', color: '#898989' }}>개인필수정보</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('http://live.kpga.co.kr/livescore/progressRound.asp')}
              style={{ backgroundColor: '#ffffff', borderRadius: 10, width: WIDTH * 0.44, height: 119, marginVertical: 8 }}>
              <ImageBackground style={{ width: WIDTH * 0.44, height: 119 }}
                source={require('../assets/images/score.png')}>
                <Text style={{ marginTop: 13, marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 20, color: '#200d14' }}>스코어</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Montalk', { user: this.state.user,user_memberid:this.state.user_memberid })}
              style={{ backgroundColor: '#3f414f', borderRadius: 10, width: WIDTH * 0.44, height: 119, marginVertical: 8 }}>
              <ImageBackground style={{ width: WIDTH * 0.44, height: 119 }}
                source={require('../assets/images/talk.png')}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ marginTop: 13, marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 20, color: '#ffffff' }}>몬톡</Text>
                  {/* <Badge badgeStyle={{
                    marginTop: 15, marginLeft: 5, width: WIDTH * 0.06, height: 15.7,
                    borderRadius: 7, borderWidth: 0, shadowColor: 'rgba(255,105,105,0.4)', backgroundColor: '#ff6969'
                  }}
                    status="success"
                    value="21"
                    textStyle={{ fontFamily: 'KBFGDisplay-Medium', fontSize: 10, fontWeight: 'bold', color: '#ffffff' }}
                  /> */}
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState({ isemergencyVisible: true })}
              style={{ backgroundColor: '#bf244d', borderRadius: 10, width: WIDTH * 0.44, height: 119, marginVertical: 8 }}>
              <ImageBackground style={{ width: WIDTH * 0.44, height: 119 }}
                source={require('../assets/images/urgency.png')}>
                <Text style={{ marginTop: 13, marginLeft: 17.3, fontFamily: 'KBFGDisplay-Medium', fontSize: 20, color: '#ffffff' }}>긴급버튼</Text>
              </ImageBackground>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalbutton: {
    width: 246,
    height: 56,
    backgroundColor: '#200d14',
    borderRadius: 28,
    marginTop: 24,
    paddingVertical: 13,
    alignItems: 'center', justifyContent: 'center'
  },
  modalbuttontext: {
    fontFamily: 'KBFGDisplay-Medium', fontSize: 18,
    marginVertical: 18,
    marginLeft: 21,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },
});
export default MainScreen

