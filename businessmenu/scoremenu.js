import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Image,ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
const WIDTH = Dimensions.get('window').width;
class scoremenu extends React.Component {
    state = {
        scoremenu1: false, //이동 스코어
        scoremenu2: false, //종합 스코어
        scoremenu3: false, //대형 스코어
        scoremenu4: false, //중형 스코어
      }
    render() {
        return (
            <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}>
              {/*모달창  tee marshall*/}
              <Modal style={{marginTop:136.9,}} isVisible={this.state.scoremenu1}
                  onBackdropPress={() => this.setState({ scoremenu1: false })}>
                  <ScrollView style={{borderRadius:20 }}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/images/scorepage.png')} resizeMode={'cover'}/>
          
                <TouchableOpacity onPress={() => this.setState({ scoremenu1: false })}
                                style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
                  </View>
                  </ScrollView>
                </Modal>

                <View style={{flexDirection:'row',flexWrap: 'wrap',
                    justifyContent: 'flex-start'}}>
                    <TouchableOpacity onPress={() => this.setState({ scoremenu1: true })}
                    style={{marginLeft:20,justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10,marginRight:20}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>이동 리더스 보드</Text>
                    </View>
                    </TouchableOpacity>

                    <View
                    style={{justifyContent: 'center',backgroundColor:'withe',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10,marginRight:20}}>
                    
                    </View>
    
                    
                </View>
                
            </View>
            
        );
    }
  }

  export default scoremenu;