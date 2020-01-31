import React from 'react';
import { Linking, View, Text, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import { Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Entrance from '../businessmenu/Entrance'
const WIDTH = Dimensions.get('window').width;
class EduprogramScreen extends React.Component {
  state = {
    isModalVisible0: false, //기본사항 - 진행요원
    isModalVisible0_sup: false, //기본사항 - 보안요원
    isModalVisible1: false, //출입 비표
    isModalVisible1_2: false, //출입 비표 -2
    isModalVisible2: false, //갤러리 이벤ㅌ 
    isModalVisible2: false, //교육영상
    isModalVisible3: false, //보험

    Entrancevisible: false,

    widthcheck: null,

    user: this.props.navigation.getParam('user'),
  }
  componentDidMount() {
    if (WIDTH >= 400) {
      this.setState({ widthcheck: true })
    } else {
      this.setState({ widthcheck: false })
    }

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
            <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#ffffff' }}>교육프로그램</Text>
          </View>

          <View style={{ padding: 15.6, marginTop: 15.9, flexDirection: 'row', marginHorizontal: 16, alignItems: 'center', justifyContent: 'center' }}>
            {/* <TouchableOpacity style={{ marginTop: 16, width: 35.8, height: 25 }}
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Image style={{ width: 22.8, height: 15 }} source={require('../assets/images/menu.png')} />
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={{ alignItems: 'center', marginVertical: 16 }}>
          {/* 기본사항 진행요원 모달창*/}
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
                <Text style={{ marginTop: 20, marginLeft: 22.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 32, fontWeight: 'bold', color: '#ffffff' }}>기본사항</Text>
              </ImageBackground>
              <Text style={{ marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>근무 전 준비사항</Text>
              <View style={{ flexDirection: 'row', width: '100%' }}>
                <View style={{ marginLeft: 56, alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ marginTop: 60.4, width: 53.5, height: 75.8 }} source={require('../assets/images/eduicon1.png')} />
                  <Text style={{ marginTop: 13.7, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>유니폼 &</Text>
                  <Text style={{ marginTop: 1, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>STAFF 목걸이</Text>
                </View>
                <View style={{ marginLeft: 56, alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ marginTop: 69.5, width: 26.6, height: 56 }} source={require('../assets/images/eduicon2.png')} />
                  <Text style={{ marginTop: 13.7, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>개인물품 지참</Text>
                  <Text style={{ marginTop: 1, fontFamily: 'GodoM', fontSize: 14, fontWeight: 'bold', color: '#200d14' }}>선블록, 팔토시 등</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', width: '100%' }}>
                <View style={{ marginLeft: 23, alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ marginTop: 37, width: 60.6, height: 52 }} source={require('../assets/images/eduicon3.png')} />
                  <Text style={{ marginTop: 13.7, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>집합시간</Text>
                  <Text style={{ marginTop: 1, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>확인</Text>
                </View>
                <View style={{ marginLeft: 50.4, alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ marginTop: 34.4, width: 50.5, height: 62.6 }} source={require('../assets/images/eduicon4.png')} />
                  <Text style={{ marginTop: 13.7, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>식사시간</Text>
                  <Text style={{ marginTop: 1, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>&장소 확인</Text>
                </View>
                <View style={{ marginLeft: 25.4, alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ marginTop: 63.4, width: 63, height: 31 }} source={require('../assets/images/eduicon5.png')} />
                  <Text style={{ marginTop: 13.7, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>셔틀버스 시간</Text>
                  <Text style={{ marginTop: 1, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>&장소 확인</Text>
                </View>
              </View>
              <Divider style={{ width: '100%', height: 1, marginTop: 47.5, backgroundColor: '#dedede' }} />

              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 50.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>근무원칙</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-유니폼 착용, STAFF 목걸이 패용</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-집합 시간 준수</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-업무 내용 파악</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-교대 시 특이사항이나 전달 내용 인수인계</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-문의 사항, 응급 상황 시 담당자에 즉시 통보</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-휴대폰 매너모드/무음</Text>

              <Divider style={{ width: '100%', height: 1, marginTop: 50.5, backgroundColor: '#dedede' }} />

              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 50.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>숙지사항</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-대회일정</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-셔틀버스 시간표</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-편의 시설 위치:홀, 화장실, 주차장, 승하차장, 클럽하우스, 의료서비스 </Text>
              <View style={{marginLeft: 21, marginRight: 21,marginTop: 2, flexDirection:'row'}}>
              <Text style={{ fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>* 상세 내용은 [업무안내] 메뉴 참고 부탁드립니다. </Text>
              </View>
              
              <Divider style={{ width: '100%', height: 1, marginTop: 50.5, backgroundColor: '#dedede' }} />
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 50.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>악천 및 일사병 환자 발생 시</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>- 폭우나 낙뢰 등 자연재해, 일사병 환자 발생 시 임시 대피소로 안내</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>- 1~4라운드 / 9:00~17:00</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>- A대피소: 3~17번 홀 사이에 위치 (3,4,16,17번 홀 주변 갤러리 대피)</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>- B대피소: 7번 홀에 위치 (5,6,7,8번 홀 주변 갤러리 대피)</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>- C대피소: 15번 홀에 위치 (15번 홀 주변 갤러리 대피)</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>- D대피소: 11~14번 홀 사이에 위치 (11,12,13,14번 홀 주변 갤러리 대피)</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>- 클럽하우스 (1,2,9,10,18번 홀 주변 갤러리 대피) </Text>

              <Divider style={{ width: '100%', height: 1, marginTop: 50.5, backgroundColor: '#dedede' }} />
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 50.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>응급상황 발생 시 행동요령</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>1) 주변 확인 (추가 위험 발생 가능성 파악)</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>2) 응급 환자 자세 확인 (환자를 이동시키지 않고, 환자가 편안한 상태/자세인지 확인)</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>3) 비상 연락망 순으로 연락 (연락하는 사람의 이름, 정확한 현 위치, 환자의 부상 부위 설명)</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>4) 임시 대피소 위치 안내</Text>

              <Divider style={{ width: '100%', height: 1, marginTop: 50.5, backgroundColor: '#dedede' }} />
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 50.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>흡연 공지</Text>
              <Text style={{ marginBottom: 40, marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-모든 흡연자는 지정된 흡연 장소에서만 흡연 가능{"\n"}
-흡연 장소를 깨끗하게 사용해야 합니다.{"\n"}
-흡연 장소의 바닥에 담배꽁초가 발견되거나
  침을 뱉는 등 청결하지 않다고 판단될 경우,
  흡연 장소를 폐쇄합니다.</Text>
              
            </ScrollView>
          </Modal>

          {/* 기본사항 보안요원 모달창*/}
          <Modal style={{ marginTop: 136.9 }} isVisible={this.state.isModalVisible0_sup}
            onBackdropPress={() => this.setState({ isModalVisible0_sup: false })}>
            <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.setState({ isModalVisible0_sup: false })}
                  style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
              </View>

              <ImageBackground style={{ width: '100%', height: 80,backgroundColor:'rgb(250,180,0)' }}>
                <Text style={{ marginTop: 20, marginLeft: 22.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 32, fontWeight: 'bold', color: '#ffffff' }}>기본사항</Text>
              </ImageBackground>
              <Text style={{ marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>근무 전 준비사항</Text>
              <View style={{ flexDirection: 'row', width: '100%' }}>
                <View style={{ marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ marginTop: 60.4, width: 53.5, height: 50.8 }} source={require('../assets/images/eduicon1-1.png')} />
                  <Text style={{ marginTop: 13.7, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>유니폼 착용</Text>
                  <Text style={{ marginTop: 1, fontFamily: 'GodoM', fontSize: 14, fontWeight: 'bold', color: '#200d14' }}>각 배치별 상이:</Text>
                  <Text style={{ marginTop: 1, fontFamily: 'GodoM', fontSize: 13, fontWeight: 'bold', color: '#200d14' }}>경호 셔츠, 조끼, 정장</Text>
                </View>
                <View style={{ marginLeft: 25, alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ marginTop: 60.4, width: 53.5, height: 55.8 }} source={require('../assets/images/eduicon1-2.png')} />
                  <Text style={{ marginTop: 13.7, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>무전기</Text>
                  <Text style={{ marginTop: 1, fontFamily: 'GodoM', fontSize: 14, fontWeight: 'bold', color: '#200d14' }}>배터리 및</Text>
                  <Text style={{ marginTop: 1, fontFamily: 'GodoM', fontSize: 13, fontWeight: 'bold', color: '#200d14' }}>송수신 확인</Text>
                </View>
                <View style={{ marginLeft: 15, alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ marginTop: 47.5, width: 26.6, height: 56 }} source={require('../assets/images/eduicon2.png')} />
                  <Text style={{ marginTop: 13.7, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>개인물품 지참</Text>
                  <Text style={{ marginTop: 1, fontFamily: 'GodoM', fontSize: 14, fontWeight: 'bold', color: '#200d14' }}>선블록, 팔토시 등</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', width: '100%' }}>
                <View style={{ marginLeft: 23, alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ marginTop: 37, width: 60.6, height: 52 }} source={require('../assets/images/eduicon3.png')} />
                  <Text style={{ marginTop: 13.7, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>집합시간</Text>
                  <Text style={{ marginTop: 1, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>확인</Text>
                </View>
                <View style={{ marginLeft: 50.4, alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ marginTop: 34.4, width: 50.5, height: 62.6 }} source={require('../assets/images/eduicon4.png')} />
                  <Text style={{ marginTop: 13.7, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>식사시간</Text>
                  <Text style={{ marginTop: 1, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>&장소 확인</Text>
                </View>
                <View style={{ marginLeft: 25.4, alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ marginTop: 63.4, width: 63, height: 31 }} source={require('../assets/images/eduicon5.png')} />
                  <Text style={{ marginTop: 13.7, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>셔틀버스 시간</Text>
                  <Text style={{ marginTop: 1, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>&장소 확인</Text>
                </View>
              </View>
              <Divider style={{ width: '100%', height: 1, marginTop: 47.5, backgroundColor: '#dedede' }} />

              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 50.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>근무원칙</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-유니폼 착용</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-집합 시간 준수</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-업무 내용 파악</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-교대 시 특이사항이나 전달 내용 인수인계</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-문의 사항, 응급 상황 시 담당자에 즉시 통보</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-휴대폰 매너모드/무음</Text>

              <Divider style={{ width: '100%', height: 1, marginTop: 50.5, backgroundColor: '#dedede' }} />

              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 50.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>숙지사항</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-대회일정</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-셔틀버스 시간표</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-편의 시설 위치:홀, 화장실, 주차장, 승하차장, 클럽하우스, 의료서비스 </Text>
              <View style={{marginLeft: 21, marginRight: 21,marginTop: 2, flexDirection:'row'}}>
              <Text style={{ fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>* 상세 내용은 [업무안내] 메뉴 참고 부탁드립니다. </Text>
             
              </View>
              <Text style={{ marginLeft: 21, marginRight: 21,marginTop: 2,fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>참고 부탁드립니다.</Text>
              <Divider style={{ width: '100%', height: 1, marginTop: 50.5, backgroundColor: '#dedede' }} />
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 50.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>악천 및 일사병 환자 발생 시</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>- 폭우나 낙뢰 등 자연재해, 일사병 환자 발생 시 임시 대피소로 안내</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>- 1~4라운드 / 9:00~17:00</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>- A대피소: 3~17번 홀 사이에 위치 (3,4,16,17번 홀 주변 갤러리 대피)</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>- B대피소: 7번 홀에 위치 (5,6,7,8번 홀 주변 갤러리 대피)</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>- C대피소: 15번 홀에 위치 (15번 홀 주변 갤러리 대피)</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>- D대피소: 11~14번 홀 사이에 위치 (11,12,13,14번 홀 주변 갤러리 대피)</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>- 클럽하우스 (1,2,9,10,18번 홀 주변 갤러리 대피) </Text>

              <Divider style={{ width: '100%', height: 1, marginTop: 50.5, backgroundColor: '#dedede' }} />
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 50.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>응급상활 발생 시 행동요령</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>1) 주변 확인 (추가 위험 발생 가능성 파악)</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>2) 응급 환자 자세 확인 (환자를 이동시키지 않고, 환자가 편안한 상태/자세인지 확인)</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>3) 비상 연락망 순으로 연락 (연락하는 사람의 이름, 정확한 현 위치, 환자의 부상 부위 설명)</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>4) 임시 대피소 위치 안내</Text>

              <Divider style={{ width: '100%', height: 1, marginTop: 50.5, backgroundColor: '#dedede' }} />
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 50.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>흡연 공지</Text>
              <Text style={{ marginBottom: 40, marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>-모든 흡연자는 지정된 흡연 장소에서만 흡연 가능{"\n"}
-흡연 장소를 깨끗하게 사용해야 합니다.{"\n"}
-흡연 장소의 바닥에 담배꽁초가 발견되거나
  침을 뱉는 등 청결하지 않다고 판단될 경우,
  흡연 장소를 폐쇄합니다.</Text>
            </ScrollView>
          </Modal>

          {/* 갤러리 이벤트 */}
          <Modal style={{marginTop:136.9,}} isVisible={this.state.isModalVisible2}
              onBackdropPress={() => this.setState({ isModalVisible2: false })}>
              <ScrollView style={{borderRadius:20 }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/images/edupage3.png')} resizeMode={'cover'}/>
      
            <TouchableOpacity onPress={() => this.setState({ isModalVisible2: false })}
                            style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
            </TouchableOpacity>
              </View>
              </ScrollView>
            </Modal>

          {/* 보험 모달창*/}
          <Modal style={{ marginTop: 136.9 }} isVisible={this.state.isModalVisible3}
            onBackdropPress={() => this.setState({ isModalVisible3: false })}>
            <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.setState({ isModalVisible3: false })}
                  style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
              </View>

              <ImageBackground style={{ width: '100%', height: 80 ,backgroundColor:'rgb(250,180,0)'}} >
                <Text style={{ marginTop: 20, marginLeft: 21, marginRight: 21, fontFamily: 'GodoM', fontSize: 32, fontWeight: 'bold', color: '#ffffff' }}>보험</Text>
              </ImageBackground>
              <Text style={{ marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>여행자 보험</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>(대회 전 개인정보수집에 동의한 자에 한함)</Text>

              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>근무 중 발생할 수 있는 사고로부터 진행요원을 보호함으로써, 진행요원들이 안전한 환경 속에서 근무를 할 수 있도록 돕기 위한 보험입니다.</Text>

              <Divider style={{ width: '100%', height: 1, marginTop: 47.5, backgroundColor: '#dedede' }} />

              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 50.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>보험 절차</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>사고 발생–‘사건사고 보고’ 작성(복사본 1부 보관)-자원봉사센터 제출–보험사 접수–보험금 지급</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>대회 기간 중 보험 처리{"\n"}사고 발생 직후 현장 담당자에 즉시 통보할 것 </Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>‘사건사고 보고’ (진행요원 복사본 1부 필수 보관) 작성 후 담당자에 제출하여 보험사 접수되면,{'\n'}진행요원에 보험금 지급</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>대회 종료 후 보험 처리{"\n"}사고 발생 직후 현장 담당자에 즉시 통보할 것</Text>
              <Text style={{ marginBottom:40 ,marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>작성된 ‘사건사고 보고’ 복사본 1부 지참 후 제출</Text>
              {/* <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 35, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>보장 내용 및 범위</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>자원봉사활동 중 상해로 발생한 병원비 2천만원 한도로 보상</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>자원봉사활동 중 다른 사람의 신체/재산에 손해를 입힌 경우 법률상 배상책임 보상</Text>
              <Text style={{ marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>자원봉사활동 중 후유 장해 발생한 경우 장해 정도에 따라 3~100% 보상</Text>
              <Text style={{ marginBottom: 40, marginLeft: 21, marginRight: 21, marginTop: 2, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f' }}>사망한 경우 보험가입금액 전액 보상</Text> */}
            </ScrollView>
          </Modal>

         

          <TouchableOpacity onPress={() => {
            if (this.state.user._data.type == '보안요원') {
              this.setState({isModalVisible0_sup:true})
            }else{
              this.setState({isModalVisible0:true})
            }
          }}
            style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
              <ImageBackground style={{ marginTop: 20, marginBottom: 12, marginRight: 60, width: WIDTH * 0.85, height: 90 }} source={require('../assets/images/eduicona1.png')}>
                <Text style={{ marginLeft: 80, marginTop: 28.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>기본사항</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.state.Entrancevisible ? this.setState({Entrancevisible:false}) : this.setState({Entrancevisible:true})}
            style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ marginLeft: 43, marginTop: 24.5, marginBottom: 23.5 }}>
                <ImageBackground style={{ marginTop: 0, marginRight: 64, width: WIDTH * 0.85, height: 90 }} source={require('../assets/images/eduicona2.png')}>
                  <Text style={{ marginLeft: 60, marginTop: 30.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>출입 정책</Text>
                </ImageBackground>
              </View>
            </View>
          </TouchableOpacity>
          {
            this.state.Entrancevisible ?
            <Entrance /> : null
          }
          {
            this.state.widthcheck ?
            <TouchableOpacity onPress={() => this.setState({ isModalVisible2: true })}
            style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ marginLeft: 70, marginTop: 27.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>갤러리 이벤트</Text>
                  <Image style={{ marginLeft: 80, marginBottom: 0, marginRight: 55, width: WIDTH * 0.1, height: 27}} source={require('../assets/images/eduicon01.png')} />

                </View>
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => this.setState({ isModalVisible2: true })}
            style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ marginLeft: 70, marginTop: 27.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>갤러리 이벤트</Text>
                  <Image style={{ marginLeft: 60, marginBottom: 0, marginRight: 55, width: WIDTH * 0.1, height: 27}} source={require('../assets/images/eduicon01.png')} />

                </View>
          </TouchableOpacity>
          }
          
          {
            this.state.widthcheck ?
              <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/embed/_LZktdKKUGY?autoplay=1')}
              style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
                <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ marginLeft: 70, marginTop: 27.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>교육영상</Text>
                  <Image style={{ marginLeft: 130, marginBottom: 0, marginRight: 55, width: WIDTH * 0.1, height: 35 }} source={require('../assets/images/eduicona3_1.png')} />

                </View>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/embed/_LZktdKKUGY?autoplay=1')}
              style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
                <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ marginLeft: 70, marginTop: 27.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>교육영상</Text>
                  <Image style={{ marginLeft: 105, marginBottom: 0, marginRight: 55, width: WIDTH * 0.1, height: 30 }} source={require('../assets/images/eduicona3_1.png')} />

                </View>
              </TouchableOpacity>
          }


          <TouchableOpacity onPress={() => this.setState({ isModalVisible3: true })}
            style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
              <ImageBackground style={{ marginBottom: 12, marginRight: 60, width: WIDTH * 0.85, height: 90 }} source={require('../assets/images/eduicona4.png')}>
                <Text style={{ marginLeft: 85, marginTop: 36.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>보험</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default EduprogramScreen