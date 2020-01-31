import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Image,ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
const WIDTH = Dimensions.get('window').width;
class gamesupportmenu extends React.Component {
    state = {
        gamesupportmenu1: false, //코스 식음 관리
        gamesupportmenu2: false, //대회홍보물 관리
        gamesupportmenu3: false, //물품 관리
        gamesupportmenu4: false, //드라이빙 레인지 운영
      }
    render() {
        return (
            <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}>
                

                <View style={{flexDirection:'row',flexWrap: 'wrap',
                    justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.setState({ gamesupportmenu1: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10,marginRight:20}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>코스 식음 관리</Text>
                    </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>대회홍보물 관리</Text>
                    </View>
                    </TouchableOpacity>   
                </View>
                <View style={{flexDirection:'row',flexWrap: 'wrap',
                    justifyContent: 'space-evenly'}}>
                    <TouchableOpacity style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10,marginRight:20}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>물품관리</Text>
                    </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity onPress={() => this.setState({ gamesupportmenu4: true })}
                    style={{justifyContent: 'center',backgroundColor:'#eaeaee',borderRadius:5, width:WIDTH*0.35, height:28,marginVertical:10}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'bold',color: '#200d14'}}>드라이빙 레인징 운영</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            
        );
    }
    
  }

  export default gamesupportmenu;