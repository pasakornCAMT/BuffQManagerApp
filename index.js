import { AppRegistry } from 'react-native';
import App from './src/App';
import React from 'react';

import {Provider} from 'react-redux'
import configureStore from './configureStore'


const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)
AppRegistry.registerComponent('BuffQManagerApp', () => ReduxApp);
