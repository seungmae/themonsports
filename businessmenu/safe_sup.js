import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Image,ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
class safe_sup extends React.Component {
    state = {
        gamesupportmenu1: false, //코스 식음 관리
        gamesupportmenu2: false, //대회홍보물 관리
        gamesupportmenu3: false, //물품 관리
        gamesupportmenu4: false, //드라이빙 레인지 운영
      }
    render() {
        return (
            <View>
                {/*모달창  티켓판매및교환처*/}
                

                <View style={{flexDirection:'row',flexWrap: 'wrap',
                    justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.setState({ gamesupportmenu1: true })}
                    style={{justifyContent: 'center',backgroundColor:'#ffffff',borderRadius:5, width:153, height:28,marginVertical:10,marginRight:20}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'500',color: '#200d14'}}>클럽하우스 정/후문 통제</Text>
                    </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity onPress={() => this.setState({ gamesupportmenu2: true })}
                    style={{justifyContent: 'center',backgroundColor:'#ffffff',borderRadius:5, width:86, height:28,marginVertical:10}}>
                    <View style={{justifyContent: 'center',width:'100%', flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'KBFGDisplay-Bold',fontSize:12,fontWeight:'500',color: '#200d14'}}>시설물 통제</Text>
                    </View>
                    </TouchableOpacity>   
                </View>
            </View>
            
        );
    }
    
  }

  export default safe_sup;