'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

class BookingItem extends Component {
  render() {
    const {bookingItem, bookingRefId} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.bookingText}>
          {bookingItem.customer}
        </Text>
        <Text style={styles.bookingText}>
          {bookingItem.dateText}
        </Text>
        <Text style={styles.bookingText}>
          {bookingItem.timeText}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
          style={styles.backButton}
          onPress={()=>{this.props.onMoveToBooking(bookingItem, bookingRefId)}}
          >
            <Text style={styles.textBackButton}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight
          style={styles.nextButton}
          onPress={()=>{this.props.onMoveToArriving(bookingItem, bookingRefId)}}
          >
            <Text style={styles.textNextButton}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  bookingText:{
    fontSize: 16,
    fontWeight: 'bold',

  },
  buttonContainer:{
    flexDirection: 'row',
  },
  nextButton:{
    alignItems: 'center',
    backgroundColor: '#00ff85',
    width: '50%',
    height: 30,
  },
  backButton:{
    alignItems: 'center',
    backgroundColor: '#e90052',
    width: '50%',
    height: 30,
  },
  textBackButton:{
    color: 'white',
    fontWeight: 'bold',
    textAlignVertical: 'center'
  },
  textNextButton:{
    color: '#38003c',
    fontWeight: 'bold',
    textAlignVertical: 'center'
  }
});


export default BookingItem;
