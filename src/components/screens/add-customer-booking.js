import React, { Component } from 'react';
import { View, Text,  StyleSheet} from 'react-native';
import BookingFormInput from '../main-components/booking-form-input';

class AddCustomerBooking extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BookingFormInput/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      padding: 10,
    }
});


export default AddCustomerBooking


