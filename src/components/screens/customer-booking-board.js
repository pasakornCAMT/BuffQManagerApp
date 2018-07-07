'use strict';

import React, { Component } from 'react';
import ListViewBoard from '../main-components/listview-board'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class CustomerBookingBoard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListViewBoard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    
  }
});


export default CustomerBookingBoard;
