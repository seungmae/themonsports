// import { NavigationActions } from 'react-navigation';
// import { combineReducers } from 'redux';
// import { AppContainer } from '../navigations/AppNavigation';
// import firebase from 'react-native-firebase';

// // Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppContainer.router.getActionForPathAndParams('LoginStack');
// const initialNavState = AppContainer.router.getStateForAction(
//   firstAction
// );

// function nav(state = initialNavState, action) {
//   let nextState;
//   switch (action.type) {
//     case 'Login':
//       nextState = AppContainer.router.getStateForAction(
//         NavigationActions.navigate({ routeName: 'Main' }),
//         state
//       );
//       break;
//     case 'Logout':
//       try {
//         firebase.auth().signOut();
//         nextState = AppContainer.router.getStateForAction(
//           NavigationActions.navigate({ routeName: 'Login' }),
//           state
//         );
//       } catch (e) {
//         console.log(e);
//       }
//       break;    
//     default:
//       nextState = AppContainer.router.getStateForAction(action, state);
//       break;
//   }

//   // Simply return the original `state` if `nextState` is null or undefined.
//   return nextState || state;
// }

// const initialAuthState = { isLoggedIn: false };

// function auth(state = initialAuthState, action) {
//   switch (action.type) {
//     case 'Login':
//       return { ...state, isLoggedIn: true, user: action.user };
//     case 'Logout':
//       return { ...state, isLoggedIn: false, user: {} };
//     default:
//       return state;
//   }
// }


// const AppReducer = combineReducers({
//   nav,
//   auth
// });

// export default AppReducer;
