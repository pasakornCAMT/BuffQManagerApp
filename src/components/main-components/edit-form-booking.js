import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, CheckBox } from 'react-native-elements'
import { connect } from 'react-redux';
import Spinner from 'react-native-number-spinner';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    editNumOfCustomer,
    upNumOfCustomer,
    downNumOfCustomer,
    onEditName,
    onEditPhoneNumber,
    editDrink,
} from '../../actions/booking-detail-action';
import { updateBookingIntoFirebase } from '../../actions/firebase-action';

class EditFormBooking extends Component {
    onPressConfirm() {
        const { numOfCustomer, customer, phone, drink, numOfAdult, numOfChild } = this.props.bookingDetail
        const { bookingItem } = this.props.bookingDetail
        const { restaurant } = this.props.restaurant
        var updatedData = {
            customer: customer,
            phone: phone,
            totalPrice: this.calculateTotalPrice()
        }
        if (restaurant.childPrice) {
            updatedData.numOfAdult = numOfAdult
            updatedData.numOfChild = numOfChild
        } else {
            updatedData.numOfCustomer = numOfCustomer
        }
        if (restaurant.drink) {
            updatedData.includeDrink = drink
        }
        updateBookingIntoFirebase(bookingItem, updatedData)
        Alert.alert('Updating Success')
    }

    calculateTotalPrice() {
        const { numOfCustomer, numOfAdult, numOfChild } = this.props.bookingDetail
        const isSelectDrink = this.props.bookingDetail.drink
        const { drink, childPrice, price } = this.props.restaurant.restaurant
        var totalPrice = 0
        if (isSelectDrink) {
            if (childPrice) {
                var sumAdultPrice = price + drink
                var sumChildPrice = childPrice + drink
                totalPrice = (numOfAdult * sumAdultPrice) + (numOfChild * sumChildPrice)
            } else {
                totalPrice = (numOfCustomer * (price + drink))
            }
        } else {
            if (childPrice) {
                totalPrice = (numOfAdult * price) + (numOfChild * childPrice)
            } else {
                totalPrice = (numOfCustomer * price)
            }
        }
        return totalPrice
    }

    render() {
        //const { bookingItem } = this.props.bookingDetail
        const { numOfCustomer, customer, phone, drink, numOfAdult, numOfChild, invalidName, invalidPhone } = this.props.bookingDetail
        const { restaurant } = this.props.restaurant
        return (
            <ScrollView>
                <View style={styles.container}>
                    <FormLabel>Name</FormLabel>
                    <FormInput
                        value={customer}
                        underlineColorAndroid="#ccc"
                        onChangeText={(name) => this.props.onEditName(name)}
                    />
                    {
                        customer.length == 0 ? (
                            <FormValidationMessage>The customer’s name input field is empty</FormValidationMessage>
                        ) : null
                    }
                    {
                        invalidName ? (
                            <FormValidationMessage>The customer’s name input field is incorrect format</FormValidationMessage>
                        ) : null
                    }
                    <FormLabel>Phone</FormLabel>
                    <FormInput
                        value={phone}
                        underlineColorAndroid="#ccc"
                        onChangeText={(phone) => this.props.onEditPhoneNumber(phone)}
                    />
                    {
                        phone.length == 0 ? (
                            <FormValidationMessage>The customer’s phone number input field is empty</FormValidationMessage>
                        ) : null
                    }
                    {
                        invalidPhone ? (
                            <FormValidationMessage>The customer’s phone number input field is incorrect format</FormValidationMessage>
                        ) : null
                    }
                    {
                        restaurant.childPrice ? (
                            <View style={styles.customer}>
                                <FormLabel>Adult</FormLabel>
                                <View style={styles.numPicker}>
                                    <Icon.Button
                                        backgroundColor='#0984e3'
                                        name="arrow-down"
                                        size={15}
                                        iconStyle={{ paddingLeft: 10 }}
                                    //onPress={this.props.downNumOfCustomer}
                                    />
                                    <Text style={styles.customerText}>{numOfAdult}</Text>
                                    <Icon.Button
                                        backgroundColor='#0984e3'
                                        name="arrow-up"
                                        size={15}
                                        iconStyle={{ paddingLeft: 10 }}
                                    //onPress={this.props.upNumOfCustomer}
                                    />
                                </View>
                                <FormLabel>Child</FormLabel>
                                <View style={styles.numPicker}>
                                    <Icon.Button
                                        backgroundColor='#6c5ce7'
                                        name="arrow-down"
                                        size={15}
                                        iconStyle={{ paddingLeft: 10 }}
                                    //onPress={this.props.downNumOfCustomer}
                                    />
                                    <Text style={styles.customerText}>{numOfChild}</Text>
                                    <Icon.Button
                                        backgroundColor='#6c5ce7'
                                        name="arrow-up"
                                        size={15}
                                        iconStyle={{ paddingLeft: 10 }}
                                    //onPress={this.props.upNumOfCustomer}
                                    />
                                </View>
                            </View>
                        ) : (
                                <View style={styles.customer}>
                                    <FormLabel>Customer</FormLabel>
                                    <View style={styles.numPicker}>
                                        <Icon.Button
                                            backgroundColor='#2C3A47'
                                            name="arrow-down"
                                            size={15}
                                            iconStyle={{ paddingLeft: 10 }}
                                            onPress={this.props.downNumOfCustomer}
                                        />
                                        <Text style={styles.customerText}>{numOfCustomer}</Text>
                                        <Icon.Button
                                            backgroundColor='#2C3A47'
                                            name="arrow-up"
                                            size={15}
                                            iconStyle={{ paddingLeft: 10 }}
                                            onPress={this.props.upNumOfCustomer}
                                        />
                                    </View>
                                </View>
                            )
                    }
                    <CheckBox
                        title='Including a drink'
                        checked={drink}
                        checkedColor='#2C3A47'
                        onPress={this.props.editDrink}
                    />
                    {
                        drink ? (<Text style={{ paddingLeft: 10 }}>+{restaurant.drink} THB per each</Text>) : null
                    }
                    <View style={{ marginVertical: 10 }}>
                        <Button
                            title='Confirm'
                            borderRadius={8}
                            backgroundColor='#dcdde1'
                            color='#2C3A47'
                            onPress={this.onPressConfirm.bind(this)}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //paddingBottom: 10,
        elevation: 2,
    },
    customer: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    numPicker: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 3,
    },
    customerText: {
        paddingHorizontal: 10,
        fontSize: 24,
        color: '#596275',
        fontWeight: 'bold',
    }
});

function mapStateToProps(state) {
    return {
        bookingDetail: state.bookingDetail,
        restaurant: state.restaurant
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editNumOfCustomer: (numOfCustomer) => dispatch(editNumOfCustomer(numOfCustomer)),
        upNumOfCustomer: () => dispatch(upNumOfCustomer()),
        downNumOfCustomer: () => dispatch(downNumOfCustomer()),
        onEditName: (name) => dispatch(onEditName(name)),
        onEditPhoneNumber: (phone) => dispatch(onEditPhoneNumber(phone)),
        editDrink: () => dispatch(editDrink())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFormBooking)
