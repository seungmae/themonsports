import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { AppNavigator, middleware,appReducer,AppContainer } from './navigations/AppNavigation';
const store = createStore(appReducer, applyMiddleware(middleware));

export default class App extends React.Component {

  componentDidMount() {

  }
  render() {
    return (
     
      <Provider store={store}>
        <AppContainer />
      </Provider>
     
    )
    
  }
}
