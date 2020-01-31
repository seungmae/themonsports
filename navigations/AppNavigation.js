import { Dimensions, StyleSheet } from 'react-native';
import { createReduxContainer, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import {combineReducers} from 'redux';
import { createStackNavigator, createDrawerNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import LoginScreen from '../HomeScreen/LoginScreen'
import HomeScreen from '../HomeScreen/HomeScreen'
import SigninScreen from '../HomeScreen/SigninScreen'
import SignintypeScreen from '../HomeScreen/SignintypeScreen'
import SplashScreen from '../HomeScreen/SplashScreen'
import Signin_p_terms from '../RegisterScreen/p_agent/Signin_p_agent_terms'
import Signin_s_terms from '../RegisterScreen/s_agent/Signin_s_agent_terms'
import Signin_d_terms from '../RegisterScreen/driver/Signin_d_agent_terms'
import Signin_guest_terms from '../RegisterScreen/guest/Signin_guest_terms'
import Signin_p_agentScreen from '../RegisterScreen/p_agent/Signin_p_agent'
import Signin_p_agentScreen2 from '../RegisterScreen/p_agent/Signin_p_agent2'
import Signin_p_agentScreen3 from '../RegisterScreen/p_agent/Signin_p_agent3'
import Signin_p_agentScreen4 from '../RegisterScreen/p_agent/Signin_p_agent4'
import Signin_s_agentScreen from '../RegisterScreen/s_agent/Signin_s_agent'
import Signin_s_agentScreen2 from '../RegisterScreen/s_agent/Signin_s_agent2'
import Signin_s_agentScreen3 from '../RegisterScreen/s_agent/Signin_s_agent3'
import Signin_s_agentScreen4 from '../RegisterScreen/s_agent/Signin_s_agent4'
import Signin_d_agentScreen from '../RegisterScreen/driver/Signin_d_agent'
import Signin_d_agentScreen2 from '../RegisterScreen/driver/Signin_d_agent2'
import Signin_d_agentScreen3 from '../RegisterScreen/driver/Signin_d_agent3'
import Signin_d_agentScreen4 from '../RegisterScreen/driver/Signin_d_agent4'
import Signin_guestScreen from '../RegisterScreen/guest/guest_1'
import Signin_guestScreen2 from '../RegisterScreen/guest/guest_2'
import Signin_guestScreen3 from '../RegisterScreen/guest/guest_3'
import Signin_guestScreen4 from '../RegisterScreen/guest/guest_4'
import TermsScreen from '../RegisterScreen/ TermsScreen'
import TermsScreen2 from '../RegisterScreen/ TermsScreen2'
import TermsScreen3 from '../RegisterScreen/ TermsScreen3'
import MainScreen from '../MainScreen/MainScreen'
import EventInfoScreen from '../MainScreen/EventInfoScreen'
import EduprogramScreen from '../MainScreen/EduprogramScreen'
import IntroducebusinessScreen from '../MainScreen/IntroducebusinessScreen'
import IntroducebusinessScreen_sup from '../MainScreen/IntroducebusinessScreen_sup'
import ComunitysquareScreen from '../MainScreen/ComunitysquareScreen'
import MyTermsScreen from '../MainScreen/my_terms'
import MontalkScreen from '../MonTalk/MontalkScreen'
import ChatScreen from '../MonTalk/ChatScreen'
import drawerContentComponents from '../MainScreen/drawerContentComponents'
import MyInfoScreen from '../MainScreen/MyInfoScreen';
import firebaseregist from '../RegisterScreen/FirebaseRegist'


const WIDTH = Dimensions.get('window').width;
const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const Drawers = createDrawerNavigator(
    {
      Main: {
        screen: MainScreen,
      },
      EventInfo: {
        screen: EventInfoScreen
      },
      Edu: {
        screen: EduprogramScreen
      },
      Intro: {
        screen: IntroducebusinessScreen
      },
      Intro_sup: {
        screen: IntroducebusinessScreen_sup
      },
      Comu: {
        screen: ComunitysquareScreen
      },
      Montalk: {
        screen: MontalkScreen
      },
      // Chat: {
      //   screen: ChatScreen
      // },
      MyInfo: {
        screen: MyInfoScreen,
      },
    },
    {
      initialRouteName: 'Main',
      drawerPosition: 'right',
      drawerWidth: WIDTH*0.96,
      contentComponent: drawerContentComponents
    },
  )
  const HomeStack = createStackNavigator(
    {
      Home:{screen: HomeScreen},
      Splash: SplashScreen,
      Login: LoginScreen,
      Signin: SigninScreen,
      Signintype: SignintypeScreen,
    },
    {
      initialRouteName: 'Splash',
      headerMode: 'none'
    }
  )
  const SigninStack = createStackNavigator(
    {
      Signintype: SignintypeScreen,
      Signin_p_agent: Signin_p_agentScreen,
      Signin_p_agent2: Signin_p_agentScreen2,
      Signin_p_agent3: Signin_p_agentScreen3,
      Signin_p_agent4: Signin_p_agentScreen4,
      Signin_s_agent: Signin_s_agentScreen,
      Signin_s_agent2: Signin_s_agentScreen2,
      Signin_s_agent3: Signin_s_agentScreen3,
      Signin_s_agent4: Signin_s_agentScreen4,
      Signin_d_agent: Signin_d_agentScreen,
      Signin_d_agent2: Signin_d_agentScreen2,
      Signin_d_agent3: Signin_d_agentScreen3,
      Signin_d_agent4: Signin_d_agentScreen4,
      Signin_guest: Signin_guestScreen,
      Signin_guest2: Signin_guestScreen2,
      Signin_guest3: Signin_guestScreen3,
      Signin_guest4: Signin_guestScreen4,
      Signin_p_agent_terms:Signin_p_terms,
      Signin_s_agent_terms:Signin_s_terms,
      Signin_d_agent_terms:Signin_d_terms,
      Signin_guest_terms:Signin_guest_terms,
      Terms: TermsScreen,
      Terms2: TermsScreen2,
      Terms3: TermsScreen3,
      firebaseregists: firebaseregist,
    },
    {
      initialRouteName: 'Signintype',
      headerMode: 'none'
    }
  )
  const MainStack = createStackNavigator(
    {
      Main:{
        screen:MainScreen
      },
      EventInfo:{
        screen:EventInfoScreen
      },
      Edu:{
        screen:EduprogramScreen
      },
      Intro:{
        screen:IntroducebusinessScreen,
      },
      Intro_sup:{
        screen:IntroducebusinessScreen_sup
      },
      Comu:{
        screen:ComunitysquareScreen
      },
      Montalk:{
        screen:MontalkScreen
      },
      Chat:{
          screen:ChatScreen
      },
      MyInfo:{
        screen:MyInfoScreen
      },
      MyTerms:{
        screen:MyTermsScreen
      },
      Terms: TermsScreen,
      Terms2: TermsScreen2,
      Terms3: TermsScreen3,
      Drawer: Drawers,
    },
    {
      initialRouteName: 'Main',
      headerMode: 'none'
    }
  );
  
  const AppContainer = createAppContainer(createSwitchNavigator(
    {
      HomeL: HomeStack,
      SignL: SigninStack,
      MainL: MainStack
    },
    {
      initialRouteName: 'HomeL'
    }
  ));

const AppWithNavigationState = createReduxContainer(MainStack);

const mapStateToProps = state => ({
    state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);
const navReducer = createNavigationReducer(MainStack);
const appReducer = combineReducers({
    nav: navReducer
  });
  

export { AppContainer, AppNavigator, middleware,appReducer };
