import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import { Divider, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
const WIDTH = Dimensions.get('window').width;
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)
class Page1 extends Component { //소통광장
  render() {
    return (
      <View>
        <ScrollView>
          <Text style={{ marginTop: 25, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>공지사항</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
          <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>자주 묻는 질문</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
          <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>문의 게시판</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
          <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>활동 사진</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
          <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>설문 조사</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
        </ScrollView>
      </View>
    )
  }
}
class Page2 extends Component { //소통광장
  render() {
    return (
      <View>
        <ScrollView>
          <Text style={{ marginTop: 25, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>공지사항</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
          <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>자주 묻는 질문</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
          <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>문의 게시판</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
          <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>활동 사진</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
          <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>설문 조사</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
        </ScrollView>
      </View>
    )
  }
}
class Page3 extends Component { //소통광장
  render() {
    return (
      <View>
        <ScrollView>
          <Text style={{ marginTop: 25, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>공지사항</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
          <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>자주 묻는 질문</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
          <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>문의 게시판</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
          <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>활동 사진</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
          <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>설문 조사</Text>
          <Divider style={{ width: 210, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
        </ScrollView>
      </View>
    )
  }
}
export default class ComunitysquareScreen extends React.Component {
  state = {
    isModalVisible0: false, //공지사항
    isModalVisible1: false, //자주묻는질문
    isModalVisible2: false, //문의 게시판
    isModalVisible3: false, //
    modalpagevisible1: true, //자주묻는 질문 페이지 1
    modalpagervisible2: false, // 자주묻는 2
    modalpagervisible3: false, // 자주묻는 3
  }
  render() {
    return (

      <View style={{ flex: 1, backgroundColor: 'rgb(242,242,242)' }}>
        <View style={{ backgroundColor: 'rgb(250,180,0)', height: 90, width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <View style={{ alignItems: 'center', padding: 24, marginTop: 15.9 }}>
            <TouchableOpacity style={{ width: 35.8 }}
              onPress={() => this.props.navigation.navigate('Main')}>
              <Icon color='#ffffff' size={25.5} name='arrowleft' />
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: 'center', padding: 24, marginTop: 15.9 }}>
            <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight:'bold', color: '#ffffff' }}>소통광장</Text>
          </View>

          <View style={{ padding: 15.6, marginTop: 15.9, flexDirection: 'row', marginHorizontal: 16, alignItems: 'center', justifyContent: 'center' }}>
            {/* <TouchableOpacity style={{ marginTop: 16, width: 35.8, height: 25 }}
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Image style={{ width: 22.8, height: 15 }} source={require('../assets/images/menu.png')} />
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={{ alignItems: 'center', marginVertical: 16 }}>

          {/*모달창  공지사항*/}
          <Modal style={{ marginTop: 136.9 }} isVisible={this.state.isModalVisible0}
                onBackdropPress={() => this.setState({ isModalVisible0: false })}>
                <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.setState({ isModalVisible0: false })}
                      style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                      <Icon color='#3f414f' size={24} name='close' />
                    </TouchableOpacity>
                  </View>

                  <ImageBackground style={{ width: '100%', height: 80,backgroundColor:'rgb(250,180,0)' }}>
                    <Text style={{ marginTop: 20, marginLeft: 22.5, marginRight: 21.5, fontFamily: 'GodoM', fontSize: 32, fontWeight: 'bold', color: '#ffffff' }}>공지사항</Text>
                  </ImageBackground>
                  <Text style={{ marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>공지사항</Text>
                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>각 파트별 근무자들께서는 담당 팀장을 통해 상세 업무 내용을 확인해주시기 바랍니다.</Text>
                </ScrollView>
              </Modal>

          {/* 자주묻는 질문 모달창 page 1*/}
          {
            this.state.isModalVisible1 ?
              <Modal style={{ marginTop: 136.9 }} isVisible={this.state.isModalVisible1}
                onBackdropPress={() => this.setState({ isModalVisible1: false })}>
                <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.setState({ isModalVisible1: false })}
                      style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                      <Icon color='#3f414f' size={24} name='close' />
                    </TouchableOpacity>
                  </View>

                  <ImageBackground style={{ width: '100%', height: 80,backgroundColor:'rgb(250,180,0)' }}>
                    <Text style={{ marginTop: 20, marginLeft: 22.5, marginRight: 21.5, fontFamily: 'GodoM', fontSize: 32, fontWeight: 'bold', color: '#ffffff' }}>자주 묻는 질문</Text>
                  </ImageBackground>
                  <Text style={{ marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>Q. 유니폼 사이즈가 안 맞는데 교환이 가능한가요?</Text>
                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>A. 사이즈별 수량이 여유롭게 제작되지 않아 교환은 어려우므로 소속 내 교환을 권장 드립니다.</Text>

                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 50.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>Q : 유니폼은 꼭 입어야 하나요?</Text>
                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>A. 유니폼은 진행요원으로서 신분을 규명하므로, 반드시 유니폼을 착용하고 STAFF 목걸이는 패용해주시기 바랍니다.</Text>

                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 39.9, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>Q. 자차를 이용할 경우, 어디에 주차를 하면 되나요?</Text>
                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>A. 갤러리 주차장에 주차 가능하며, 갤러리 셔틀버스
이용하여 대회장으로 이동이 가능합니다.
다만, 원활한 운영과 인원 파악 등을 위하여
진행요원 수송 버스 이용을 권장드립니다.
자차 이용이 필요할 시 근무시간에 지장이 없도록
    집합 시간 및 장소를 꼭 확인부탁드립니다.</Text>

                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 39.9, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>Q. 대회장에서 _____가 어디에 있나요?</Text>
                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>A. 대회 지도를 참고하여 각 위치를 사전에 파악해
주시기 바랍니다. 주 근무지역에서 가까운 홀이나
방향을 미리 확인하고, 갤러리 플라자/화장실 등
갤러리들이 주로 찾는 편의시설 위치를 숙지해야
    합니다.</Text>

                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 39.9, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>Q. 모르는 내용을 질문 받거나 답변하기에 어려운 일을 요청 받았을 때, 어떻게 하나요?
</Text>
                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>A. 정확한 정보 외 모르거나 헷갈리는 내용을 문의
받았을 경우, 상대방이 어떤 도움이 필요한 지
확인해야 합니다.
각 업무별 담당자에 연락이나 연계하여 응대하는
것이 좋습니다. 응대 시간이 지체될 경우, 사전에
    지연에 대한 안내를 해야 합니다.</Text>

                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 39.9, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>Q. 임금은 언제 들어와요?
              
</Text>
                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>A. 대회가 종료된 후 정리까지 약 1개월 소요되며,
소속별 대표나 개인 계좌로 입금될 예정입니다.
이와 관련하여 문의사항이 있으실 경우,
    담당자나 웹사이트를 통해 문의 부탁드립니다.</Text>

                  <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100,marginLeft:20, marginBottom: 54, flexDirection: 'row' }}>
                    <View>
                      <TouchableOpacity>
                        <Text style={{ marginTop: 10, marginRight: 24, fontFamily: 'GodoM', fontSize: 14, fontWeight: 'bold', color: '#202124' }}>01</Text>
                        <Divider style={{ width: 14, height: 2, marginTop: 10, backgroundColor: '#fa6980' }} />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity style={{width:30}}
                      onPress={() => this.setState({ isModalVisible1: false, modalpagervisible2: true })}>
                        <Text style={{ width:30,marginRight: 24, fontFamily: 'GodoM', fontSize: 14, fontWeight: 'bold', color: '#a6adb4' }}>02</Text>
                      </TouchableOpacity>
                    </View>
                    {/* <View>
                                <TouchableOpacity onPress={() => this.setState({ isModalVisible1:false,modalpagervisible3:true })}>
                                <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:11,fontWeight:'bold',color:'#a6adb4'}}>03</Text>
                                </TouchableOpacity> 
                              </View> */}
                  </View>
                </ScrollView>
              </Modal>
              :
              <View></View>
          }

          {/* 자주묻는 질문 모달창 page 2*/}
          {
            this.state.modalpagervisible2 ?
              <Modal style={{ marginTop: 136.9 }} isVisible={this.state.modalpagervisible2}
                onBackdropPress={() => this.setState({ modalpagervisible2: false })}>
                <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.setState({ modalpagervisible2: false })}
                      style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                      <Icon color='#3f414f' size={24} name='close' />
                    </TouchableOpacity>
                  </View>

                  <ImageBackground style={{ width: '100%', height: 80,backgroundColor:'rgb(250,180,0)' }}>
                    <Text style={{ marginTop: 20, marginLeft: 22.5, marginRight: 21.5, fontFamily: 'GodoM', fontSize: 32, fontWeight: 'bold', color: '#ffffff' }}>자주 묻는 질문</Text>
                  </ImageBackground>
                  <Text style={{ marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>Q. 갤러리 통제하는 게 어려워요.</Text>
                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>A. 대회 운영에 방해가 된다고 판단될 경우, 갤러리
통제가 필요합니다.
강압적인 자세나 어투보다는 회유형으로 통제를
해야 하지만, 간혹 큰 소리를 치거나 무시를 하는
상황이 발생할 수 있습니다.
디 때는 담당 팀장에 연락 및 연계를 하고,
    최대한 객관적으로 상황을 전달하도록 합니다.</Text>

                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 39.9, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>Q. 대회장 내 응급 상황이 발생했을 때는?</Text>
                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>A. 먼저, 몬시스템 내 응급버튼을 활성화하여
응급 상황 발생된 위치를 관제센터에 알립니다.
응급 처치 가능 장소를 파악하고, 담당자와 해당
연락처를 숙지하고 있는 것이 좋습니다.
응급 처치는 갤러리 서비스 내에서 가능하며,
아래 순서를 참고하여 조치할 수 있도록 합니다.
{"\n"}{"\n"}
1) 주변 확인 (추가 위험 발생 가능성 파악){"\n"}
2) 응급 환자 자세 확인 (환자를 이동시키지 않고,
환자가 편안한 상태/자세인지 확인){"\n"}
3) 비상 연락망 순으로 연락 (연락하는 사람의
이름, 정확한 현 위치, 환자의 부상 부위 설명){"\n"}
4) 응급 처치 부스 위치 안내
</Text>

                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 39.9, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>Q. 근무 중에 사고가 나면 어떻게 하나요? </Text>
                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>A. 근무 중에 사고가 발생하였을 경우 담당자에게
즉각 보고하여 해결해야 하며, 근무 시작 전 보험
가입에 동의한 근무자에 한하여 보험가입 혜택을
받으실 수 있습니다.
자세한 내용은 담당자나 웹사이트를 통해 문의
주시기 바랍니다.

</Text>
                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 39.9, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>Q. 밥은 언제 먹어요?</Text>
                  <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>A. 아침 - 숙소 식당, 근처 식당, 골프장 구내식당
                  {"\n"}
    점심 - 각 업무별로 근무 장소가 다르기 때문에
              도시락으로 대체됩니다. 근무에 방해되지
              않는 선에서 교대로 식사를 진행하되,
              대회장 내 코스에 있는 진행요원의 경우 
              진행팀장을 통해 순차 배급됩니다. {"\n"}
    저녁 - 1,2,3라운드 (4라운드 제외) 종료 후 
              전체 진행요원 인원 체크 후 식사합니다.{"\n"}

</Text>

                  <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100,marginLeft:20, marginBottom: 54, flexDirection: 'row' }}>
                    <View>
                      <TouchableOpacity style={{width:30}}
                      onPress={() => this.setState({ modalpagervisible2: false, isModalVisible1: true })}>
                        <Text style={{ width:30,marginRight: 24, fontFamily: 'GodoM', fontSize: 14, fontWeight: 'bold', color: '#a6adb4' }}>01</Text>

                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <Text style={{ marginTop: 10, marginRight: 24, fontFamily: 'GodoM', fontSize: 14, fontWeight: 'bold', color: '#202124' }}>02</Text>
                        <Divider style={{ width: 14, height: 2, marginTop: 10, backgroundColor: '#fa6980' }} />
                      </TouchableOpacity>
                    </View>
                    {/* <View>
                      <TouchableOpacity onPress={() => this.setState({ modalpagervisible2: false, modalpagervisible3: true })}>
                        <Text style={{ fontFamily: 'GodoM', fontSize: 11, fontWeight: 'bold', color: '#a6adb4' }}>03</Text>
                      </TouchableOpacity>
                    </View> */}
                  </View>
                </ScrollView>
              </Modal>
              :
              <View></View>
          }

          

          {/*모달창  문의게시판*/}

          <Modal style={{ marginTop: 136.9 }} isVisible={this.state.isModalVisible2}
            onBackdropPress={() => this.setState({ isModalVisible2: false })}>
            <DismissKeyboard>
              <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity onPress={() => this.setState({ isModalVisible2: false })}
                    style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon color='#3f414f' size={24} name='close' />
                  </TouchableOpacity>
                </View>

                <ImageBackground style={{ width: '100%', height: 80,backgroundColor:'rgb(250,180,0)' }}>
                  <Text style={{ marginTop: 20, marginLeft: 22.5, marginRight: 21.5, fontFamily: 'GodoM', fontSize: 32, fontWeight: 'bold', color: '#ffffff' }}>문의 게시판</Text>
                </ImageBackground>
                <Text style={{ marginTop: 37.7, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 24, fontWeight: 'bold', color: '#200d14' }}>문의 게시판</Text>
                <Divider style={{ width: '100%', height: 1, marginTop: 18.5, backgroundColor: '#dedede' }} />

                <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 39.9, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>업무관련 문의 및 요청사항을 작성하는 게시판입니다.</Text>
                <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>글을 남겨주시면 빠른 시일내에 답변해드리겠습니다. 여러분의 소중한 의견을 기다립니다.</Text>

                <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>제목</Text>
                <Input containerStyle={{ marginLeft: 22.5, marginRight: 21.5, borderWidth: 1, borderColor: '#8d8d8d', width: 290 }}
                  inputStyle={{ fontFamily: 'GodoM', fontSize: 13, fontWeight: '300', color: '#3f414f' }} inputContainerStyle={{ borderBottomWidth: 0, marginLeft: 3, marginRight: 13 }} />

                <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 13, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>이름</Text>
                <Input containerStyle={{ marginLeft: 22.5, marginRight: 21.5, borderWidth: 1, borderColor: '#8d8d8d', width: 290 }}
                  inputStyle={{ fontFamily: 'GodoM', fontSize: 13, fontWeight: '300', color: '#3f414f' }} inputContainerStyle={{ borderBottomWidth: 0, marginLeft: 3, marginRight: 13 }} />

                <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 13, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>연락처</Text>
                <Input containerStyle={{ marginLeft: 22.5, marginRight: 21.5, borderWidth: 1, borderColor: '#8d8d8d', width: 290 }}
                  inputStyle={{ fontFamily: 'GodoM', fontSize: 13, fontWeight: '300', color: '#3f414f' }} inputContainerStyle={{ borderBottomWidth: 0, marginLeft: 3, marginRight: 13 }} />

                <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 13, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>이메일</Text>
                <Input containerStyle={{ marginLeft: 22.5, marginRight: 21.5, borderWidth: 1, borderColor: '#8d8d8d', width: 290 }}
                  inputStyle={{ fontFamily: 'GodoM', fontSize: 13, fontWeight: '300', color: '#3f414f' }} inputContainerStyle={{ borderBottomWidth: 0, marginLeft: 3, marginRight: 13 }} />

                <Text style={{ marginLeft: 22.5, marginRight: 21.5, marginTop: 13, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f', lineHeight: 25 }}>내용</Text>
                <Input containerStyle={{ marginLeft: 22.5, marginRight: 21.5, borderWidth: 1, borderColor: '#8d8d8d', width: 290 }}
                  multiline={true} inputStyle={{ textAlignVertical: 'auto', fontFamily: 'GodoM', fontSize: 13, fontWeight: '300', color: '#3f414f' }}
                  inputContainerStyle={{ borderBottomWidth: 0, marginLeft: 3, marginRight: 13 }} />

                <View style={{ flexDirection: 'row', marginBottom: 100 }}>
                  <TouchableOpacity style={{ marginTop: 30, marginLeft: 30, width: 129, height: 44, borderRadius: 22, backgroundColor: '#ffb400', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>등록</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({ isModalVisible2: false })}
                    style={{ marginTop: 30, marginLeft: 23, width: 129, height: 44, borderWidth: 1, borderRadius: 22, borderStyle: 'solid', borderColor: '#707070', backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>취소</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </DismissKeyboard>
          </Modal>


          <TouchableOpacity onPress={() => this.setState({ isModalVisible0: true })}
            style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
              {/* <ImageBackground style={{marginBottom:12,marginRight:30,width:WIDTH*0.85,height:90}} source={require('../assets/images/comuicon1.png')}>
              <Text style={{marginLeft:70,marginTop:36.5,marginBottom:23.5, fontFamily:'KBFGDisplay-Medium',fontSize:25,fontWeight:'bold',color: '#200d14'}}>공지사항</Text>
              </ImageBackground> */}
              <Text style={{ marginLeft: 20, marginTop: 27.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>공지사항</Text>
              <Image style={{ width: 40, height: 37, marginLeft: 105 }} source={require('../assets/images/ss1.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({ isModalVisible1: true })}
            style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
              {/* <ImageBackground style={{marginBottom:12,marginRight:30,width:WIDTH*0.85,height:90}} source={require('../assets/images/comuicon2.png')}>
              <Text style={{marginLeft:70,marginTop:36.5,marginBottom:23.5, fontFamily:'KBFGDisplay-Medium',fontSize:25,fontWeight:'bold',color: '#200d14'}}>자주 묻는 질문</Text>
              </ImageBackground> */}
              <Text style={{ marginLeft: 20, marginTop: 27.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>자주 묻는 질문</Text>
              <Image style={{ width: 40, height: 37, marginLeft: 50 }} source={require('../assets/images/ss2.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({ isModalVisible2: true })}
            style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
              {/* <ImageBackground style={{marginBottom:12,marginRight:30,width:WIDTH*0.85,height:90}} source={require('../assets/images/comuicon3.png')}>
              <Text style={{marginLeft:70,marginTop:36.5,marginBottom:23.5, fontFamily:'KBFGDisplay-Medium',fontSize:25,fontWeight:'bold',color: '#200d14'}}>문의 게시판</Text>
              </ImageBackground> */}
              <Text style={{ marginLeft: 20, marginTop: 27.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>문의 게시판</Text>
              <Image style={{ width: 40, height: 37, marginLeft: 75 }} source={require('../assets/images/ss3.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
              <ImageBackground style={{ marginTop: 20, marginBottom: 12, marginRight: 60, width: WIDTH * 0.85, height: 90 }} source={require('../assets/images/eduicona1.png')}>
                <Text style={{ marginLeft: 80, marginTop: 28.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>리서치</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          {/* <TouchableOpacity style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
             
              <Text style={{ marginLeft: 20, marginTop: 27.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>활동 사진</Text>
              <Image style={{ width: 40, height: 37, marginLeft: 95 }} source={require('../assets/images/ss4.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
              
              <Text style={{ marginLeft: 20, marginTop: 27.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>설문 조사</Text>
              <Image style={{ width: 40, height: 37, marginLeft: 95 }} source={require('../assets/images/ss5.png')} />
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}