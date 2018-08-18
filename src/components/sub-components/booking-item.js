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
    const { bookingItem } = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={()=>{this.props.onPressBookingItem(bookingItem)}}>
          <View style={styles.textContainer}>
            <Text style={styles.bookingText}>
              {bookingItem.customer}
            </Text>
            <Text style={styles.bookingText}>
              {bookingItem.dateText}
            </Text>
            <Text style={styles.bookingText}>
              {bookingItem.timeText}
            </Text>
            <Text style={styles.bookingText}>
              {bookingItem.numOfCustomer} people
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.backButton}
            onPress={() => { this.props.onPressBack(bookingItem) }}
          >
            <Text style={styles.textBackButton}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.nextButton}
            onPress={() => { this.props.onPressNext(bookingItem) }}
          >
            <Text style={styles.textNextButton}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
    margin: 8,
    elevation: 2,
  },
  textContainer: {
    margin: 5,
  },
  bookingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ff85',
    width: '50%',
    height: 30,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e90052',
    width: '50%',
    height: 30,
  },
  textBackButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  textNextButton: {
    color: '#38003c',
    fontWeight: 'bold',
  }
});

export default BookingItem;
