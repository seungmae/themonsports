import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Dimensions,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import { Divider } from 'react-native-elements';
const WIDTH = Dimensions.get('window').width;
class gallery_sup extends React.Component {
    state = {
        gamesupportmenu1: false, //갤러리 플라자 버스진입 안ㅇ전관리
        gamesupportmenu2: false, //1회차,2회차
        gamesupportmenu3: false, //중단 주차구역
        gamesupportmenu4: false, //차량진입
        gamesupportmenu5: false, //골프장 지하구역
    }
    render() {
        return (
            <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}>
                

                {/*모달창  1회차*/}
                <Modal style={{ marginTop: 136.9 }} isVisible={this.state.gamesupportmenu1}
          onBackdropPress={() => this.setState({ gamesupportmenu1: false })}>
          <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ gamesupportmenu1: false })}
                style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ImageBackground source={require('../assets/images/sup_img.png')}
                style={{ width: '100%', height: 150 }}>
                <Text style={{ marginTop: 100, marginLeft: 10.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 30, fontWeight: 'bold', color: '#ffffff' }}>1회차</Text>
              </ImageBackground>
              
              <Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>업무 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>{'\n'}
- 근무 위치 : 대회장 초입 도로 입구 (1회차){'\n'}
- 차량 진입에 대한 교통 정리 및 안전 확인{'\n'}
- 차량비표 확인{'\n'}</Text>
<Divider style={{ width: '100%', height: 1, marginTop: 35, marginLeft: 0, backgroundColor: '#dedede' }} />
<Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>세부 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,marginBottom:1,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>{'\n'}ㄱ. 1회차{'\n'}
              - 차량비표 확인 후 차량 입차 허용{'\n'}
              - 일반 갤러리 차량은 갤러리주차장으로 회차 안내{'\n'}
              - 차량비표 없는 업무 차량은 대회본부 확인 후
                 입차 가능 여부 확인{'\n'}
              - 미디어 차량은
                 명함 확인 후 소속/이름 기재하여 입차 허용{'\n'}
              - 갤러리 및 도보 이동 통제 관리{'\n'}
              {'\n'}
              ㄴ. 차량비표 확인{'\n'}
              1) 출입 가능 = 차량비표 부착 및 소지자 {'\n'}
              2) 출입 가능 비표{'\n'}
              </Text>
              <Image source={require('../assets/images/ticket_sup3.png')} style={{ resizeMode: 'contain' }} />
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:30}}>
<Image source={require('../assets/images/ticket_10.png')} style={{ resizeMode: 'contain',marginTop:10 }} />
<Text style={{fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'}}>▶블랙스톤 조기출근자,{'\n'}
                                      주차장 안쪽 공간 이용{'\n'}
                                        (주차비표 포함 {'\n'}
                                              총 40대 이용 예정){'\n'} </Text>
</View>
            </View>
          </ScrollView>
        </Modal>

                {/*모달창  2회차 중단 주차구역*/}
                <Modal style={{ marginTop: 136.9 }} isVisible={this.state.gamesupportmenu2}
          onBackdropPress={() => this.setState({ gamesupportmenu2: false })}>
          <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ gamesupportmenu2: false })}
                style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ImageBackground source={require('../assets/images/sup_img.png')}
                style={{ width: '100%', height: 150 }}>
                <Text style={{ marginTop: 100, marginLeft: 10.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 30, fontWeight: 'bold', color: '#ffffff' }}>2회차 중단 주차장(VIP)</Text>
              </ImageBackground>
              
              <Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>업무 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>{'\n'}
- 근무 위치 : 중단 주차구역-경비초소 입구 (2회차){'\n'}
- 차량 진입에 대한 교통 정리 및 안전 확인{'\n'}
- 차량비표 확인 : VIP, 미디어{'\n'}</Text>
<Divider style={{ width: '100%', height: 1, marginTop: 35, marginLeft: 0, backgroundColor: '#dedede' }} />
<Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>세부 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,marginBottom:1,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>{'\n'}ㄱ. 중단 주차구역{'\n'}
              - VIP 비표 확인 후 차량 입차 허용{'\n'}
              - VIP 차량은 주차 후 VIP 셔틀버스 이용하여 이동{'\n'}
              - 관리동, 주최사, 지하 주차구역 비표 차량은
                 클럽하우스 주차장으로 동선 안내{'\n'}
              - 차량비표 없는 미디어 차량은
                 1회차에서 확인이 된 차량이므로 입차 허용
                 (주차 후 VIP 셔틀버스 이용하여 이동){'\n'}
                 {'\n'}
              ㄴ. 차량비표 확인{'\n'}
              1) 출입 가능 = VIP 차량비표 부착 및 소지자 {'\n'}
              2) 출입 가능 비표{'\n'}
              </Text>
              <Image source={require('../assets/images/ticket_sup4.png')} style={{ resizeMode: 'contain' }} />
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:30}}>
<Image source={require('../assets/images/ticket_10.png')} style={{ resizeMode: 'contain',marginTop:10 }} />
<Text style={{fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'}}>▶블랙스톤 조기출근자,{'\n'}
                                      주차장 안쪽 공간 이용{'\n'}
                                        (주차비표 포함 {'\n'}
                                              총 40대 이용 예정){'\n'} </Text>
</View>
            </View>
          </ScrollView>
        </Modal>

                {/*모달창  골프장 내 차량동선*/}
                <Modal style={{ marginTop: 136.9 }} isVisible={this.state.gamesupportmenu3}
          onBackdropPress={() => this.setState({ gamesupportmenu3: false })}>
          <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ gamesupportmenu3: false })}
                style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ImageBackground source={require('../assets/images/sup_img.png')}
                style={{ width: '100%', height: 150 }}>
                <Text style={{ marginTop: 100, marginLeft: 10.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 30, fontWeight: 'bold', color: '#ffffff' }}>골프장 내 차량동선</Text>
              </ImageBackground>
              
              <Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>업무 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>{'\n'}
