import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import BookingFormData from '../main-components/booking-form-data';

class BookingDetail extends Component {
    static navigationOptions = {
        title: 'Booking Detail',
    };

    render() {
        const { bookingItem } = this.props.bookingDetail
        return (
            <View style={styles.container}>
                <BookingFormData bookingItem={bookingItem}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

function mapStateToProps(state) {
    return {
        bookingDetail: state.bookingDetail
    }
}

export default connect(mapStateToProps)(BookingDetail)