'use strict';
import React, { Component } from 'react';
import BookingItem from '../sub-components/booking-item'
import { connect } from 'react-redux';
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
  ActivityIndicator,
} from 'react-native';
import { changeStatusWhenPressNext, changeStatusWhenPressBack } from '../../actions/firebase-action';

class ListViewBoard extends Component {

  componentWillMount() {
    this.props.fetchBookingFromFirebase();
    this.props.fetchArrivingFromFirebase();
    this.props.fetchEatingFromFirebase();
    this.props.fetchFinishingFromFirebase();
  }

  renderRow(bookingItem) {
    return (
      <BookingItem
        bookingItem={bookingItem}
        onPressNext={this.onPressNext.bind(this)}
        onPressBack={this.onPressBack.bind(this)}
        onPressBookingItem={this.props.onPressBookingItem} />
    )
  }

  onPressNext(booking) {
    changeStatusWhenPressNext(booking)
  }

  onPressBack(booking) {
    changeStatusWhenPressBack(booking)
  }

  getEachColumnLength(list) {
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
      finishings,
      isFetching,
    } = this.props.bookingBoard
    return (
      <ScrollView horizontal={true}>
        {
          isFetching ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#38003c" style={styles.indicator} />
            </View>
          ) : (
              <View style={styles.container}>
                <View style={styles.columnContainer}>
                  <Text style={styles.boardHeader}>Booking({this.getEachColumnLength(bookings)})</Text>
                  <ListView
                    dataSource={bookingDataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                  />
                </View>
                <View style={styles.columnContainer}>
                  <Text style={styles.boardHeader}>Arriving({this.getEachColumnLength(arrivings)})</Text>
                  <ListView
                    dataSource={arrivingDataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                  />
                </View>
                <View style={styles.columnContainer}>
                  <Text style={styles.boardHeader}>Eating({this.getEachColumnLength(eatings)})</Text>
                  <ListView
                    dataSource={eatingDataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                  />
                </View>
                <View style={styles.columnContainer}>
                  <Text style={styles.boardHeader}>Finishing({this.getEachColumnLength(finishings)})</Text>
                  <ListView
                    dataSource={finishingDataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                  />
                </View>
              </View>
            )
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 8,
    marginHorizontal: 8,
  },
  boardHeader: {
    backgroundColor: '#dfe4ea',
    borderColor: '#cccccc',
    color: '#2f3542',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    elevation: 2,
  },
  columnContainer: {
    width: 230,
    marginTop: 8,
    marginHorizontal: 7,
    backgroundColor: '#ced6e0',
    alignContent: 'center',
    elevation: 2,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {

  }
});

function mapStateToProps(state) {
  return {
    bookingBoard: state.bookingBoard
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBookingFromFirebase: () => dispatch(fetchBookingFromFirebase()),
    fetchArrivingFromFirebase: () => dispatch(fetchArrivingFromFirebase()),
    fetchEatingFromFirebase: () => dispatch(fetchEatingFromFirebase()),
    fetchFinishingFromFirebase: () => dispatch(fetchFinishingFromFirebase()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListViewBoard)
