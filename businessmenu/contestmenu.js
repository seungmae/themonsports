import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Image,ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
const WIDTH = Dimensions.get('window').width;
class contestmenu extends React.Component {
    state = {
        contestmenu0: false, //협회지원
        contestmenu1: false, //프레스룸
        contestmenu2: false, //운영본부 지원
        contestmenu4: false, //갤러리플라 지원
      }
      render(){
        // var {height, width} = Dimensions.get('window');
        return (
            <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}>
                {/*모달창  협회지원*/}
            <Modal style={{marginTop:136.9,}} isVisible={this.state.contestmenu0}
              onBackdropPress={() => this.setState({ contestmenu0: false })}>
              <ScrollView style={{borderRadius:20 }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/images/contest0.png')} resizeMode={'cover'}/>
      
            <TouchableOpacity onPress={() => this.setState({ contestmenu0: false })}
                            style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
            </TouchableOpacity>
              </View>
              </ScrollView>
            </Modal>

            {/*모달창  미디어센터지원*/}
            <Modal style={{marginTop:136.9,}} isVisible={this.state.contestmenu1}
              onBackdropPress={() => this.setState({ contestmenu1: false })}>
              <ScrollView style={{borderRadius:20 }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/images/contest1.png')} resizeMode={'cover'}/>
      
            <TouchableOpacity onPress={() => this.setState({ contestmenu1: false })}
                            style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
            </TouchableOpacity>
              </View>
              </ScrollView>
            </Modal>

            {/*모달창  식음료 물품 관리*/}
            <Modal style={{marginTop:136.9,}} isVisible={this.state.contestmenu2}
              onBackdropPress={() => this.setState({ contestmenu2: false })}>
              <ScrollView style={{borderRadius:20 }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/images/contest2.png')} resizeMode={'cover'}/>
      
            <TouchableOpacity onPress={() => this.setState({ contestmenu2: false })}
                            style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
            </TouchableOpacity>
              </View>
              </ScrollView>
            </Modal>

                <View style={{flexDirection:'row',flexWrap: 'wrap',
                    justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.setState({ contestmenu0: true })}
                    style={{marginLeft:20,justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10,marginRight:20}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>협회 지원</Text>
                    </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity onPress={() => this.setState({ contestmenu1: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10,marginRight:20}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>미디어센터 지원</Text>
                    </View>
                    </TouchableOpacity>   

                </View>
                <View style={{flexDirection:'row',flexWrap: 'wrap',
                    justifyContent: 'space-evenly'}}>
                    
                    <TouchableOpacity onPress={() => this.setState({ contestmenu2: true })}
                    style={{marginLeft:20,justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>식,음료/물품 관리</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            );
      }
  }

  export default contestmenu;