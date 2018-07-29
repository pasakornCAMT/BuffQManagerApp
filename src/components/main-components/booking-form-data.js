import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class BookingFormData extends Component {
    render() {
        const { bookingItem } = this.props
        return (
            <View>
                <View style={styles.detailContainer}>
                    <Text style={styles.left}>Booking ID: </Text>
                    <Text style={styles.right}>{bookingItem.refId}</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.left}>Date: </Text>
                    <Text style={styles.right}>{bookingItem.dateText}</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.left}>Time: </Text>
                    <Text style={styles.right}>{bookingItem.timeText}</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.left}>Press date: </Text>
                    <Text style={styles.right}>{bookingItem.pressDate}</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.left}>Customer: </Text>
                    <Text style={styles.right}>{bookingItem.numOfCustomer} people</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    detailContainer: {
        flexDirection: 'row',
    },
    left: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    right: {
        fontSize: 16,
        marginLeft: 10,
    }
});

export default BookingFormData;
