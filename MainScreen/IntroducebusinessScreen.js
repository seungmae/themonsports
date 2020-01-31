import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image,ImageBackground,Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
import Galleryservicemenu from '../businessmenu/galleryservicemenu'
import Contentmenu from '../businessmenu/contestmenu'
import Gamesupportmenu from '../businessmenu/gamesupportmenu'
import Marshallmenu from '../businessmenu/marshallmenu'
import Scoremenu from '../businessmenu/scoremenu'
import Busmenu from '../businessmenu/busmenu'
import Modal from 'react-native-modal'
const WIDTH = Dimensions.get('window').width;
class IntroducebusinessScreen extends React.Component {
    state = {
      gallerymenuVisible: true,
      contestmenuVisible: true,
      gamemenuVisible: true,
      marshallVisible: true,
      scoremenuVisible: true,
      busmenuVisible: true,
      supervisible:false,
    }
    render() {
      return (
        
        <View style={{flex:1,backgroundColor: 'rgb(242,242,242)' }}>
        {/*모달창 갤러리주차장*/}
        <Modal style={{marginTop:136.9,}} isVisible={this.state.supervisible}
                  onBackdropPress={() => this.setState({ supervisible: false })}>
                  <ScrollView style={{borderRadius:20 }}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/images/viser.png')} resizeMode={'cover'}/>
          
                <TouchableOpacity onPress={() => this.setState({ supervisible: false })}
                                style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon color='#3f414f' size={24} name='close' />
                </TouchableOpacity>
                  </View>
                  </ScrollView>
                </Modal>
        <View style={{backgroundColor:'rgb(250,180,0)',height:90,width:'100%', flexDirection:'row',alignItems: 'flex-start',justifyContent: 'space-between'}}>
              <View style={{alignItems: 'center',padding:24,marginTop:15.9}}>
              <TouchableOpacity style={{width:35.8}}
                  onPress={() => this.props.navigation.navigate('Main')}>
                  <Icon color='#ffffff' size={25.5} name='arrowleft' />
                  </TouchableOpacity>
              </View>

              <View style={{justifyContent:'center',padding:24,marginTop:15.9}}>
                <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize: 25,fontWeight: 'bold',color:'#ffffff'}}>업무소개</Text>
              </View>
              
              <View style={{padding:15.6,marginTop:15.9, flexDirection:'row',marginHorizontal:16, alignItems:'center',justifyContent:'center'}}>
                  {/* <TouchableOpacity style={{marginTop:16,width:35.8, height: 25}}
                  onPress={() => this.props.navigation.toggleDrawer()}>
                  <Image style={{width:22.8, height: 15}} source={require('../assets/images/menu.png')}/>
                  </TouchableOpacity>              */}
              </View>          
          </View>
          <ScrollView>

