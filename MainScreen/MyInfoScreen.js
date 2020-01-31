import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import { Divider } from 'react-native-elements';
import Myinfomenu from '../businessmenu/myinfomenu'
import Myinfomenu1 from '../businessmenu/myinfomenu.1'
const WIDTH = Dimensions.get('window').width;

class MyInfoScreen extends React.Component {
  state = {
    infomenuvisible: false,
    menuVisible: false, //복리후생 안내
    user: this.props.navigation.getParam('user'),
    userinfo_visible: false,
    userinfo_visible2: false,
    userinfo_visible3: false,
  }
  componentDidMount() {
    const infomenu = ({}) => {
    }
  }

  render() {
    console.log(this.state.user)
    return (

      <View style={{ flex: 1, backgroundColor: 'rgb(242,242,242)' }}>
        {/* 회원정보*/}

        <Modal style={{ marginTop: 136.9 }} isVisible={this.state.userinfo_visible}
          onBackdropPress={() => this.setState({ userinfo_visible: false })}>
          <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff'}}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ userinfo_visible: false })}
                style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>

            <ImageBackground style={{ width: '100%', height: 80, backgroundColor: 'rgb(250,180,0)' }}>
              <Text style={{ marginTop: 20, marginLeft: 22.5, marginRight: 21.5, fontFamily: 'KBFGDisplay-Medium', fontSize: 32, fontWeight: 'bold', color: '#ffffff' }}>내 정보</Text>
            </ImageBackground>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row', padding: 10,marginLeft:79,marginTop:59 }}>
                <Image source={{ uri: this.state.user._data.profilePictureURL }} style={{ width: 115, height: 115,borderRadius: 60}} />
                <View style={{ justifyContent: 'center', marginRight: 50,marginLeft:25}}>
                  <Text style={{ fontFamily: 'KBFGDisplay-Medium', fontSize: 21, fontWeight: '500', color: '#200d14' }}>{this.state.user._data.fullName}님,</Text>
                  <Text style={{ fontFamily: 'KBFGDisplay-Medium', fontSize: 3 }}> </Text>
                  <Text style={{ fontFamily: 'KBFGDisplay-Medium', fontSize: 13, fontWeight: '500', color: '#200d14' }}>오늘도 좋은하루 되세요!</Text>
                </View>
              </View>
              <View style={{padding:10,marginTop:60,width:'100%',height:65,backgroundColor:'#f5f5f5',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Icon name='user' size={24} style={{marginLeft:23}}/>
                <Text style={{flex:1,marginLeft:23,fontSize:13,fontWeight:'bold',color:'#200d14',fontFamily:'KBFGDisplay-Bold'}}>회원타입</Text>
                <Text style={{marginRight:23,fontSize:15,fontWeight:'500',color:'#3f414f',fontFamily:'KBFGDisplay-Medium'}}>{this.state.user._data.type}</Text>
              </View>
              <View style={{padding:10,width:'100%',height:65,backgroundColor:'#f5f5f5',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Icon name='smileo' size={24} style={{marginLeft:23}}/>
                <Text style={{flex:1,marginLeft:23,fontSize:13,fontWeight:'bold',color:'#200d14',fontFamily:'KBFGDisplay-Bold'}}>성별</Text>
                <Text style={{marginRight:23,fontSize:15,fontWeight:'500',color:'#3f414f',fontFamily:'KBFGDisplay-Medium'}}>{this.state.user._data.gender}</Text>
              </View>
              <View style={{padding:10,width:'100%',height:65,backgroundColor:'#f5f5f5',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Icon name='team' size={24} style={{marginLeft:23}}/>
                <Text style={{flex:1,marginLeft:23,fontSize:13,fontWeight:'bold',color:'#200d14',fontFamily:'KBFGDisplay-Bold'}}>소속</Text>
                <Text style={{marginRight:23,fontSize:15,fontWeight:'500',color:'#3f414f',fontFamily:'KBFGDisplay-Medium'}}>{this.state.user._data.belong}</Text>
              </View>
              <View style={{padding:10,width:'100%',height:65,backgroundColor:'#f5f5f5',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Icon name='phone' size={24} style={{marginLeft:23}}/>
                <Text style={{flex:1,marginLeft:23,fontSize:13,fontWeight:'bold',color:'#200d14',fontFamily:'KBFGDisplay-Bold'}}>연락처</Text>
                <Text style={{marginRight:23,fontSize:15,fontWeight:'500',color:'#3f414f',fontFamily:'KBFGDisplay-Medium'}}>{this.state.user._data.phone}</Text>
              </View>
              {/* <View style={{padding:10,width:'100%',height:65,backgroundColor:'#f5f5f5',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Icon name='book' color='black' size={24} style={{marginLeft:23}}/>
                <Text style={{flex:1,marginLeft:23,fontSize:13,fontWeight:'bold',color:'#200d14',fontFamily:'KBFGDisplay-Bold'}}>담당업무</Text>
                <Text style={{marginRight:23,fontSize:15,fontWeight:'500',color:'#3f414f',fontFamily:'KBFGDisplay-Medium'}}>티켓검표</Text>
              </View> */}
              <View style={{marginBottom:50,padding:10,width:'100%',height:65,backgroundColor:'#f5f5f5',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Icon name='calendar' color='black' size={24} style={{marginLeft:23}}/>
                <Text style={{flex:1,marginLeft:23,fontSize:13,fontWeight:'bold',color:'#200d14',fontFamily:'KBFGDisplay-Bold'}}>가입일</Text>
                <Text style={{marginRight:23,fontSize:15,fontWeight:'500',color:'#3f414f',fontFamily:'KBFGDisplay-Medium'}}>{this.state.user._data.created}</Text>
              </View>
              
            </View>

          </ScrollView>
        </Modal>

        {/* 스케쥴*/}

        <Modal style={{ marginTop: 136.9 }} isVisible={this.state.userinfo_visible2}
          onBackdropPress={() => this.setState({ userinfo_visible2: false })}>
          <ScrollView style={{ borderRadius: 20, backgroundColor: '#ffffff'}}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ userinfo_visible2: false })}
                style={{ marginLeft: WIDTH * 0.77, marginTop: 31, marginBottom: 29, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
              </TouchableOpacity>
            </View>

            <ImageBackground style={{ width: '100%', height: 80, backgroundColor: 'rgb(250,180,0)' }}>
              <Text style={{ marginTop: 20, marginLeft: 22.5, marginRight: 21.5, fontFamily: 'KBFGDisplay-Medium', fontSize: 32, fontWeight: 'bold', color: '#ffffff' }}>스케쥴 확인</Text>
            </ImageBackground>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row', padding: 10,marginLeft:79,marginTop:59 }}>
                <Image source={{ uri: this.state.user._data.profilePictureURL }} style={{ width: 115, height: 115,borderRadius: 60}} />
                <View style={{ justifyContent: 'center', marginRight: 50,marginLeft:25}}>
                  <Text style={{ fontFamily: 'KBFGDisplay-Medium', fontSize: 21, fontWeight: '500', color: '#200d14' }}>{this.state.user._data.fullName}님,</Text>
                  <Text style={{ fontFamily: 'KBFGDisplay-Medium', fontSize: 3 }}> </Text>
                  <Text style={{ fontFamily: 'KBFGDisplay-Medium', fontSize: 13, fontWeight: '500', color: '#200d14' }}>오늘도 좋은하루 되세요!</Text>
                </View>
              </View>
             
              <View style={{marginTop:60,padding:10,width:'100%',height:65,backgroundColor:'#f5f5f5',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Icon name='calendar' color='black' size={24} style={{marginLeft:23}}/>
                <Text style={{flex:1,marginLeft:23,fontSize:13,fontWeight:'bold',color:'#200d14',fontFamily:'KBFGDisplay-Bold'}}>스케쥴</Text>
              </View>
              <Divider style={{ width:'100%', height: 1, marginTop: 8, marginLeft: 0, backgroundColor: '#8d8d8d' }} />
              <Text style={{marginTop:10}}>아직 확인 가능한 스케쥴이 없습니다.</Text>
            </View>

          </ScrollView>
        </Modal>
        
        <Modal style={{marginTop:136.9,}} isVisible={this.state.userinfo_visible3}
              onBackdropPress={() => this.setState({ userinfo_visible3: false })}>
              <ScrollView style={{borderRadius:20 }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {
                this.state.user._data.type == '진행요원' && <Image source={require('../assets/images/infopage1.png')} resizeMode={'cover'}/> ||
                this.state.user._data.type == '보안요원' && <Image source={require('../assets/images/infopage2.png')} resizeMode={'cover'}/> ||
                this.state.user._data.type == '드라이버' && <Image source={require('../assets/images/infopage3.png')} resizeMode={'cover'}/>
              }
                
            <TouchableOpacity onPress={() => this.setState({ userinfo_visible3: false })}
                            style={{position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                <Icon color='#3f414f' size={24} name='close' />
            </TouchableOpacity>
              </View>
              </ScrollView>
        </Modal>

        <View style={{ backgroundColor: 'rgb(250,180,0)', height: 90, width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <View style={{ alignItems: 'center', padding: 24, marginTop: 15.9 }}>
            <TouchableOpacity style={{ width: 35.8 }}
              onPress={() => this.props.navigation.navigate('Main')}>
              <Icon color='#ffffff' size={25.5} name='arrowleft' />
            </TouchableOpacity>
          </View>


          <View style={{ justifyContent: 'center', padding: 24, marginTop: 15.9 }}>
            <Text style={{ fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#ffffff' }}>내 정보</Text>
          </View>

          <View style={{ padding: 15.6, marginTop: 15.9, flexDirection: 'row', marginHorizontal: 16, alignItems: 'center', justifyContent: 'center' }}>
            {/* <TouchableOpacity style={{marginTop:16,width:35.8, height: 25}}
                  onPress={() => this.props.navigation.toggleDrawer()}>
                  <Image style={{width:22.8, height: 15}} source={require('../assets/images/menu.png')}/>
                  </TouchableOpacity>              */}
          </View>
        </View>
        <ScrollView>

          <View style={{ alignItems: 'center', marginVertical: 16 }}>
            <TouchableOpacity onPress={() => this.setState({ infomenuvisible: !this.state.infomenuvisible })}
              style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
              <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginLeft: 20, marginTop: 27.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>회원가입 정보</Text>
                <Image style={{ width: 40, height: 50, marginLeft: 55 }} source={require('../assets/images/eduicon1.png')} />
              </View>
            </TouchableOpacity>
            {
              this.state.infomenuvisible ? 
              <View style={{flexDirection:'row',
                      justifyContent: 'space-evenly'}}>
                      <TouchableOpacity onPress={() => this.setState({ userinfo_visible: true })}
                      style={{marginLeft:20,marginRight:19,justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.37, height:28,marginVertical:10}}>
                      <View style={{width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                      <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>내 정보</Text>
                      </View>
                      </TouchableOpacity>   
    
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('MyTerms')}
                      style={{marginRight:19,justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.37, height:28,marginVertical:10}}>
                      <View style={{width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                      <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>약관동의서확인</Text>
                      </View>
                      </TouchableOpacity>   
    
              </View> : null
            }
            {/* 갤러리 서비스 메뉴들
              { 
                    this.state.gallerymenuVisible ? <View></View>
                     : <Galleryservicemenu />
              } */}
            {
              this.state.user._data.type == '게스트' ? null :
                <View>
                  <TouchableOpacity onPress={() => this.setState({userinfo_visible2: true})}
                    style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
                    <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ marginLeft: 20, marginTop: 27.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>스케쥴 확인</Text>
                      <Image style={{ width: 40, height: 40, marginLeft: 78 }} source={require('../assets/images/sc.png')} />
                    </View>
                  </TouchableOpacity>


                  <TouchableOpacity onPress={() => this.setState({userinfo_visible3: true})}
                    style={{ justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12, width: WIDTH * 0.77, height: 79, marginVertical: 10 }}>
                    <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ marginLeft: 20, marginTop: 27.5, marginBottom: 23.5, fontFamily: 'KBFGDisplay-Bold', fontSize: 25, fontWeight: 'bold', color: '#200d14' }}>숙소/버스/식사</Text>
                      <Image style={{ width: 45, height: 30, marginLeft: 35 }} source={require('../assets/images/eduicon5.png')} />
                    </View>
                  </TouchableOpacity>
                  {/* {
                    this.state.menuVisible ? this.state.user._data.type == '드라이버' ? <Myinfomenu1 /> : <Myinfomenu />
                      : <View></View>
                  } */}
                </View>
            }

          </View>
        </ScrollView>
      </View>

    );
  }
}
export default MyInfoScreen