import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Image,ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
const WIDTH = Dimensions.get('window').width;
class marshallmenu extends React.Component {
    state = {
        marshallmenu1: false, //
        marshallmenu2: false, //
        marshallmenu3: false, //
        marshallmenu4: false, //
        marshallmenu5: false, //
        marshallmenu6: false, //
        marshallmenu7: false,
        marshallmenu8: false,
      }
    render() {
        return (
            <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}>
                {/*모달창  tee marshall*/}
                <Modal style={{marginTop:136.9,}} isVisible={this.state.marshallmenu1}
                  onBackdropPress={() => this.setState({ marshallmenu1: false })}>
                  <ScrollView style={{borderRadius:20 }}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/images/marshall0.png')} resizeMode={'cover'}/>
          
                <TouchableOpacity onPress={() => this.setState({ marshallmenu1: false })}
                                style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
                  </View>
                  </ScrollView>
                </Modal>

                {/*모달창  green 마샬*/}
                <Modal style={{marginTop:136.9,}} isVisible={this.state.marshallmenu2}
                  onBackdropPress={() => this.setState({ marshallmenu2: false })}>
                  <ScrollView style={{borderRadius:20 }}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/images/marshall1.png')} resizeMode={'cover'}/>
          
                <TouchableOpacity onPress={() => this.setState({ marshallmenu2: false })}
                                style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
                  </View>
                  </ScrollView>
                </Modal>

                {/*모달창  코스내부 마샬*/}
                <Modal style={{marginTop:136.9,}} isVisible={this.state.marshallmenu3}
                  onBackdropPress={() => this.setState({ marshallmenu3: false })}>
                  <ScrollView style={{borderRadius:20 }}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/images/marshall2.png')} resizeMode={'cover'}/>
          
                <TouchableOpacity onPress={() => this.setState({ marshallmenu3: false })}
                                style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
                  </View>
                  </ScrollView>
                </Modal>

                {/*모달창  갤러리스탠드통제*/}
                <Modal style={{marginTop:136.9,}} isVisible={this.state.marshallmenu4}
                  onBackdropPress={() => this.setState({ marshallmenu4: false })}>
                  <ScrollView style={{borderRadius:20 }}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/images/marshall3.png')} resizeMode={'cover'}/>
          
                <TouchableOpacity onPress={() => this.setState({ marshallmenu4: false })}
                                style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
                  </View>
                  </ScrollView>
                </Modal>

                {/*모달창  이동 마샬*/}
                <Modal style={{marginTop:136.9,}} isVisible={this.state.marshallmenu5}
                  onBackdropPress={() => this.setState({ marshallmenu5: false })}>
                  <ScrollView style={{borderRadius:20 }}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/images/marshall4.png')} resizeMode={'cover'}/>
          
                <TouchableOpacity onPress={() => this.setState({ marshallmenu5: false })}
                                style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
                  </View>
                  </ScrollView>
                </Modal>

                {/*모달창  그늘집선수화장실*/}
                <Modal style={{marginTop:136.9,}} isVisible={this.state.marshallmenu6}
                  onBackdropPress={() => this.setState({ marshallmenu6: false })}>
                  <ScrollView style={{borderRadius:20 }}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/images/marshall5.png')} resizeMode={'cover'}/>
          
                <TouchableOpacity onPress={() => this.setState({ marshallmenu6: false })}
                                style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
                  </View>
                  </ScrollView>
                </Modal>

                {/*모달창  메인연습그린통제*/}
                <Modal style={{marginTop:136.9,}} isVisible={this.state.marshallmenu7}
                  onBackdropPress={() => this.setState({ marshallmenu7: false })}>
                  <ScrollView style={{borderRadius:20 }}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/images/marshall6.png')} resizeMode={'cover'}/>
          
                <TouchableOpacity onPress={() => this.setState({ marshallmenu7: false })}
                                style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
                  </View>
                  </ScrollView>
                </Modal>

                {/*모달창  드라이빙레인지운영*/}
                <Modal style={{marginTop:136.9,}} isVisible={this.state.marshallmenu8}
                  onBackdropPress={() => this.setState({ marshallmenu8: false })}>
                  <ScrollView style={{borderRadius:20 }}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/images/marshall7.png')} resizeMode={'cover'}/>
          
                <TouchableOpacity onPress={() => this.setState({ marshallmenu8: false })}
                                style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
                  </View>
                  </ScrollView>
                </Modal>
               

                <View style={{flexDirection:'row',flexWrap: 'wrap',
                    justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.setState({ marshallmenu1: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10,marginRight:20}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>1.10 TEE 마샬</Text>
                    </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity onPress={() => this.setState({ marshallmenu2: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>9.18 GREEN 마샬</Text>
                    </View>
                    </TouchableOpacity>   
                </View>
                <View style={{flexDirection:'row',flexWrap: 'wrap',
                    justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.setState({ marshallmenu3: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10,marginRight:20}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>코스 내부 마샬</Text>
                    </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity onPress={() => this.setState({ marshallmenu4: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>갤러리 스탠드 통제</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',flexWrap: 'wrap',
                    justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.setState({ marshallmenu5: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10,marginRight:20}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>이동마샬</Text>
                    </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity onPress={() => this.setState({ marshallmenu6: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>그늘집:선수 화장실</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',flexWrap: 'wrap',
                    justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.setState({ marshallmenu7: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10,marginRight:20}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>메인 연습그린 통제</Text>
                    </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity onPress={() => this.setState({ marshallmenu8: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>드라이빙 레인지 운영</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>        
        );
    }
  }

  export default marshallmenu;