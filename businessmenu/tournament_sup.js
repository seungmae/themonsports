import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Image,ScrollView, Dimensions,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import { Divider } from 'react-native-elements';
const WIDTH = Dimensions.get('window').width;
class tournament extends React.Component {
    state = {
        gamesupportmenu1: false, //코스 식음 관리
        gamesupportmenu2: false, //대회홍보물 관리
        gamesupportmenu3: false, //물품 관리
        gamesupportmenu4: false, //드라이빙 레인지 운영
      }
    render() {
        return (
            <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}>
                {/*모달창  대회 이벤트 부스*/}
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
                <Text style={{ marginTop: 100, marginLeft: 22.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 30, fontWeight: 'bold', color: '#ffffff' }}>18H VIP 스탠드 통제</Text>
              </ImageBackground>
              
              <Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>업무 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>{'\n'}
- 근무 위치 : 18H VIP 스탠드 앞{'\n'}
- 갤러리 통제 및 시설 안전과 VIP 안내{'\n'}
- 출입 가능 비표 확인{'\n'}
- 대회 정보, 갤러리 편의시설, 갤러리 주차장,
   셔틀버스 관련 안내{'\n'}
- 관람객 문의에 응대</Text>
<Divider style={{ width: '100%', height: 1, marginTop: 35, marginLeft: 0, backgroundColor: '#dedede' }} />
<Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>세부 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,marginBottom:1,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>{'\n'}ㄱ. VIP 스탠드{'\n'}
              - 18번 홀에 위치한 VIP 스탠드로,
                 VIP 스탠드 입구에 위치하여 근무한다.{'\n'}
              - VIP 휴게 및 관람을 목적으로 하는 장소로,
                 출입에 제한이 있다.{'\n'}
              - 스태프(관계자, 도우미, 진행요원) 출입 가능{'\n'}
              {'\n'}
              ㄴ. 출입비표 확인{'\n'}
              1) 출입 가능자 = OFFICIAL, VIP 출입비표 소지자 
                                       (+ 선수 및 캐디, 동행자 포함){'\n'}
              2) 출입 가능 코드 = VS {'\n'}
              3) 출입 가능 비표{'\n'}
              </Text>
              <Image source={require('../assets/images/ticket_sup1.png')} style={{ resizeMode: 'contain' }} />
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,marginBottom:30,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>4) 확인 사항{'\n'}
              - 해당 출입비표 목걸이를 패용한 자는 출입 가능{'\n'}
              - 단, 선수/캐디는 출입비표를 패용하지 않으나,
                 출입은 가능한 점을 유념한다.{'\n'}
              - 출입비표 미소지자는 비표 패용을 요청드린 후
                 확인한다.{'\n'}
              - 출입비표 소지자가 비표 없는 동행자를 출입시킬
                 때, 소지자의 신분(소속) 확인을 요청드리거나
                 무전기를 통한 체크 후 출입을 허용한다. {'\n'}
                 {'\n'}
              ㄷ. 통제 내용{'\n'}
              1) 갤러리{'\n'}
              - VIP 스탠드는 출입 가능자 외 이용 제한이 있어
                 일반 갤러리의 출입 통제가 필요한 곳이다.{'\n'}
              - 대회 관련 안내나 갤러리 편의시설의 위치 등
                 갤러리 문의에 대한 응대도 필요하다.{'\n'}
                 {'\n'}
              2) 안전{'\n'}
              - VIP출입 동선 및 시설의 안전을 우선으로 한다.{'\n'}
              - 선수 이동 시 갤러리 집중 가능성이 있으므로,
                 안전을 위해 이동 동선을 사전에 확보한다.{'\n'}
              </Text>
            </View>
          </ScrollView>
        </Modal>

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
                <Text style={{ marginTop: 100, marginLeft: 10.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 30, fontWeight: 'bold', color: '#ffffff' }}>클럽하우스 정/후문 통제</Text>
              </ImageBackground>
              
              <Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>업무 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>{'\n'}
- 근무 위치 : 클럽하우스 정문과 후문{'\n'}
- 선수 전용 공간인 클럽하우스의 출입 관리{'\n'}
- 출입 가능 비표 확인{'\n'}
- 대회 정보, 갤러리 편의시설, 갤러리 주차장,
   셔틀버스 관련 안내{'\n'}
- 관람객 문의에 응대{'\n'}</Text>
<Divider style={{ width: '100%', height: 1, marginTop: 35, marginLeft: 0, backgroundColor: '#dedede' }} />
<Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>세부 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,marginBottom:1,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>{'\n'}ㄱ. 클럽하우스 정/후문{'\n'}
              - 클럽하우스는 선수 전용 공간으로,
                 출입비표의 철저한 확인이 필요하다.{'\n'}
                 {'\n'}
              ㄴ. 출입비표 확인{'\n'}
              1) 출입 가능자 = 출입비표 소지자
                                       (+ 선수 및 캐디, 동행자 포함){'\n'}
              2) 출입 가능 코드 = CH {'\n'}
              3) 출입 가능 비표{'\n'}
              </Text>
              <Image source={require('../assets/images/ticket_sup2.png')} style={{ resizeMode: 'contain' }} />
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,marginBottom:30,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>4) 확인 사항{'\n'}
              - 해당 출입비표 목걸이를 패용한 자는 출입 가능{'\n'}
              - 단, 선수/캐디는 출입비표를 패용하지 않으나,
                 출입은 가능한 점을 유념한다.{'\n'}
              - 출입비표 미소지자는 비표 패용을 요청드린 후
                 확인한다.{'\n'}
              - 출입비표 소지자가 비표 없는 동행자를 출입시킬
                 때, 소지자의 신분(소속) 확인을 요청드리거나
                 무전기를 통한 체크 후 출입을 허용한다. {'\n'}
                 {'\n'}
              ㄷ. 통제 내용{'\n'}
              1) 갤러리{'\n'}
              - 클럽하우스는 출입 가능자 외 이용 제한이 있어
                 일반 갤러리의 출입 통제가 필요한 곳이다.{'\n'}
              - 대회 관련 안내나 갤러리 편의시설의 위치 등
                 갤러리 문의에 대한 응대도 필요하다.{'\n'}
                 {'\n'}
              2) 안전{'\n'}
              - 클럽하우스 출입 관계자 및 시설의 안전을
                 우선으로 한다.{'\n'}
              - 선수 이동 시 갤러리 집중 가능성이 있으므로,
                 안전을 위해 이동 동선을 사전에 확보한다.{'\n'}
              - 선수 이동 시 수행경호가 필요할 수 있다.{'\n'}
              
              </Text>
            </View>
          </ScrollView>
        </Modal>
                <View style={{flexDirection:'row',
                    justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.setState({ gamesupportmenu1: true })}
                    style={{marginLeft:20,marginRight:19,justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.37, height:28,marginVertical:10}}>
                    <View style={{width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>18H VIP 스탠드 통제</Text>
                    </View>
                    </TouchableOpacity>   

                    <TouchableOpacity onPress={() => this.setState({ gamesupportmenu2: true })}
                    style={{marginRight:19,justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.37, height:28,marginVertical:10}}>
                    <View style={{width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>클럽하우스 정/후문 통제</Text>
                    </View>
                    </TouchableOpacity>   

                </View>
            </View>
            
        );
    }
    
  }

  export default tournament;