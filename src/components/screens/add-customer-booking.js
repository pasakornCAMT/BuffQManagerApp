import React, { Component } from 'react';
import { View, Text,  StyleSheet, Alert} from 'react-native';
import BookingFormInput from '../main-components/booking-form-input';

class AddCustomerBooking extends Component {
  redirectToBookingBoard(){
    const { navigate } = this.props.navigation
    navigate('CustomerBookingBoard')
  }
  render() {
    return (
      <View style={styles.container}>
        <BookingFormInput redirectToBookingBoard={this.redirectToBookingBoard.bind(this)}/>
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


