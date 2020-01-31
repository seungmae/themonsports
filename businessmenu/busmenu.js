import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Image,ScrollView, Dimensions,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
const WIDTH = Dimensions.get('window').width;
class busmenu extends React.Component {
    state = {
        busmenu1: false, //셔틀버스 지원
        busmenu2: false, //주차/교통 지원
        busmenu3: false, //셔틀버스 지원
        busmenu4: false, //주차/교통 지원
      }
    render() {
        return (
            <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}>
                {/*모달창  버스승하차*/}
                <Modal style={{marginTop:136.9,}} isVisible={this.state.busmenu1}
                  onBackdropPress={() => this.setState({ busmenu1: false })}>
                  <ScrollView style={{borderRadius:20 }}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/images/buspage0.png')} resizeMode={'cover'}/>
          
                <TouchableOpacity onPress={() => this.setState({ busmenu1: false })}
                                style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
                  </View>
                  </ScrollView>
                </Modal>

                {/*모달창 골프장지상지ㅏㅎ주차장*/}
                <Modal style={{ marginTop: 136.9 }} isVisible={this.state.busmenu2}
          onBackdropPress={() => this.setState({ busmenu2: false })}>
          <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ busmenu2: false })}
                style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ImageBackground source={require('../assets/images/golf.png')}
                style={{ width: '100%', height: 150 }}>
                <Text style={{ marginTop: 100, marginLeft: 10.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 30, fontWeight: 'bold', color: '#ffffff' }}>골프장 지상/지하 주차장</Text>
              </ImageBackground>
              
              <Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>업무 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 25, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>
                - 배치 위치: 지상 - VVIP 및 방송 관계자{'\n'}
                   지하 - 선수 및 대회 관계자{'\n'}
- 주차패스/출입비표 확인 및 안내{'\n'}
- 대회 관련 주차구역 숙지{'\n'}
- 대회 정보, 갤러리 주차장, 셔틀버스 관련 안내{'\n'}
- 갤러리 문의에 응대</Text>

<Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>세부 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 25, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>
                ㄱ. 주차패스/출입비표 확인{'\n'}
  1) 골프장 지상 주차장: VVIP 및 방송 관계자 출입{'\n'}
     - 주차패스{'\n'}</Text>
