'use strict';
import React, { Component } from 'react';
import BookingItem from '../sub-components/booking-item'
import {connect} from 'react-redux';
import FirebaseService from '../../services/firebase-service'
import {
  fetchBookingFromFirebase,
  fetchArrivingFromFirebase,
  fetchEatingFromFirebase,
  fetchFinishingFromFirebase,
} from '../../actions/customer-booking-board-action'
import {
  StyleSheet,
  View,
  Text,
  ListView,
  ScrollView,
} from 'react-native';

class ListViewBoard extends Component {

  componentWillMount(){
    this.props.fetchBookingFromFirebase();
    this.props.fetchArrivingFromFirebase();
    this.props.fetchEatingFromFirebase();
    this.props.fetchFinishingFromFirebase();
  }

  renderRow(bookingItem, sectionId, bookingRefId){
    return(
      <BookingItem
      bookingItem={bookingItem}
      onMoveForward={this.onMoveForward.bind(this)}
      onMoveBackward={this.onMoveBackward.bind(this)}
      bookingRefId={bookingRefId}/>
    )
  }

  onMoveForward(booking, id){
    const bookingRef = FirebaseService.child('bookings').child('users').child('1').child(id);
    let bookingStatus = '';
    switch (booking.status) {
      case 'booking':
        bookingStatus = 'arriving'
        break;
      case 'arriving':
        bookingStatus = 'eating'
        break;
      case 'eating':
        bookingStatus = 'finishing'
        break;
      default:
        bookingStatus = booking.status
        break;
    }
    bookingRef.update({
      status: bookingStatus
    });
  }

  onMoveBackward(booking, id){
    const bookingRef = FirebaseService.child('bookings').child('users').child('1').child(id);
    let bookingStatus = '';
    switch (booking.status) {
      case 'arriving':
        bookingStatus = 'booking'
        break;
      case 'eating':
        bookingStatus = 'arriving'
        break;
      case 'finishing':
        bookingStatus = 'eating'
        break;
      default:
        bookingStatus = booking.status
        break;
    }
    bookingRef.update({
      status: bookingStatus
    });
  }

  getEachColumnLength(list){
    try {
      let length = Object.keys(list).length;
      return length
    } catch (e) {
      return 0
    }
  }

  render() {
    const {
      bookingDataSource,
      arrivingDataSource,
      eatingDataSource,
      finishingDataSource,
      bookings,
      arrivings,
      eatings,
      finishings
    } = this.props.restaurant
    return (
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={styles.columnContainer}>
            <Text style={styles.boardHeader}>Booking({this.getEachColumnLength(bookings)})</Text>
            <ListView
              dataSource={bookingDataSource}
              renderRow={this.renderRow.bind(this)}
              enableEmptySections = {true}
            />
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.boardHeader}>Arriving({this.getEachColumnLength(arrivings)})</Text>
            <ListView
              dataSource={arrivingDataSource}
              renderRow={this.renderRow.bind(this)}
              enableEmptySections = {true}
            />
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.boardHeader}>Eating({this.getEachColumnLength(eatings)})</Text>
            <ListView
              dataSource={eatingDataSource}
              renderRow={this.renderRow.bind(this)}
              enableEmptySections = {true}
            />
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.boardHeader}>Finishing({this.getEachColumnLength(finishings)})</Text>
            <ListView
              dataSource={finishingDataSource}
              renderRow={this.renderRow.bind(this)}
              enableEmptySections = {true}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
  },
  boardHeader:{
    backgroundColor: '#38003c',
    borderColor: '#cccccc',
    borderBottomWidth: 1,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
  },
  columnContainer:{
    width: 200,
    borderWidth: 1,
    borderColor: '#c0d6e4',
    backgroundColor: '#38003c',
    alignContent: 'center',
  }
});

function mapStateToProps(state){
  return{
    restaurant: state.restaurant
  }
}

function mapDispatchToProps (dispatch){
  return{
    fetchBookingFromFirebase: () => dispatch(fetchBookingFromFirebase()),
    fetchArrivingFromFirebase: () => dispatch(fetchArrivingFromFirebase()),
    fetchEatingFromFirebase: () => dispatch(fetchEatingFromFirebase()),
    fetchFinishingFromFirebase: () => dispatch(fetchFinishingFromFirebase()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListViewBoard)
