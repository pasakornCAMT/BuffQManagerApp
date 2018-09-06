'use strict';

import React, { Component } from 'react';
import ListViewBoard from '../main-components/listview-board'
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import { setBookingDetailState, } from '../../actions/booking-detail-action'
import { fetchRestaurantFromFirebase} from '../../actions/restaurant-action'
import { fetchTableLayoutFromFirebase } from '../../actions/table-layout-action'

class CustomerBookingBoard extends Component {
  componentWillMount() {
    this.props.fetchRestaurantFromFirebase()
    this.props.fetchTableLayoutFromFirebase()
  }
  onPressBookingItem(bookingItem) {
    this.props.setBookingDetailState(bookingItem)
    this.navigateToBookingDetail()
  }
  navigateToBookingDetail() {
    const { navigate } = this.props.navigation;
    navigate('BookingDetail')
  }
  navigateToTableLayout(booking) {
    this.props.setBookingDetailState(booking)
    const { navigate } = this.props.navigation;
    navigate('TablesLayout')
  }
  render() {
    return (
      <View style={styles.container}>
        <ListViewBoard
          onPressBookingItem={this.onPressBookingItem.bind(this)}
          assignTable={this.navigateToTableLayout.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

function mapStateToProps(state) {
  return {
    bookingDetail: state.bookingDetail,
    restaurant: state.restaurant,
    tableLayout: state.tableLayout,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setBookingDetailState: (bookingItem) => dispatch(setBookingDetailState(bookingItem)),
    fetchRestaurantFromFirebase: () => dispatch(fetchRestaurantFromFirebase()),
    fetchTableLayoutFromFirebase: () => dispatch(fetchTableLayoutFromFirebase()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerBookingBoard)