<Image source={require('../assets/images/ticket_1.png')} style={{ resizeMode: 'contain' }} />
<Text style={{alignSelf: 'flex-start', marginTop: 25, lineHeight: 25,marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>- 출입비표</Text>
              <Image source={require('../assets/images/ticket_2.png')} style={{ resizeMode: 'contain' }} />
              <Text style={{alignSelf: 'flex-start', marginTop: 25, lineHeight: 25,marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>  2) 골프장 지하 주차장: 선수 및 대회 관계자 출입{'\n'}
              - 선수나 캐디는 출입비표가 따로 없으므로,{'\n'}
                 플레이어 카드를 보여주는 경우가 많다.{'\n'}
                   - 주차패스{'\n'}</Text>
                   <Image source={require('../assets/images/ticket_3.png')} style={{ resizeMode: 'contain' }} />
                   <Text style={{alignSelf: 'flex-start', marginTop: 25, lineHeight: 25,marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>- 출입비표</Text>
              <Image source={require('../assets/images/ticket_4.png')} style={{ resizeMode: 'contain' }} />
              <Text style={{alignSelf: 'flex-start',marginBottom:30, marginTop: 25, lineHeight: 25,marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}> ㄴ. 차량 유도, 안내 및 통제{'\n'}
              - 해당 구역에 주차 가능한 지 확인 후 출입 허용{'\n'}
              - 주차패스/출입비표를 확인하기 위해 운전자가 
                 속도를 미리 낮출 수 있도록 주차봉을 위 아래로 
                 천천히 흔들어 신호를 보낸다.{'\n'}
              - 해당하지 않는 자는 지정 주차구역 안내 및 유도{'\n'}
              - 대회 관련 주차구역{'\n'}
                ① 골프장 지상 주차장: VVIP, 방송 관계자{'\n'}
                ② 골프장 지하 주차장: 선수, 대회 관계자{'\n'}
                ③ 중단 주차장: VIP{'\n'}
                ④ 갤러리 주차구역{'\n'}
              - 1~4라운드(목~일) : 장호원 농산물 유통센터{'\n'}
              (경기도 이천시 장호원읍 서동대로 8759번길 117){'\n'}
              - 3,4라운드(토,일) 추가 운영 : 극동대학교{'\n'}
              (충청북도 음성군 감곡면 대학길 76-32)</Text>
            </View>
          </ScrollView>
        </Modal>

                {/*모달창 중단주차장*/}
                <Modal style={{ marginTop: 136.9 }} isVisible={this.state.busmenu3}
          onBackdropPress={() => this.setState({ busmenu3: false })}>
          <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ busmenu3: false })}
                style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ImageBackground source={require('../assets/images/golf.png')}
                style={{ width: '100%', height: 150 }}>
                <Text style={{ marginTop: 100, marginLeft: 30.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 30, fontWeight: 'bold', color: '#ffffff' }}>중단 주차장</Text>
              </ImageBackground>
              
              <Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>업무 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 25, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>
                - 배치 위치: 골프장 중단 주차장{'\n'}
- 주차패스/출입비표 확인 및 안내{'\n'}
- 대회 관련 주차구역 숙지{'\n'}</Text>

<Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>세부 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 25, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>
                ㄱ. 주차패스/출입비표 확인: VIP만 출입 가능  {'\n'}
     - 주차패스{'\n'}</Text>
<Image source={require('../assets/images/ticket_5.png')} style={{ resizeMode: 'contain' }} />
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
<Image source={require('../assets/images/ticket_10.png')} style={{ resizeMode: 'contain',marginTop:10 }} />
<Text style={{fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'}}>▶블랙스톤 조기출근자,{'\n'}
                                      주차장 안쪽 공간 이용{'\n'}
                                        (주차비표 포함 {'\n'}
                                              총 40대 이용 예정){'\n'} </Text>
</View>
<Text style={{alignSelf: 'flex-start', marginTop: 10, lineHeight: 25,marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>- 출입비표</Text>
              <Image source={require('../assets/images/ticket_6.png')} style={{ resizeMode: 'contain' }} />
              <Text style={{marginBottom:30,alignSelf: 'flex-start', marginTop: 25, lineHeight: 25,marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>ㄴ. 차량 유도, 안내 및 통제{'\n'}
              - 해당 구역에 주차 가능한 지 확인 후 출입 허용{'\n'}
              - 주차패스/출입비표를 확인하기 위해 운전자가 
                 속도를 미리 낮출 수 있도록 주차봉을 위 아래로 
                 천천히 흔들어 신호를 보낸다.{'\n'}
              - 해당하지 않는 자는 지정 주차구역 안내 및 유도{'\n'}
              - 대회 관련 주차구역{'\n'}
                ① 골프장 지상 주차장: VVIP, 방송 관계자{'\n'}
                ② 골프장 지하 주차장: 선수, 대회 관계자{'\n'}
                ③ 중단 주차장: VIP{'\n'}
                ④ 갤러리 주차구역{'\n'}
                 - 1~4라운드(목~일) : 장호원 농산물 유통센터{'\n'}
               (경기도 이천시 장호원읍 서동대로 8759번길 117){'\n'}
                 - 3,4라운드(토,일) 추가 운영 : 극동대학교{'\n'}
               (충청북도 음성군 감곡면 대학길 76-32)</Text>
            </View>
          </ScrollView>
        </Modal>

                {/*모달창 갤러리주차장*/}
                <Modal style={{marginTop:136.9,}} isVisible={this.state.busmenu4}
                  onBackdropPress={() => this.setState({ busmenu4: false })}>
                  <ScrollView style={{borderRadius:20 }}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/images/buspage3.png')} resizeMode={'cover'}/>
          
                <TouchableOpacity onPress={() => this.setState({ busmenu4: false })}
                                style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
                  </View>
                  </ScrollView>
                </Modal>
                <View style={{flexDirection:'row',flexWrap: 'wrap',
                    justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.setState({ busmenu1: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10,marginRight:20}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>대회장 버스 승,하차장 안내</Text>
                    </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity onPress={() => this.setState({ busmenu2: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>골프장 지상,지하 주차장</Text>
                    </View>
                    </TouchableOpacity>   
                </View>
                <View style={{flexDirection:'row',flexWrap: 'wrap',
                    justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.setState({ busmenu3: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10,marginRight:20}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>중단 주차장</Text>
                    </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity onPress={() => this.setState({ busmenu4: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>갤러리 주차장</Text>
                    </View>
                    </TouchableOpacity>   
                </View>
            </View>
            
        );
    }
    
  }

  export default busmenu;