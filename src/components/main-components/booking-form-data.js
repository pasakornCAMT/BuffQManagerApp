import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class BookingFormData extends Component {
    render() {
        const { bookingItem } = this.props
        return (
            <View>
                <View style={styles.detailContainer}>
                    <Text style={styles.left}>Booking ID: </Text>
                    <Text style={styles.right}>{bookingItem.id}</Text>
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
                <View style={styles.detailContainer}>
                    <Text style={styles.price}>{bookingItem.totalPrice} THB.- </Text>
                    {
                        bookingItem.payment ? (
                            <Text style={styles.paid}>PAID</Text>
                        ):(
                            <Text style={styles.notPaid}>NOT PAID</Text>
                        )
                    }
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
    },
    price:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#38003c'
    },
    paid:{
        fontSize: 24,
        fontWeight: 'bold',
        color: "green"
    },
    notPaid:{
        fontSize: 24,
        fontWeight: 'bold',
        color: "red"
    }
});

export default BookingFormData;
