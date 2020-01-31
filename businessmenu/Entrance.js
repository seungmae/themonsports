import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
const WIDTH = Dimensions.get('window').width;
class Entrance extends React.Component {
  state = {
    contestmenu0: false, //협회지원
    contestmenu1: false, //프레스룸
    contestmenu2: false, //운영본부 지원
    contestmenu4: false, //갤러리플라 지원
  }
  render() {
    // var {height, width} = Dimensions.get('window');
    return (
      <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        {/*모달창  입장권초대권*/}

        <Modal style={{ marginTop: 136.9 }} isVisible={this.state.contestmenu0}
          onBackdropPress={() => this.setState({ contestmenu0: false })}>
          <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ contestmenu0: false })}
                style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ImageBackground style={{ width: '100%', height: 80, backgroundColor: 'rgb(250,180,0)' }}>
                <Text style={{ marginTop: 20, marginLeft: 22.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 32, fontWeight: 'bold', color: '#ffffff' }}>입장권/초대권</Text>
              </ImageBackground>
              <Text style={{ alignSelf: 'flex-start', marginBottom: 25, marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>입장권</Text>
              <Image source={require('../assets/images/entrance_p1.png')} style={{ resizeMode: 'contain' }} />
              <Text style={{ alignSelf: 'flex-start', marginBottom: 25, marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>초대권</Text>
              <Image source={require('../assets/images/entrance_p2.png')} style={{ resizeMode: 'contain',marginBottom:30 }} />
            </View>
          </ScrollView>
        </Modal>

        {/*모달창  미디어센터지원*/}
        <Modal style={{ marginTop: 136.9 }} isVisible={this.state.contestmenu1}
          onBackdropPress={() => this.setState({ contestmenu1: false })}>
          <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ contestmenu1: false })}
                style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ImageBackground style={{ width: '100%', height: 80, backgroundColor: 'rgb(250,180,0)' }}>
                <Text style={{ marginTop: 20, marginLeft: 22.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 32, fontWeight: 'bold', color: '#ffffff' }}>출입비표</Text>
              </ImageBackground>
              <Text style={{ alignSelf: 'flex-start', marginBottom: 25, marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>출입비표(7종류){'\n'}OFFICIAL, VIP, PRESS{'\n'}JTBC GOLF, SPONSOR,{'\n'}GUEST, STAFF</Text>
              <Image source={require('../assets/images/entrance_p3.png')} style={{ resizeMode: 'contain',marginBottom:16 }} />
              <Image source={require('../assets/images/entrance_p4.png')} style={{ resizeMode: 'contain',marginBottom:16  }} />
              <Image source={require('../assets/images/entrance_p5.png')} style={{ resizeMode: 'contain',marginBottom:16  }} />
              <Image source={require('../assets/images/entrance_p6.png')} style={{ resizeMode: 'contain',marginBottom:16  }} />
              <Image source={require('../assets/images/entrance_p7.png')} style={{ resizeMode: 'contain',marginBottom:16  }} />
              <Image source={require('../assets/images/entrance_p8.png')} style={{ resizeMode: 'contain',marginBottom:16  }} />
              <Image source={require('../assets/images/entrance_p9.png')} style={{ resizeMode: 'contain',marginBottom:30 }} />
              
            </View>
          </ScrollView>
        </Modal>

        {/*모달창  주차비표*/}
        <Modal style={{ marginTop: 136.9 }} isVisible={this.state.contestmenu2}
          onBackdropPress={() => this.setState({ contestmenu2: false })}>
          <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ contestmenu2: false })}
                style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ImageBackground style={{ width: '100%', height: 80, backgroundColor: 'rgb(250,180,0)' }}>
                <Text style={{ marginTop: 20, marginLeft: 22.5, marginRight: 22.5, fontFamily: 'GodoM', fontSize: 32, fontWeight: 'bold', color: '#ffffff' }}>주차비표</Text>
              </ImageBackground>
              <Text style={{ alignSelf: 'flex-start', marginBottom: 28, marginTop: 35, marginRight: 22.5, marginLeft: 22.5, fontFamily: 'GodoM', fontSize: 17, fontWeight: 'bold', color: '#200d14' }}>주차비표 (4종류){'\n'}VIP, 관리동, 주최사, 지하</Text>
              <Image source={require('../assets/images/entrance_p10.png')} style={{ resizeMode: 'contain',marginBottom:16 }} />
              <Image source={require('../assets/images/entrance_p11.png')} style={{ resizeMode: 'contain',marginBottom:16  }} />
              <Image source={require('../assets/images/entrance_p12.png')} style={{ resizeMode: 'contain',marginBottom:16  }} />
              <Image source={require('../assets/images/entrance_p13.png')} style={{ resizeMode: 'contain',marginBottom:30  }} />
              
            </View>
          </ScrollView>
        </Modal>

        <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center',justifyContent: 'flex-start'}}>
          <TouchableOpacity onPress={() => this.setState({ contestmenu0: true })}
            style={{ marginLeft: 20, justifyContent: 'center', backgroundColor: '#eaeaee', borderRadius: 5, width: WIDTH * 0.35, height: 28, marginVertical: 10, marginRight: 20 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 12, fontWeight: 'bold', color: '#200d14' }}>입장권/초대권</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({ contestmenu1: true })}
            style={{ justifyContent: 'center', backgroundColor: '#eaeaee', borderRadius: 5, width: WIDTH * 0.35, height: 28, marginVertical: 10, marginRight: 20 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 12, fontWeight: 'bold', color: '#200d14' }}>출입비표</Text>
            </View>
          </TouchableOpacity>



        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <TouchableOpacity onPress={() => this.setState({ contestmenu2: true })}
            style={{ marginLeft: 20, justifyContent: 'center', backgroundColor: '#eaeaee', borderRadius: 5, width: WIDTH * 0.35, height: 28, marginVertical: 10 }}>
            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 12, fontWeight: 'bold', color: '#200d14' }}>주차비표</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

export default Entrance;