- 근무 위치 : 갤러리 플라자 버스 진입로,
                    클럽하우스 회전교차로,
                    지하주차장 출입구{'\n'}
- 버스, 차량 진입에 대한 교통 정리 및 안전 확인{'\n'}
- 스탭 및 갤러리 동선 안내, 보행자 안전 관리{'\n'}
- 차량비표 확인</Text>
<Divider style={{ width: '100%', height: 1, marginTop: 35, marginLeft: 0, backgroundColor: '#dedede' }} />
<Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>세부 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,marginBottom:1,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>{'\n'}차량 교통 안전 관리{'\n'}
              - 셔틀버스, 대회 차량의 교통 안전 관리{'\n'}
              - 차량들의 원활한 교통을 위해 교통 정리 및 안내{'\n'}
              - 스탭 및 관계자 이동 동선 안내, 보행 안전 관리{'\n'}
              - 차량 이동 동선 도로에 주/정차 하지 않도록 관리{'\n'}
              - 지하 주차장, 관리동 주차구역 차량 입차 허용{'\n'}
              - 출차 차량 무전 확인 후 입/출차 안전 관리{'\n'}
              </Text>
              <Image source={require('../assets/images/ticket_sup3.png')} style={{ resizeMode: 'contain' }} />
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:30}}>
<Image source={require('../assets/images/ticket_10.png')} style={{ resizeMode: 'contain',marginTop:10 }} />
<Text style={{fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'}}>▶블랙스톤 조기출근자,{'\n'}
                                      주차장 안쪽 공간 이용{'\n'}
                                        (주차비표 포함 {'\n'}
                                              총 40대 이용 예정){'\n'} </Text>
</View>
            </View>
          </ScrollView>
        </Modal>


                <View style={{flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.setState({ gamesupportmenu1: true })}
                        style={{ justifyContent: 'center', backgroundColor: '#eaeaee', borderRadius: 5, width: WIDTH*0.37, height: 28, marginVertical: 10, marginRight: 20 }}>
                        <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'GodoM', fontSize: 12, fontWeight: 'bold', color: '#200d14' }}>1회차</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ gamesupportmenu2: true })}
                        style={{ justifyContent: 'center', backgroundColor: '#eaeaee', borderRadius: 5, width: WIDTH*0.37, height: 28, marginVertical: 10 }}>
                        <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'GodoM', fontSize: 12, fontWeight: 'bold', color: '#200d14' }}>2회차 중단 지하구역(VIP)</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: 'row', flexWrap: 'wrap',
                    justifyContent: 'space-evenly'
                }}>
                    <TouchableOpacity onPress={() => this.setState({ gamesupportmenu3: true })}
                        style={{ justifyContent: 'center', backgroundColor: '#eaeaee', borderRadius: 5, width: WIDTH*0.37, height: 28, marginVertical: 10, marginRight: 20 }}>
                        <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'GodoM', fontSize: 12, fontWeight: 'bold', color: '#200d14' }}>골프장 내 차량동선</Text>
                        </View>
                    </TouchableOpacity>

                    {/* <TouchableOpacity onPress={() => this.setState({ gamesupportmenu4: true })}
                        style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 5, width: 66, height: 28, marginVertical: 10 }}>
                        <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'GodoM', fontSize: 12, fontWeight: 'bold', color: '#200d14' }}>차량진입</Text>
                        </View>
                    </TouchableOpacity> */}
                </View>

                {/* <View style={{
                    flexDirection: 'row', flexWrap: 'wrap',
                    justifyContent: 'space-evenly'
                }}>
                    <TouchableOpacity onPress={() => this.setState({ gamesupportmenu5: true })}
                        style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 5, width: 126, height: 28, marginVertical: 10, marginRight: 20 }}>
                        <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'GodoM', fontSize: 12, fontWeight: 'bold', color: '#200d14' }}>골프장 지하 주차구역</Text>
                        </View>
                    </TouchableOpacity>
                </View> */}

            </View>

        );
    }

}

export default gallery_sup;