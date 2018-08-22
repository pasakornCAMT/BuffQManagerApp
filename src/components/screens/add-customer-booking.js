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
      backgroundColor: 'white',
      marginTop: 15,
      paddingBottom: 20,
      elevation: 2,
    }
});


export default AddCustomerBooking


