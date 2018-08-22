import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { Divider } from 'react-native-elements'

class BookingFormData extends Component {
    render() {
        const { bookingItem } = this.props
        return (
                <View style={{marginRight: 5}}>
                    <View style={styles.detailContainer}>
                        <Text style={styles.left}>Booking ID </Text>
                        <Text style={styles.right}>{bookingItem.id}</Text>                       
                    </View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                    <View style={styles.detailContainer}>
                        <Text style={styles.left}>Name </Text>
                        <Text style={styles.right}>{bookingItem.customer}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                    <View style={styles.detailContainer}>
                        <Text style={styles.left}>Phone </Text>
                        <Text style={styles.right}>{bookingItem.phone}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                    <View style={styles.detailContainer}>
                        <Text style={styles.left}>Date </Text>
                        <Text style={styles.right}>{bookingItem.dateText}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                    <View style={styles.detailContainer}>
                        <Text style={styles.left}>Time </Text>
                        <Text style={styles.right}>{bookingItem.timeText}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                    <View style={styles.detailContainer}>
                        <Text style={styles.left}>Press date </Text>
                        <Text style={styles.right}>{bookingItem.pressDate}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                    <View style={styles.detailContainer}>
                        <Text style={styles.left}># </Text>
                        <Text style={styles.right}>{bookingItem.numOfCustomer} people</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                    <View style={styles.detailContainer}>
                        <Text style={styles.left}>Price </Text>
                        <Text style={styles.price}>{bookingItem.totalPrice} THB</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                    <View style={styles.detailContainer}>
                        <Text style={styles.left}>Status </Text>
                        {
                            bookingItem.payment ? (
                                <Text style={styles.paid}>PAID</Text>
                            ) : (
                                    <Text style={styles.notPaid}>NOT PAID</Text>
                                )
                        }
                    </View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    left: {
        fontSize: 18,
        color: '#636e72',
    },
    right: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#636e72'
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#38003c'
    },
    paid: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "green"
    },
    notPaid: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "red"
    }
});

export default BookingFormData;
