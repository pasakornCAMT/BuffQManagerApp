'use strict';

import React, { Component } from 'react';
import { Divider } from 'react-native-elements'
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
        <TouchableHighlight onPress={() => { this.props.onPressBookingItem(bookingItem) }}>
          <View style={styles.textContainer}>
            <View style={styles.spaceBetween}>
              <Text>Name</Text>
              <Text style={styles.bookingText}>
                {bookingItem.customer}
              </Text>
            </View>
            <Divider style={{ backgroundColor: '#dcdde1' }} />
            <View style={styles.spaceBetween}>
              <Text>Phone</Text>
              <Text style={styles.bookingText}>
                {bookingItem.phone}
              </Text>
            </View>
            <Divider style={{ backgroundColor: '#dcdde1' }} />
            <View style={styles.spaceBetween}>
              <Text>Booking Time</Text>
              <Text style={styles.bookingText}>
                {bookingItem.timeText}
              </Text>
            </View>
            <Divider style={{ backgroundColor: '#dcdde1' }} />
            <View style={styles.spaceBetween}>
              <Text>#</Text>
              <Text style={styles.bookingText}>
                {bookingItem.numOfCustomer} people
              </Text>
            </View>
            <Divider style={{ backgroundColor: '#dcdde1' }} />
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
    color: '#636e72'
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#55efc4',
    flex: 1,
    height: 30,
    marginLeft: 2.5,
    marginBottom: 5,
    marginRight: 5,
    borderRadius: 4,
    elevation: 2,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d63031',
    width: '50%',
    flex: 1,
    height: 30,
    marginRight: 2.5,
    marginBottom: 5,
    marginLeft: 5,
    borderRadius: 4,
    elevation: 2,
  },
  textBackButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  textNextButton: {
    color: '#38003c',
    fontWeight: 'bold',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});

export default BookingItem;
