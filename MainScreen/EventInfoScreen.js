import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, Dimensions, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import { ScrollView } from 'react-native-gesture-handler';
const WIDTH = Dimensions.get('window').width;

class EventInfoScreen extends React.Component {

  state = {
    isModalVisible0: false, //대회소개
    isModalVisible1: false, //코스소개
    isModalVisible2: false, //실시간스코어
    isModalVisible3: false, //관람매너

    widthcheck: null,
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
            <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#ffffff' }}>대회안내</Text>
          </View>

          <View style={{ padding: 15.6, marginTop: 15.9, flexDirection: 'row', marginHorizontal: 16, alignItems: 'center', justifyContent: 'center' }}>
            {/* <TouchableOpacity style={{ marginTop: 16, width: 35.8, height: 25 }}
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Image style={{ width: 22.8, height: 15 }} source={require('../assets/images/menu.png')} />
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={{ alignItems: 'center', marginVertical: 16 }}>

          {/*모달창  대회개요*/}
          <Modal style={{ marginTop: 136.9, }} isVisible={this.state.isModalVisible0}
            onBackdropPress={() => this.setState({ isModalVisible0: false })}>
            <ScrollView style={{ borderRadius: 20 }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/images/test.png')} resizeMode={'cover'} />

                <TouchableOpacity onPress={() => this.setState({ isModalVisible0: false })}
                  style={{ position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Modal>

          {/*모달창  코스소개*/}
          <Modal style={{ marginTop: 136.9, }} isVisible={this.state.isModalVisible1}
            onBackdropPress={() => this.setState({ isModalVisible1: false })}>
            <ScrollView style={{ borderRadius: 20 }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/images/map.png')} resizeMode={'cover'} />

                <TouchableOpacity onPress={() => this.setState({ isModalVisible1: false })}
                  style={{ position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Modal>

          {/*모달창  관람매너*/}
          <Modal style={{ marginTop: 136.9, }} isVisible={this.state.isModalVisible3}
            onBackdropPress={() => this.setState({ isModalVisible3: false })}>
            <ScrollView style={{ borderRadius: 20 }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/images/test2.png')} resizeMode={'cover'} />

                <TouchableOpacity onPress={() => this.setState({ isModalVisible3: false })}
                  style={{ position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Modal>

          <TouchableOpacity onPress={() => this.setState({ isModalVisible0: true })}
            style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 80, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

              <ImageBackground style={{ marginTop: 30, marginBottom: 26, width: WIDTH * 0.8, height: 50, marginRight: 0 }} source={require('../assets/images/eventinfo2.png')}>
                <Text style={{ marginTop: 10, marginLeft: 34, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>대회개요</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({ isModalVisible1: true })}
            style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 80, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
              <ImageBackground style={{ marginTop: 30, marginBottom: 26, width: WIDTH * 0.8, height: 50, marginRight: 0 }} source={require('../assets/images/course.png')}>
                <Text style={{ marginTop: 10, marginLeft: 38, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>코스소개</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          {this.state.widthcheck ?
            <TouchableOpacity onPress={() => Linking.openURL('http://live.kpga.co.kr/livescore/progressRound.asp')}
              style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 80, marginVertical: 10 }}>
              <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginLeft: 20, marginTop: 5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>실시간 스코어</Text>
                <Image style={{ marginLeft: 90, marginTop: 30, marginBottom: 26, width: 40, height: 30, marginRight: 0 }} source={require('../assets/images/score2.png')} />
              </View>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => Linking.openURL('http://live.kpga.co.kr/livescore/progressRound.asp')}
              style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 80, marginVertical: 10 }}>
              <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginLeft: 20, marginTop: 5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>실시간 스코어</Text>
                <Image style={{ marginLeft: 60, marginTop: 30, marginBottom: 26, width: 40, height: 30, marginRight: 0 }} source={require('../assets/images/score2.png')} />
              </View>
            </TouchableOpacity>
          }

          <TouchableOpacity onPress={() => this.setState({ isModalVisible3: true })}
            style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 80, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ marginLeft: 32, marginTop: 5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>관람매너 및 에티켓</Text>
              <Image style={{ marginLeft: 0, marginTop: 30, marginBottom: 26, width: 30, height: 40, marginRight: 15 }} source={require('../assets/images/s4.png')} />
            </View>
          </TouchableOpacity>

          {/* <TouchableOpacity style={{justifyContent: 'center',backgroundColor:'#ffffff',borderRadius:12, width:270, height:80,marginVertical:10}}>
            <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'space-between'}}>
              <Text style={{marginLeft:43,marginTop:24.5,marginBottom:23.5, fontFamily:'KBFGDisplay-Bold',fontSize:25,fontWeight:'bold',color: '#200d14'}}>대회일정</Text>
            </View>
            </TouchableOpacity> */}
        </View>
      </View>



    );
  }
}
export default EventInfoScreen