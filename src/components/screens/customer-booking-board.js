'use strict';

import React, { Component } from 'react';
import ListViewBoard from '../main-components/listview-board'
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import {
  setBookingDetailState,
} from '../../actions/booking-detail-action'

class CustomerBookingBoard extends Component {
  onPressBookingItem(bookingItem){
    this.props.setBookingDetailState(bookingItem)
    this.navigateToBookingDetail()
  }
  navigateToBookingDetail(){
    const { navigate } = this.props.navigation;
    navigate('BookingDetail')
  }
  render() {
    return (
      <View style={styles.container}>
        <ListViewBoard onPressBookingItem={this.onPressBookingItem.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
  return {
      bookingDetail: state.bookingDetail
  }
}

function mapDispatchToProps (dispatch){
  return{
    setBookingDetailState: (bookingItem) => dispatch(setBookingDetailState(bookingItem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerBookingBoard)
