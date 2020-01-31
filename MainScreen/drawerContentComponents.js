import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import SIcon from 'react-native-vector-icons/SimpleLineIcons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import { Divider, Badge } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
class EventInfoPage extends Component { //대회안내
    state = {
        isModalVisible0: false, //대회소개
        isModalVisible1: false, //코스소개
        isModalVisible2: false, //실시간스코어
        isModalVisible3: false, //관람매너
    }
    
    render() {
        
        return (
            <View>
                {/* 모달창  대회개요
                <Modal style={{ marginTop: 136.9 }} isVisible={this.state.isModalVisible0}
                    onBackdropPress={() => this.setState({ isModalVisible0: false })}>
                    <ScrollView style={{ borderRadius: 20 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../assets/images/test.png')} resizeMode={'cover'} />

                            <TouchableOpacity onPress={() => this.setState({ isModalVisible0: false })}
                                style={{ position: 'absolute', top: 0, left: 280, right: 0, height: 62, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon color='#3f414f' size={24} name='close' />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Modal> */}

                <View style={{ width: WIDTH * 0.56 }}>
                    <ScrollView>
                        <TouchableOpacity onPress={() => this.setState({ isModalVisible0: true })}>
                            <Text style={{ marginTop: 25, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>대회개요</Text>
                        </TouchableOpacity>
                        <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                        <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>코스소개</Text>
                        <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                        <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>실시간스코어</Text>
                        <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                        <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>관람정책 및</Text>
                        <Text style={{ marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>반입금지 물품</Text>
                        <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede', marginBottom: 100 }} />
                    </ScrollView>
                </View>
            </View>

        )
    }
}

class EduPage extends Component { //교육프로그램
    render() {
        return (
            <View>
                <ScrollView>
                    <Text style={{ marginTop: 25, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>기본사항</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>출입 비표 및</Text>
                    <Text style={{ marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>관람티켓 운영</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>교육영상</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>보험</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede', marginBottom: 100 }} />
                </ScrollView>
            </View>
        )
    }
}

class BusinessPage extends Component { //업무소개
    render() {
        return (
            <View>
                <ScrollView>
                    <Text style={{ marginTop: 25, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>갤러리 서비스</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 30.5, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>티켓 판매 및 교환처</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>티켓 검표</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>안내 데스크</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>갤러리플라자 지원</Text>

                    <Text style={{ marginTop: 46, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>대회지원</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 30.5, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>협회지원</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>프레스룸 지원</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>안내 데스크</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>미디어센터 지원</Text>

                    <Text style={{ marginTop: 46, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>경기지원</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 30.5, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>코스 식음 관리</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>대회홍보물 관리</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>물품관리</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>드라이빙 레인지 운영</Text>

                    <Text style={{ marginTop: 46, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>마샬</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 30.5, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>고정마샬: 공통사항</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>고정마샬: 티마샬</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>고정마샬: 페어웨이마샬</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>고정마샬: 크로스마샬</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>고정마샬: 그린마샬</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>이동마샬</Text>

                    <Text style={{ marginTop: 46, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>스코어</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 30.5, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>이동 스코어</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>종합 스코어</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>대형 스코어</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>중형 스코어</Text>

                    <Text style={{ marginTop: 46, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>셔틀버스/주차/</Text>
                    <Text style={{ marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>교통지원</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 30.5, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>셔틀버스 지원</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>주차/교통 지원</Text>
                    <Text style={{ marginTop: 46, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>슈퍼바이저</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede', marginBottom: 100 }} />

                </ScrollView>
            </View>
        )
    }
}

class ComuPage extends Component { //소통광장
    render() {
        return (
            <View>
                <ScrollView>
                    <Text style={{ marginTop: 25, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>공지사항</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>자주 묻는 질문</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>문의 게시판</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>활동 사진</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>설문 조사</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede', marginBottom: 100 }} />
                </ScrollView>
            </View>
        )
    }
}

class MyPage extends Component { //내정보
    render() {
        return (
            <View>
                <ScrollView>
                    <Text style={{ marginTop: 25, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>회원가입 정보</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>스케쥴 확인</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 84, marginLeft: 28, fontFamily: 'GodoM', fontSize: 20, fontWeight: 'bold', color: '#200d14' }}>복리후생 안내</Text>
                    <Divider style={{ width: WIDTH * 0.56, height: 1, marginTop: 6.5, backgroundColor: '#dedede' }} />
                    <Text style={{ marginTop: 30.5, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14' }}>숙박</Text>
                    <Text style={{ marginTop: 21, marginLeft: 28, fontFamily: 'GodoM', fontSize: 15, fontWeight: '500', color: '#200d14', marginBottom: 100 }}>셔틀버스</Text>
                </ScrollView>
            </View>
        )
    }
}

export default class drawerContentComponents extends Component {

    navigateToScreen = (route) => (
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });
            this.props.navigation.dispatch(navigateAction);
        })

    state = {
        isVisible0: true, //대회안내
        isVisible1: false, //교육프로그램
        isVisible2: false, //업무소개
        isVisible3: false, //소통광장
        isVisible4: false, //내정보
        user: this.props.navigation.getParam('user'),
    }
    render() {
        const Compage = ({ }) => {
            if (this.state.isVisible0) {
                return (
                    <EventInfoPage />
                );
            } else if (this.state.isVisible1) {
                return (
                    <EduPage />
                )
            } else if (this.state.isVisible2) {
                return (
                    <BusinessPage />
                )
            } else if (this.state.isVisible3) {
                return (
                    <ComuPage />
                )
            } else if (this.state.isVisible4) {
                return (
                    <MyPage />
                )
            }
        }
        return (
            <View style={styles.headerContainer}>
                <View style={{ width: WIDTH * 0.96, height: 218, backgroundColor: '#ffb400' }} >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: WIDTH * 0.82 }}></View>
                        <TouchableOpacity style={{ width: 35.8 }}
                            onPress={() => this.props.navigation.closeDrawer()}
                            style={{ justifyContent: 'center', borderRadius: 12, width: 24, height: 24, marginTop: 48, marginRight: 30 }}>
                            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Icon color='#ffffff' size={24} name='close' />
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Image source={require('../assets/images/user.png')} resizeMode="contain" style={{ margin: 15, width: 67.3, height: 67.3 }} />
                        <View style={{ justifyContent: 'center', marginRight: 120 }}>
                            <Text style={{ fontFamily: 'GodoM', fontSize: 21, fontWeight: '500', color: '#ffffff' }}>김대희님,</Text>
                            <Text style={{ fontFamily: 'GodoM', fontSize: 3 }}> </Text>
                            <Text style={{ fontFamily: 'GodoM', fontSize: 13, fontWeight: '500', color: '#ffffff' }}>오늘도 좋은하루 되세요!</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 26.6 }}>

                        <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 28 }} onPress={() => this.props.navigation.navigate('Main')}>
                            <Icon color='#ffffff' size={18.8} name='home' />
                            <Text style={{ marginLeft: 10.4, fontFamily: 'GodoM', fontSize: 17, fontWeight: '500', color: '#ffffff' }}>홈</Text>
                        </TouchableOpacity>


                        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Montalk')} style={{ flexDirection: 'row', marginLeft: 30 }}>

                            <Image source={require('../assets/images/message.png')} style={{ width: 18, height: 18 }} />
                            <Text style={{ marginLeft: 5.4, fontFamily: 'GodoM', fontSize: 17, fontWeight: '500', color: '#ffffff' }}>몬톡</Text>
                            <Badge badgeStyle={{ width: 13, height: 11.5, borderRadius: 7, backgroundColor: '#ff6969', borderWidth: 0 }}
                                status="error"
                                containerStyle={{ position: 'absolute', bottom: -0.5, left: -4 }}
                                value="21"
                                textStyle={{ fontFamily: 'GodoM', fontSize: 6, fontWeight: 'bold', color: '#ffffff' }}
                            />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                            <Icon color='#ffffff' size={18.8} name='setting' />
                            <Text style={{ marginLeft: 5.4, fontFamily: 'GodoM', fontSize: 17, fontWeight: '500', color: '#ffffff' }}>설정</Text>
                        </View> */}

                    </View>
                </View>
                
                <View style={{ flexDirection: 'row' }}>
                
                    <ScrollView style={{ width: 137, height: 594, backgroundColor: '#f2f2f2' }}>

                        {
                            this.state.isVisible0 ? <View style={{ alignItems: 'center', marginLeft: 14, marginTop: 34 }}>
                                <View style={{ width: 120, height: 37, backgroundColor: '#200d14' }}>
                                    <Text style={{ textAlign: 'left', fontFamily: 'GodoM', fontSize: 17, fontWeight: '500', color: '#ffffff', marginTop: 10, marginLeft: 8 }} onPress={() => this.setState({ isVisible0: true, isVisible1: false, isVisible2: false, isVisible3: false, isVisible4: false })}>대회안내</Text>
                                </View>
                            </View>
                                : <View style={{ marginLeft: 22, marginTop: 44 }}>
                                    <Text style={styles.screenTextStyle} onPress={() => this.setState({ isVisible0: true, isVisible1: false, isVisible2: false, isVisible3: false, isVisible4: false })}>
                                        대회안내</Text>
                                </View>
                        }

                        {
                            this.state.isVisible1 ? <View style={{ alignItems: 'center', marginLeft: 14, marginTop: 42 }}>
                                <ImageBackground style={{ width: 120, height: 37, backgroundColor: '#200d14' }}>
                                    <Text style={{ fontFamily: 'GodoM', fontSize: 17, fontWeight: '500', color: '#ffffff', marginTop: 10, marginLeft: 8 }} onPress={() => this.setState({ isVisible0: false, isVisible1: true, isVisible2: false, isVisible3: false, isVisible4: false })}>교육프로그램</Text>
                                </ImageBackground>
                            </View>
                                : <View style={{ marginLeft: 22, marginTop: 44 }}>
                                    <Text style={styles.screenTextStyle} onPress={() => this.setState({ isVisible0: false, isVisible1: true, isVisible2: false, isVisible3: false, isVisible4: false })}>
                                        교육프로그램</Text>
                                </View>
                        }
                        {
                            this.state.isVisible2 ? <View style={{ alignItems: 'center', marginLeft: 14, marginTop: 42 }}>
                                <ImageBackground style={{ width: 120, height: 37, backgroundColor: '#200d14' }}>
                                    <Text style={{ fontFamily: 'GodoM', fontSize: 17, fontWeight: '500', color: '#ffffff', marginTop: 10, marginLeft: 8 }} onPress={() => this.setState({ isVisible0: false, isVisible1: false, isVisible2: true, isVisible3: false, isVisible4: false })}>업무소개</Text>
                                </ImageBackground>
                            </View>
                                : <View style={{ marginLeft: 22, marginTop: 44 }}>
                                    <Text style={styles.screenTextStyle} onPress={() => this.setState({ isVisible0: false, isVisible1: false, isVisible2: true, isVisible3: false, isVisible4: false })}>
                                        업무소개</Text>
                                </View>
                        }
                        {
                            this.state.isVisible3 ? <View style={{ alignItems: 'center', marginLeft: 14, marginTop: 42 }}>
                                <ImageBackground style={{ width: 120, height: 37, backgroundColor: '#200d14' }}>
                                    <Text style={{ fontFamily: 'GodoM', fontSize: 17, fontWeight: '500', color: '#ffffff', marginTop: 10, marginLeft: 8 }} onPress={() => this.setState({ isVisible0: false, isVisible1: false, isVisible2: false, isVisible3: true, isVisible4: false })}>소통광장</Text>
                                </ImageBackground>
                            </View>
                                : <View style={{ marginLeft: 22, marginTop: 44 }}>
                                    <Text style={styles.screenTextStyle} onPress={() => this.setState({ isVisible0: false, isVisible1: false, isVisible2: false, isVisible3: true, isVisible4: false })}>
                                        소통광장</Text>
                                </View>
                        }
                        {
                            this.state.isVisible4 ? <View style={{ alignItems: 'center', marginLeft: 14, marginTop: 42 }}>
                                <ImageBackground style={{ width: 120, height: 37, backgroundColor: '#200d14' }}>
                                    <Text style={{ fontFamily: 'GodoM', fontSize: 17, fontWeight: '500', color: '#ffffff', marginTop: 10, marginLeft: 8 }} onPress={() => this.setState({ isVisible0: false, isVisible1: false, isVisible2: false, isVisible3: false, isVisible4: true })}>내정보</Text>
                                </ImageBackground>
                            </View>
                                : <View style={{ marginLeft: 22, marginTop: 44 }}>
                                    <Text style={styles.screenTextStyle} onPress={() => this.setState({ isVisible0: false, isVisible1: false, isVisible2: false, isVisible3: false, isVisible4: true })}>
                                        내정보</Text>
                                </View>
                        }
                        <View style={{ height: HEIGHT * 0.22 }}></View>

                        <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 50.1, justifyContent: 'center' }}>
                            <MIcon size={18} name='gps-fixed' />
                            {/* <Image style={{wdith:18,height:18}} source={require('../assets/images/gps1.png')}/> */}
                            <Text style={{ marginTop: 2, marginLeft: 2.9, fontFamily: 'GodoM', fontSize: 13, fontWeight: '500', color: '#200d14' }}>현재위치</Text>
                        </TouchableOpacity>

                    </ScrollView>
                    <View>
                        <Compage />
                    </View>
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    headerContainer: {
        height: 218,
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: {
        paddingTop: 20
    },
    screenStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 22,
        marginTop: 51
    },
    screenTextStyle: {
        fontFamily: 'GodoM', fontSize: 17,
        fontWeight: '500',
        color: '#200d14',
    },

});