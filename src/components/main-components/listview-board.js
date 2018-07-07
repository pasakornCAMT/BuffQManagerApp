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
      onMoveToArriving={this.onMoveToArriving.bind(this)}
      onMoveToBooking={this.onMoveToBooking.bind(this)}
      bookingRefId={bookingRefId}/>
    )
  }

  onMoveToArriving(booking, id){
    const bookingRef = FirebaseService.child('bookings').child('users').child('1').child(id);
    bookingRef.update({
      status: 'arriving'
    });
  }

  onMoveToBooking(booking, id){
    const bookingRef = FirebaseService.child('bookings').child('users').child('1').child(id);
    bookingRef.update({
      status: 'booking'
    });
  }

  render() {
    const {
      bookingDataSource,
      arrivingDataSource,
      eatingDataSource,
      finishingDataSource,
    } = this.props.restaurant
    return (
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={styles.columnContainer}>
            <Text style={styles.boardHeader}>Booking</Text>
            <ListView
              dataSource={bookingDataSource}
              renderRow={this.renderRow.bind(this)}
              enableEmptySections = {true}
            />
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.boardHeader}>Arriving</Text>
            <ListView
              dataSource={arrivingDataSource}
              renderRow={this.renderRow.bind(this)}
              enableEmptySections = {true}
            />
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.boardHeader}>Eating</Text>
            <ListView
              dataSource={eatingDataSource}
              renderRow={this.renderRow.bind(this)}
              enableEmptySections = {true}
            />
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.boardHeader}>Finishing</Text>
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
    borderWidth: 1,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    height: 30,
  },
  columnContainer:{
    width: 200,
    borderWidth: 1,
    borderColor: '#c0d6e4',
    backgroundColor: '#38003c'
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
