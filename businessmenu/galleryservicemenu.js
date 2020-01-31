import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import { Divider } from 'react-native-elements';
const WIDTH = Dimensions.get('window').width;

class galleryservicemenu extends React.Component {
  state = {
    gallerymenu0: false, //티켓판매및교환처
    gallerymenu0_1: false,
    gallerymenu1: false, //티켓검표
    gallerymenu2: false, //안내데스크
    gallerymenu3: false, //갤러리플라 지원
    gallerymenu4: false,
    gallerymenu5: false,
  }
  render() {
    return (
      <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        {this.state.gallerymenu0 ? 
        
        <Modal style={{ marginTop: 136.9 }} isVisible={this.state.gallerymenu0}
          onBackdropPress={() => this.setState({ gallerymenu0: false })}>
          <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ gallerymenu0: false })}
                style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ImageBackground source={require('../assets/images/golf.png')}
                style={{ width: '100%', height: 150 }}>
                <Text style={{ marginTop: 100, marginLeft: 22.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 30, fontWeight: 'bold', color: '#ffffff' }}>티켓 교환&기념품 지급</Text>
              </ImageBackground>
              <TouchableOpacity 
                style={{ position: 'absolute', top: 165, left: 180, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#cbd0d3' size={18} name='left' />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({ gallerymenu0: false, gallerymenu0_1: true })}
                style={{ position: 'absolute', top: 165, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='black' size={18} name='right' />
              </TouchableOpacity>
              <Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>배치</Text>
              <Text style={{
                alignSelf: 'flex-start', marginBottom: 25, marginTop: 15, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>
                ① 유료 판매, 초대권 교환, 윌콜 운영{'\n'}
                ② 기념품 지급처{'\n'}
                ③ 티켓 검표 및 스크래치 복권</Text>

              <Text style={{ alignSelf: 'flex-start', marginTop: 20, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>업무 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginBottom: 25, marginTop: 15, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>
                - 근무 위치 : 갤러리 플라자 내{'\n'}
                - 입장권 판매, 입장권/초대권 교환 및 검표,{'\n'}
                출입비표 확인, 해당 기념품 확인 후 지급{'\n'}
                - 대회 정보, 갤러리 편의시설, 갤러리 주차장,{'\n'}
                갤러리 이벤트, 셔틀버스 관련 안내{'\n'}
                - 갤러리 문의에 응대{'\n'}</Text>
              <Divider style={{ width: '100%', height: 1, marginTop: 8, marginLeft: 0, backgroundColor: '#dedede' }} />
              <Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>세부 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>
                ㄱ.입장권/초대권/출입비표 정보 숙지{'\n'}
                1)입장권{'\n'}
              </Text>
              <Image source={require('../assets/images/entrance_p1.png')} style={{ resizeMode: 'contain' }} />
              
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>
                   ① 일일 입장권 10,000원 (라운드별 금액){'\n'}
   ② 할인 내용{'\n'}
     # 인터넷 예매{'\n'}
     - (현금/타사카드) 10% 할인 / 9,000원{'\n'}
     - (KB국민카드) 30% 할인 / 7,000원{'\n'}
    # 현장 구매{'\n'}
    - (현금/타사카드) 10,000원{'\n'}
    - (KB국민카드) 20% 할인 / 8,000원{'\n'}
    - (LiiV앱 & KB국민카드) 30% 할인 / 7,000원{'\n'}
    # 무료 입장{'\n'}
    - 초등학생 이하 무료 입장{'\n'}
    - 판매 시간 종료 후 무료 입장 {'\n'}
       1~2라운드 15시 이후 / 3~4라운드 14시 이후{'\n'}{'\n'}
                2)초대권{'\n'}
              </Text>
              <Image source={require('../assets/images/entrance_p2.png')} style={{ resizeMode: 'contain' }} />
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25, marginBottom: 30,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>
                ① 여주 프리미엄 아울렛 결제 영수증 확인{'\n'}
                (2019년 5월 1일~26일 결제 영수증){'\n'}
                ② LiiV Mate 앱 →  혜택 → 쿠폰 →{'\n'}
                'KB금융 리브챔피언십 갤러리 입장권' → {'\n'}
                발급하기 → 쿠폰 번호 체크 후 초대권 교환  {'\n'}
              </Text>
            </View>
          </ScrollView>
        </Modal>
        :null
        }

        {/*모달창  티켓교환 기념품 지급-1*/}
        {
          this.state.gallerymenu0_1 ?
          <Modal style={{ marginTop: 136.9 }} isVisible={this.state.gallerymenu0_1}
          onBackdropPress={() => this.setState({ gallerymenu0_1: false })}>
          <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ gallerymenu0_1: false })}
                style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ImageBackground source={require('../assets/images/golf.png')}
                style={{ width: '100%', height: 150 }}>
                <Text style={{ marginTop: 100, marginLeft: 22.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 30, fontWeight: 'bold', color: '#ffffff' }}>티켓 교환&기념품 지급</Text>
              </ImageBackground>
              <TouchableOpacity onPress={() => this.setState({ gallerymenu0_1: false, gallerymenu0: true })}
                style={{ position: 'absolute', top: 165, left: 180, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='black' size={18} name='left' />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ position: 'absolute', top: 165, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#cbd0d3' size={18} name='right' />
              </TouchableOpacity>
              <Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>세부 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>
                3) 현장 수령 티켓 확인{'\n'}
- 대회 전 인터넷으로 예매한 경우, 현장 수령 가능{'\n'}
- 예매자 확인 시 주문자명 혹은 수령자 신분증 확인{'\n'}
{'\n'}
4) 출입비표{'\n'}
- 총 7종류 (VIP, SPONSOR, OFFICIAL, PRESS,
   JTBC GOLF, GUEST, STAFF){'\n'}
- 해당 출입비표 목걸이를 패용한 자는 출입 가능</Text>
<Image source={require('../assets/images/ticket_.png')} style={{ resizeMode: 'contain' }} />
              <Text style={{
                alignSelf: 'flex-start', marginBottom: 25, marginTop: 15, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>
                ㄴ. 검표{'\n'}
- 입장권/초대권의 티켓 하단을 절개한 뒤{'\n'}
   경품함에 제출한다. (행운권 자동 응모){'\n'}
- 행운권 당첨 시 티켓 상단 소지가 필수임을{'\n'}
   안내한다. (경품 수령 시 티켓 상단 확인){'\n'}
- 각 이벤트는 교육프로그램 메뉴 [대회운영] 참고{'\n'}
{'\n'}
- 티켓 검표와 동시에 전달할 것{'\n'}
 ① 라운드별 지급 품목{'\n'}
   - 공통 지급: 생수, 조 편성표, 팜플렛{'\n'}
   - 선착순 지급: 모자, 우산 (동시 지급 X){'\n'}
                         소진 시 안내 필수{'\n'}
   - 1,2라운드(목,금): 모자{'\n'}
   - 3라운드(토): 우산 (선착순 1,000개 /{'\n'}
                                  소진 시 모자로 변경){'\n'}
   - 4라운드(일): 우산 (선착순 3,000개 /{'\n'}
                                  소진 시 모자로 변경){'\n'}
{'\n'}
 ② 검표 시 행운권 자동 응모{'\n'}
     (경품: 코지마 안마의자, 핑 아이언 세트 등){'\n'}
  - 이벤트 관련 경품 수량 수시 확인{'\n'}
  - 소진 시 안내 필수{'\n'}
  - 제세공과금 : 당첨자 부담{'\n'}
{'\n'}
ㄷ. 안내물 비치{'\n'}
- 금일 라운드의 조 편성표+회 관련 안내물 비치{'\n'}
- 비치되는 각 안내물의 수량이 부족할 경우, 사전에
   파악 후 담당자에 보고하여 이를 대비한다.{'\n'}
{'\n'}
ㄹ. 갤러리 편의 시설 위치 안내{'\n'}
- [대회 안내]-[대회 지도] 페이지 참고{'\n'}
- 갤러리 플라자, 화장실, 셔틀버스 승/하차장, 각 홀,
   응급처치실 등의 위치 안내{'\n'}
{'\n'}
ㅁ. 갤러리 주차장 장소 안내{'\n'}
  ① 1~4라운드 : 장호원 농산물 유통센터{'\n'}
 (경기도 이천시 장호원읍 서동대로 8759번길 117){'\n'}
  ② 3,4라운드 추가 운영 : 극동대학교{'\n'}
 (충청북도 음성군 감곡면 대학길 76-32){'\n'}
{'\n'}
ㅂ. 셔틀버스 이용 안내{'\n'}
  ① 운행노선: 갤러리주차장 ↔ 대회장 {'\n'}
  ② 운행간격: 1~2라운드 20분 간격
                      3~4라운드 10분 간격{'\n'}
  ③ 운행 일정{'\n'}
- 1,2라운드: 06:00~경기 종료 1시간 후 {'\n'}
- 3,4라운드: 경기 시작 1시간 전~종료 1시간 후{'\n'}
</Text>
            </View>
          </ScrollView>
        </Modal> : null
        }


        {/*모달창  대회 이벤트 부스*/}
        <Modal style={{ marginTop: 136.9 }} isVisible={this.state.gallerymenu1}
          onBackdropPress={() => this.setState({ gallerymenu1: false })}>
          <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ gallerymenu1: false })}
                style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ImageBackground source={require('../assets/images/golf.png')}
                style={{ width: '100%', height: 150 }}>
                <Text style={{ marginTop: 100, marginLeft: 22.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 30, fontWeight: 'bold', color: '#ffffff' }}>대회 이벤트 부스</Text>
              </ImageBackground>
              
              <Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>업무 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>
               - 근무 위치 : 갤러리 플라자 내 이벤트 부스{'\n'}
- 이벤트 부스 지원 업무{'\n'}
- 대회 정보, 갤러리 편의시설, 갤러리 주차장,{'\n'}
   갤러리 이벤트, 셔틀버스 관련 안내{'\n'}
- 갤러리 문의에 응대</Text>
<Divider style={{ width: '100%', height: 1, marginTop: 35, marginLeft: 0, backgroundColor: '#dedede' }} />
<Text style={{ alignSelf: 'flex-start', marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>세부 내용</Text>
              <Text style={{
                alignSelf: 'flex-start', marginTop: 15, lineHeight: 25,marginBottom:30,
                marginRight: 22.5, marginLeft: 29.5, fontFamily: 'GodoM', fontSize: 15, fontWeight: '300', color: '#3f414f'
              }}>ㄱ. 이벤트 부스{'\n'}
              - 담당하게 될 갤러리 플라자 내 이벤트 부스를
                 확인하고, 상세 업무를 전달받는다.{'\n'}
              - 이벤트 내용 숙지 및 참여 유도{'\n'}
              - 참여 대기줄이 길어질 경우, 갤러리 안전과
                 원활한 운영을 위하여 질서 유지를 안내한다.{'\n'}
                 {'\n'}
                ① LiiV 포토존{'\n'}
                 - 일정: 1~4라운드 / 9:00~17:00{'\n'}
                 - 리브 탈 인형: 인형탈 착용하여 갤러리 관심을
                                        유도하고 포즈를 다양하게 취한다.
                                        인형 내부 온도가 매우 높으므로,
                                        물을 자주 마셔 탈진을 예방한다.{'\n'}
                                        {'\n'}
                ② 최첨단 골프시뮬레이터 Q.E.D{'\n'}
                  - 리브 가입자 400만 돌파 기념으로 진행되는
                     스크린 골프 체험 이벤트{'\n'}
                  - 체험 이벤트: 1~4라운드 / 9:00~17:00{'\n'}
                  - 어프로치 이벤트: 25m 어프로치 샷 후
                                              홀컵 5m 내 근접 시 상품제공{'\n'}
                                        3~4라운드 / 11:00 선착순 30명
                                                         / 14:00 선착순 30명{'\n'}
                                                         {'\n'}
                ③ 어린이 사인존{'\n'}
                  - 일정: 3~4라운드 / 9:00~17:00{'\n'}
                  - 장소: 연습그린{'\n'}
                  - 주요 선수 경기 일정에 따라 유동적으로 진행{'\n'}
                  - 어린이 갤러리가 사인 요청 시 사인 유도할 것{'\n'}
                  - 여분의 네임펜 상시 준비{'\n'}
                  {'\n'}
                ④ 팬 사인회{'\n'}
                  - 일정: 3~4라운드 / 13:30~14:30{'\n'}
                  - 장소: 연습그린{'\n'}
                  - 주요 선수 경기 일정에 따라 유동적으로 진행{'\n'}
                  - 싸인회 안내 및 동선 관리를 통해 안전 유지{'\n'}
                  - 싸인용 모자, 네임펜, 선수용 음료 준비{'\n'}
                  {'\n'}
              ㄴ. 갤러리 편의 시설 위치 안내{'\n'}
              - [대회 안내]-[대회 지도] 페이지 참고{'\n'}
              - 갤러리 플라자, 화장실, 셔틀버스 승/하차장, 각 홀,
                 응급처치실 등의 위치 안내{'\n'}
                 {'\n'}
              ㄷ. 갤러리 주차장 장소 안내{'\n'}
                ① 1~4라운드 : 장호원 농산물 유통센터{'\n'}
               (경기도 이천시 장호원읍 서동대로 8759번길 117){'\n'}
                ② 3,4라운드 추가 운영 : 극동대학교{'\n'}
               (충청북도 음성군 감곡면 대학길 76-32){'\n'}
               {'\n'}
              ㄹ. 셔틀버스 이용 안내{'\n'}
                ① 운행노선: 갤러리주차장 ↔ 대회장 {'\n'}
                ② 운행간격: 1~2라운드 20분 간격
                                    3~4라운드 10분 간격{'\n'}
                ③ 운행 일정{'\n'}
              - 1,2라운드: 06:00~경기 종료 1시간 후 {'\n'}
              - 3,4라운드: 경기 시작 1시간 전~종료 1시간 후{'\n'}
              </Text>
            </View>
          </ScrollView>
        </Modal>

        {/*모달창  갤러리 쉼터/스템프 투어*/}
        <Modal style={{ marginTop: 136.9, }} isVisible={this.state.gallerymenu2}
          onBackdropPress={() => this.setState({ gallerymenu2: false })}>
          <ScrollView style={{ borderRadius: 20 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../assets/images/gallery3.png')} resizeMode={'contain'} />

              <TouchableOpacity onPress={() => this.setState({ gallerymenu2: false })}
                style={{ position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>

        {/*모달창  전동셔틀버스탑승안내*/}
        <Modal style={{ marginTop: 136.9, }} isVisible={this.state.gallerymenu3}
          onBackdropPress={() => this.setState({ gallerymenu3: false })}>
          <ScrollView style={{ borderRadius: 20 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../assets/images/gallery4.png')} resizeMode={'contain'} />

              <TouchableOpacity onPress={() => this.setState({ gallerymenu3: false })}
                style={{ position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>

        {/*모달창  패밀리아 일랜드*/}
        <Modal style={{ marginTop: 136.9, }} isVisible={this.state.gallerymenu4}
          onBackdropPress={() => this.setState({ gallerymenu4: false })}>
          <ScrollView style={{ borderRadius: 20 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../assets/images/gallery5.png')} resizeMode={'contain'} />

              <TouchableOpacity onPress={() => this.setState({ gallerymenu4: false })}
                style={{ position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>

        {/*모달창  플레이 그라운드*/}
        <Modal style={{ marginTop: 136.9, }} isVisible={this.state.gallerymenu5}
          onBackdropPress={() => this.setState({ gallerymenu5: false })}>
          <ScrollView style={{ borderRadius: 20 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../assets/images/gallery6.png')} resizeMode={'contain'} />

              <TouchableOpacity onPress={() => this.setState({ gallerymenu5: false })}
                style={{ position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>

        <View style={{
          flexDirection: 'row', flexWrap: 'wrap',
          justifyContent: 'space-evenly'
        }}>
          <TouchableOpacity onPress={() => this.setState({ gallerymenu0: true })}
            style={{ justifyContent: 'center', backgroundColor: '#eaeaee', borderRadius: 5, width: WIDTH * 0.35, height: 28, marginVertical: 10, marginRight: 20 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 12, fontWeight: 'bold', color: '#200d14' }}>티켓 교환&기념품 지급</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({ gallerymenu1: true })}
            style={{ justifyContent: 'center', backgroundColor: '#eaeaee', borderRadius: 5, width: WIDTH * 0.35, height: 28, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 12, fontWeight: 'bold', color: '#200d14' }}>대회 이벤트 부스</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: 'row', flexWrap: 'wrap',
          justifyContent: 'space-evenly'
        }}>
          <TouchableOpacity onPress={() => this.setState({ gallerymenu2: true })}
            style={{ justifyContent: 'center', backgroundColor: '#eaeaee', borderRadius: 5, width: WIDTH * 0.35, height: 28, marginVertical: 10, marginRight: 20 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 12, fontWeight: 'bold', color: '#200d14' }}>갤러리 쉼터/스탬프 투어</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({ gallerymenu3: true })}
            style={{ justifyContent: 'center', backgroundColor: '#eaeaee', borderRadius: 5, width: WIDTH * 0.35, height: 28, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 12, fontWeight: 'bold', color: '#200d14' }}>전동 셔틀버스 탑승 안내</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: 'row', flexWrap: 'wrap',
          justifyContent: 'space-evenly'
        }}>
          <TouchableOpacity onPress={() => this.setState({ gallerymenu4: true })}
            style={{ justifyContent: 'center', backgroundColor: '#eaeaee', borderRadius: 5, width: WIDTH * 0.35, height: 28, marginVertical: 10, marginRight: 20 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 12, fontWeight: 'bold', color: '#200d14' }}>LiiV 패밀리 아일랜드</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({ gallerymenu5: true })}
            style={{ justifyContent: 'center', backgroundColor: '#eaeaee', borderRadius: 5, width: WIDTH * 0.35, height: 28, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 12, fontWeight: 'bold', color: '#200d14' }}>LiiV 플레이 그라운드</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}


export default galleryservicemenu;