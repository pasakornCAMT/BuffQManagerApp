import React, { Component } from 'react';
import Router from './system/router'
import FirebaseService from './services/firebase-service';
import Login from './components/screens/login';
import { Text } from 'react-native';
import InitialApp from './components/screens/initialApp';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      isUserAuthenticated: false,
      isAppReady: false,
    })
  }

  componentWillMount(){
    FirebaseService.auth().onAuthStateChanged((user) => {
      this.setState({ isUserAuthenticated: !!user, isAppReady: true });
    })
  }
  
  render() {
    const { isAppReady, isUserAuthenticated } = this.state;
    return (
      isAppReady ? (
        isUserAuthenticated ? (
          <Router />
        ) : (
            <Login/>
          )
      ) : (
          <InitialApp/>
        )
    )
  }
}
