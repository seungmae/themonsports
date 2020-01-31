import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Image,ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
const WIDTH = Dimensions.get('window').width;
class myinfomenu extends React.Component {
    state = {
        myinfomenu1: false, //숙박
        myinfomenu2: false, //셔틀버스
      }
    render() {
        return (
            <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}>
            {/*모달창  티켓판매및교환처*/}
            <Modal style={{ marginTop: 136.9, }} isVisible={this.state.myinfomenu1}
                    onBackdropPress={() => this.setState({ myinfomenu1: false })}>
                    <ScrollView style={{ borderRadius: 20 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../assets/images/myinfopage1.png')} resizeMode={'cover'} />

                            <TouchableOpacity onPress={() => this.setState({ myinfomenu1: false })}
                                style={{ position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon color='#3f414f' size={24} name='close' />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Modal>
                <View style={{flexDirection:'row',flexWrap: 'wrap',
                    justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.setState({ myinfomenu1: true })}
                    style={{marginLeft:10,justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10,marginRight:20}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>숙박</Text>
                    </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>셔틀버스</Text>
                    </View>
                    </TouchableOpacity>   
                </View>
                <View style={{flexDirection:'row',flexWrap: 'wrap',
                    justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.setState({ myinfomenu2: true })}
                    style={{marginLeft:10,justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10,marginRight:20}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>식사</Text>
                    </View>
                    </TouchableOpacity>

                </View>
            </View>
            
        );
    }
    
  }

  export default myinfomenu;