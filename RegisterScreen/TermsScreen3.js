import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import { ScrollView } from 'react-native-gesture-handler';
class TermsScreen extends React.Component {

    render() {
      return (
        <View style={{ flex: 1,backgroundColor: 'rgb(242,242,242)',alignItems:'center',justifyContent:'center'}}>
        
        <View style={{ backgroundColor: 'rgb(250,180,0)', height: 90, width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <View style={{ alignItems: 'center', padding: 24, marginTop: 15.9 }}>
            <TouchableOpacity style={{ width: 35.8 }}
              onPress={() => this.props.navigation.goBack()}>
              <Icon color='#ffffff' size={25.5} name='arrowleft' />
            </TouchableOpacity>
          </View>


          <View style={{ justifyContent: 'center', padding: 24, marginTop: 15.9 }}>
            <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#ffffff' }}>근로내용동의서</Text>
          </View>

          <View style={{ padding: 15.6, marginTop: 15.9, flexDirection: 'row', marginHorizontal: 16, alignItems: 'center', justifyContent: 'center' }}>
            {/* <TouchableOpacity style={{marginTop:16,width:35.8, height: 25}}
                  onPress={() => this.props.navigation.toggleDrawer()}>
                  <Image style={{width:22.8, height: 15}} source={require('../assets/images/menu.png')}/>
                  </TouchableOpacity>              */}
          </View>
        </View>
          <ScrollView style={{padding:30}}>
            
          <Text style={{lineHeight:25,marginTop:20}}>
          근 로 내 용 동 의 서{"\n"}{"\n"}
          사용자 ㈜더몬스포츠(이하’갑’이라 함) 와 근로자(이하’을’이라 함) 는 다음과 같이 근로 계약을
체결하고 이를 성실히 이행할 것을 약정한다.{"\n"}
제1조 [계약기간] 본 근로계약의 적용기간은 행사 시작부터 행사 종료 까지로 한다.{"\n"}
제2조 [근무장소 및 업무내용]{"\n"}
          </Text>
          <Image  style={{width:300, height: 130}}source={require('../assets/images/aaa.png')}/>           

<Text style={{lineHeight:25}}>
{"\n"}{"\n"}
제3조 [근로일, 근로시간]{"\n"}
 ①’을’의 근로일 및 근로시간은 시업시간으로부터 종업시간 까지로 하며,{"\n"}
총시간 12시간중 4시간을 휴게시간으로 한다.{"\n"}
② 휴게시간은 자유로이 사용할 수 있다.{"\n"}
{"\n"}{"\n"}
제4조 [연장, 휴일, 야근근로]{"\n"}
 ① ’갑’은 ‘을’에게 근로기준법 등 관계법령상의 한도를 초과하지
아니하는 범위 내에서 업무상 필요한 연장 휴일 야간근로를 명할 수 있으며, ‘을’은 특별한 사정이 없는
한 이에 따라야 한다.{"\n"}
② 제1항에 따라 연장근로가 발생할 경우 근로기준법 제56조에 따라 가산수당을 지급한다.{"\n"}
{"\n"}{"\n"}
제5조 [임금] {"\n"}
① 임금은 주휴수당을 포함하여 일급으로 책정하여 지급한다.{"\n"}
② 지급되는 임금은 입금계산의 편의 등을 고려하여 평균 기본근로, 연장근로, 주휴시간을 기준으로
산정한 임금을 지급한다.{"\n"}
③ 임금은 세전 금액으로 ‘갑’은 ‘을’에게 급여 지급 시 원천세 공제하고 지급한다.{"\n"}
④ 임금은 일에 ‘을’ 명의의 계좌 또는 ‘을’에게 직접 지급한다.{"\n"}
⑤ 지각, 조퇴, 결근 등으로 인하여 근로를 제공하지 못한 경우, 해당 시간만큼의 일급에서 차감하여
지급한다.{"\n"}
{"\n"}{"\n"}
제6조 [행사보험] ① ‘갑’은 행사 진행을 위해 보험에 가입할 수 있다.{"\n"}
② ‘갑’은 ‘을’에 대하여 전항의 보험을 가입할 경우 보험료를 부담한다.{"\n"}
③ ‘을’은 ‘갑’이 제 1항의 보험을 가입할 경우 ‘갑’이 수익자가 되는 것에 대하여 동의한다.{"\n"}
{"\n"}{"\n"}
제7조 [기타] ①본 계약서에 명시되지 아니한 사항에 대하여는 취업규칙 및 근로기준법 등
노동관계법령에 의한다.{"\n"}
② ‘갑’은 ‘을’에게 업무시작 전 본 계약서를 서면으로 공제하며, ‘갑’과 ‘을’은 서로 1부씩 보관한다.{"\n"}
{"\n"}{"\n"}
본인은 상기 내용에 대해 충분히 숙지하였으며, 본 근로계약에 동의하시겠습니까?</Text>
<Text style={{marginTop:100}}></Text>
          </ScrollView>
        </View>  
      );
    }
  }

  export default TermsScreen