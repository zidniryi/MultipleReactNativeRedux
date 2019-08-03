import { AppRegistry } from 'react-native';
import React from 'react';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers/counterReducer';

//3 Membuat Store 
const store = createStore(reducer)
const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => AppContainer);