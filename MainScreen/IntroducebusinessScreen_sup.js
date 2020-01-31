import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image,ImageBackground, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'

import Tournamentmenu from '../businessmenu/tournament_sup'
import Safemenu from '../businessmenu/safe_sup'
import Gallerymenu from '../businessmenu/gallery_sup'
const WIDTH = Dimensions.get('window').width;
class IntroducebusinessScreen_sup extends React.Component {
    state = {
      tournamentmenuVisible: true,
      safemenuVisible: true,
      gallerymenuVisible: true,
      marshallVisible: true,
      scoremenuVisible: true,
      busmenuVisible: true,
    }
    render() {
      return (
        
        <View style={{flex:1,backgroundColor: 'rgb(242,242,242)' }}>
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
            <TouchableOpacity onPress={() => this.state.tournamentmenuVisible ? this.setState({tournamentmenuVisible:false}) : this.setState({tournamentmenuVisible:true})}
            style={{justifyContent: 'center',backgroundColor:'#ffffff',borderRadius:12, width:WIDTH*0.77, height:79,marginVertical:10}}>
            {/* <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'space-between'}}>
              <Text style={{marginLeft:43,marginTop:24.5,marginBottom:23.5, fontFamily:'KBFGDisplay-Medium',fontSize:25,fontWeight:'bold',color: '#200d14'}}>갤러리 서비스</Text>
              <View style={{padding:6, flexDirection:'row',marginHorizontal:16, alignItems:'flex-end'}}>
                <Icon style={{marginVertical:16}}color='#8d8d8d' size={20.6} name='plus' />
              </View>
            </View> */}
            <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center'}}>
            <Text style={{marginLeft:40,marginTop:24,marginBottom:23.5, fontFamily:'KBFGDisplay-Bold',fontSize:25,fontWeight:'bold',color: '#200d14'}}>FACILITY(시서물)</Text>
              <Image style={{marginLeft:20,marginRight:27,width:33,height:30}} source={require('../assets/images/sup1.png')}/>
            </View>
            </TouchableOpacity>
            
              {/* FACILITY*/}
              { 
                    this.state.tournamentmenuVisible ? <View></View>
                     : <Tournamentmenu />
              }
            {/* <TouchableOpacity onPress={() => this.state.safemenuVisible ? this.setState({safemenuVisible:false}) : this.setState({safemenuVisible:true})}
            style={{justifyContent: 'center',backgroundColor:'#ffffff',borderRadius:12, width:WIDTH*0.77, height:79,marginVertical:10}}>
            <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center'}}>
            <Text style={{marginLeft:40,marginTop:24,marginBottom:23.5, fontFamily:'KBFGDisplay-Medium',fontSize:25,fontWeight:'bold',color: '#200d14'}}>시설안전</Text>
              <Image style={{marginLeft:125,marginRight:27,width:33,height:30}} source={require('../assets/images/sup2.png')}/>
            </View>
            </TouchableOpacity>
            시설안전 메뉴들
            { 
                    this.state.safemenuVisible ? <View></View>
                     : <Safemenu />
            } */}

            <TouchableOpacity onPress={() => this.state.gallerymenuVisible ? this.setState({gallerymenuVisible:false}) : this.setState({gallerymenuVisible:true})}
            style={{justifyContent: 'center',backgroundColor:'#ffffff',borderRadius:12, width:WIDTH*0.77, height:79,marginVertical:10}}>
            <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center'}}>
            <Text style={{marginLeft:40,marginTop:24,marginBottom:23.5, fontFamily:'KBFGDisplay-Bold',fontSize:25,fontWeight:'bold',color: '#200d14'}}>트래픽</Text>
              <Image style={{marginLeft:145,marginRight:27,width:33,height:30}} source={require('../assets/images/sup3.png')}/>
            </View>
            </TouchableOpacity>
            {/* 트래픽 메뉴들*/}
            { 
                    this.state.gallerymenuVisible ? <View></View>
                     : <Gallerymenu />
            }

            {/* <TouchableOpacity style={{justifyContent: 'center',backgroundColor:'#ffffff',borderRadius:12, width:WIDTH*0.77, height:79,marginVertical:10}}>
            <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center'}}>
            <Text style={{marginLeft:40,marginTop:24,marginBottom:23.5, fontFamily:'KBFGDisplay-Medium',fontSize:25,fontWeight:'bold',color: '#200d14'}}>슈퍼바이저</Text>
              <Image style={{marginLeft:100,marginRight:27,width:33,height:30}} source={require('../assets/images/sup4.png')}/>
            </View>
            </TouchableOpacity> */}
            </View>
            </ScrollView>
        </View> 
          
      );
    }
  }
  export default IntroducebusinessScreen_sup