            <View style={{alignItems: 'center', marginVertical:16}}>
            <TouchableOpacity onPress={() => this.state.gallerymenuVisible ? this.setState({gallerymenuVisible:false}) : this.setState({gallerymenuVisible:true})}
            style={{justifyContent: 'center',backgroundColor:'#ffffff',borderRadius:12, width:WIDTH*0.77, height:79,marginVertical:10}}>
            {/* <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'space-between'}}>
              <Text style={{marginLeft:43,marginTop:24.5,marginBottom:23.5, fontFamily:'KBFGDisplay-Medium',fontSize:25,fontWeight:'bold',color: '#200d14'}}>갤러리 서비스</Text>
              <View style={{padding:6, flexDirection:'row',marginHorizontal:16, alignItems:'flex-end'}}>
                <Icon style={{marginVertical:16}}color='#8d8d8d' size={20.6} name='plus' />
              </View>
            </View> */}
            <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'flex-start'}}>
            <Text style={{textAlign:'left',marginLeft:40,marginTop:24,marginBottom:23.5, fontFamily:'KBFGDisplay-Bold',fontSize:25,fontWeight:'bold',color: '#200d14'}}>갤러리 서비스</Text>
            <Image style={{marginLeft:40,marginRight:30,width:50,height:50,marginTop:15}} source={require('../assets/images/1.png')}/>
            </View>
            </TouchableOpacity>
            
              {/* 갤러리 서비스 메뉴들*/}
              { 
                    this.state.gallerymenuVisible ? <View></View>
                     : <Galleryservicemenu />
              }
            <TouchableOpacity onPress={() => this.state.contestmenuVisible ? this.setState({contestmenuVisible:false}) : this.setState({contestmenuVisible:true})}
            style={{justifyContent: 'center',backgroundColor:'#ffffff',borderRadius:12, width:WIDTH*0.77, height:79,marginVertical:10}}>
            <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center'}}>  
              <Text style={{marginLeft:40,marginTop:24,marginBottom:23.5, fontFamily:'KBFGDisplay-Bold',fontSize:25,fontWeight:'bold',color:'#200d14'}}>대회지원</Text>
              <Image style={{marginLeft:90,marginRight:30,width:50,height:50}} source={require('../assets/images/2.png')}/>
            </View>
            </TouchableOpacity>
            {/* 대회 지원 메뉴들*/}
            { 
                    this.state.contestmenuVisible ? <View></View>
                     : <Contentmenu />
            }

            {/* <TouchableOpacity onPress={() => this.state.gamemenuVisible ? this.setState({gamemenuVisible:false}) : this.setState({gamemenuVisible:true})}
            style={{justifyContent: 'center',backgroundColor:'#ffffff',borderRadius:12, width:WIDTH*0.77, height:79,marginVertical:10}}>
            <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center'}}>  
              <Text style={{marginLeft:40,marginTop:24,marginBottom:23.5, fontFamily:'KBFGDisplay-Medium',fontSize:25,fontWeight:'bold',color: '#200d14'}}>경기지원</Text>
              <Image style={{marginLeft:90,marginRight:30,width:50,height:50}} source={require('../assets/images/3.png')}/>
            </View>
            </TouchableOpacity>
            경기 지원 메뉴들
            { 
                    this.state.gamemenuVisible ? <View></View>
                     : <Gamesupportmenu />
            } */}

            <TouchableOpacity onPress={() => this.state.marshallVisible ? this.setState({marshallVisible:false}) : this.setState({marshallVisible:true})}
            style={{justifyContent: 'center',backgroundColor:'#ffffff',borderRadius:12, width:WIDTH*0.77, height:79,marginVertical:10}}>
            <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center'}}>  
              <Text style={{marginLeft:40,marginTop:24,marginBottom:23.5, fontFamily:'KBFGDisplay-Bold',fontSize:25,fontWeight:'bold',color: '#200d14'}}>코스</Text>
              <Image style={{marginLeft:130,marginRight:30,width:50,height:50}} source={require('../assets/images/4.png')}/>
            </View>
            </TouchableOpacity>
            {/* 마샬 메뉴들*/}
            { 
                    this.state.marshallVisible ? <View></View>
                     : <Marshallmenu />
            }

            <TouchableOpacity onPress={() => this.state.scoremenuVisible ? this.setState({scoremenuVisible:false}) : this.setState({scoremenuVisible:true})}
            style={{justifyContent: 'center',backgroundColor:'#ffffff',borderRadius:12, width:WIDTH*0.77, height:79,marginVertical:10}}>
            <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center'}}>  
              <Text style={{marginLeft:30,marginTop:24,marginBottom:23.5, fontFamily:'KBFGDisplay-Bold',fontSize:25,fontWeight:'bold',color: '#200d14'}}>스코어</Text>
              <Image style={{marginLeft:110,marginRight:20,width:50,height:50}} source={require('../assets/images/5.png')}/>
            </View>
            </TouchableOpacity>
            {/* 스코어 메뉴들*/}
            { 
                    this.state.scoremenuVisible ? <View></View>
                     : <Scoremenu />
            }

            <TouchableOpacity onPress={() => this.state.busmenuVisible ? this.setState({busmenuVisible:false}) : this.setState({busmenuVisible:true})}
            style={{justifyContent: 'center',backgroundColor:'#ffffff',borderRadius:12, width:WIDTH*0.77, height:108,marginVertical:10}}>
            <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',marginLeft:20}}>
                <View style={{marginLeft:41,marginTop:24.5,marginBottom:23.5}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:25,fontWeight:'bold',color: '#200d14'}}>셔틀버스/주차/</Text>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:25,fontWeight:'bold',color: '#200d14'}}>교통지원</Text>
                </View>
              <View style={{padding:6, flexDirection:'row',marginHorizontal:16, alignItems:'flex-end'}}>
              <Image style={{marginLeft:8,marginRight:40,width:50,height:50}} source={require('../assets/images/6.png')}/>
              </View>
            </View>

            </TouchableOpacity>
            {/* 셔틀버스 메뉴들*/}
            { 
                    this.state.busmenuVisible ? <View></View>
                     : <Busmenu />
            }

            <TouchableOpacity onPress={() => this.setState({ supervisible: true })}
            style={{justifyContent: 'center',backgroundColor:'#ffffff',borderRadius:12, width:WIDTH*0.77, height:79,marginVertical:10}}>
            <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center'}}>  
              <Text style={{marginLeft:40,marginTop:24,marginBottom:23.5, fontFamily:'KBFGDisplay-Bold',fontSize:25,fontWeight:'bold',color: '#200d14'}}>슈퍼바이저</Text>
              <Image style={{marginLeft:70,marginRight:15,width:50,height:50}} source={require('../assets/images/7.png')}/>
            </View>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </View> 
          
      );
    }
  }
  export default IntroducebusinessScreen