import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button, CheckBox } from 'react-native-elements'
import Spinner from 'react-native-number-spinner';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { insertNewBookingToFirebase } from '../../actions/firebase-action'

import {
    inputName,
    inputPhoneNumber,
    inputNumOfCustomer,
    inputNumOfAdult,
    inputNumOfChild,
    inputTime,
    selectDrink,
    recordPrice,
} from '../../actions/add-booking-action'

class BookingFormInput extends Component {
    onPressConfirm() {
        const { addBooking } = this.props
        const hasChild = this.props.restaurant.restaurant.childPrice
        const hasDrink = this.props.restaurant.restaurant.drink
        const { id } = this.props.restaurant.restaurant
        const price = this.calculateTotalPrice()
        insertNewBookingToFirebase(addBooking, hasChild, hasDrink, id, price)
    }
    calculateTotalPrice() {
        const { numOfCustomer, numOfAdult, numOfChild } = this.props.addBooking
        const isSelectDrink = this.props.addBooking.drink
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
        const { addBooking } = this.props
        const { restaurant } = this.props.restaurant
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <FormLabel>Name</FormLabel>
                    <FormInput
                        underlineColorAndroid="#ccc"
                        onChangeText={(name) => this.props.inputName(name)}
                        value={addBooking.name}
                    />
                    <FormLabel>Phone</FormLabel>
                    <FormInput
                        underlineColorAndroid="#ccc"
                        keyboardType="numeric"
                        onChangeText={(phone) => this.props.inputPhoneNumber(phone)}
                        value={addBooking.phone}
                    />
                    {
                        restaurant.childPrice ? (
                            <View style={styles.customer}>
                                <View style={{ flexDirection: 'column' }}>
                                    <FormLabel>Adult</FormLabel>
                                    <View style={{ marginLeft: 15 }}>
                                        <Spinner
                                            value={addBooking.numOfAdult}
                                            max={10}
                                            min={1}
                                            color="#39f"
                                            fontSize={16}
                                            onNumChange={(num) => this.props.inputNumOfAdult(num)}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <FormLabel>Child</FormLabel>
                                    <View style={{ marginLeft: 15 }}>
                                        <Spinner
                                            value={addBooking.numOfChild}
                                            max={10}
                                            min={0}
                                            color="#99f"
                                            fontSize={16}
                                            onNumChange={(num) => this.props.inputNumOfChild(num)}
                                        />
                                    </View>
                                </View>
                            </View>
                        ) : (
                                <View>
                                    <FormLabel>Customer</FormLabel>
                                    <View style={{ marginLeft: 15 }}>
                                        <Spinner
                                            value={addBooking.numOfCustomer}
                                            max={10}
                                            min={1}
                                            color="#38003c"
                                            fontSize={16}
                                            onNumChange={(num) => this.props.inputNumOfCustomer(num)}
                                        />
                                    </View>
                                </View>
                            )
                    }

                </View>
                <View style={styles.right}>
                    <DatePicker
                        style={{ width: '70%', paddingBottom: 10, }}
                        mode="time"
                        date={addBooking.timeText}
                        androidMode="spinner"
                        placeholder="select time"
                        format="HH:mm"
                        is24Hour={true}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                            },
                            dateInput: {
                                marginLeft: 38,
                                borderRadius: 4,
                            }
                        }}
                        onDateChange={(time) => this.props.inputTime(time)}
                    />
                    <CheckBox
                        title='Including a drink'
                        checked={addBooking.drink}
                        checkedColor='#38003c'
                        onPress={this.props.selectDrink}
                    />
                    {
                        addBooking.drink ? (<Text style={{ paddingLeft: 10 }}>+{restaurant.drink} THB per each</Text>) : null
                    }
                    <View style={styles.button}>
                        <Button
                            backgroundColor="#55efc4"
                            color='#38003c'
                            title="Confirm"
                            onPress={this.onPressConfirm.bind(this)}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    left: {
        flex: 1,
        flexDirection: 'column',
    },
    right: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
    },
    customer: {
        flexDirection: 'row',
    },
    button: {
        marginVertical: 10,
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#38003c"
    },
});

function mapStateToProps(state) {
    return {
        addBooking: state.addBooking,
        restaurant: state.restaurant,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputName: (name) => dispatch(inputName(name)),
        inputPhoneNumber: (phone) => dispatch(inputPhoneNumber(phone)),
        inputNumOfCustomer: (numOfCustomer) => dispatch(inputNumOfCustomer(numOfCustomer)),
        inputNumOfAdult: (numOfAdult) => dispatch(inputNumOfAdult(numOfAdult)),
        inputNumOfChild: (numOfChild) => dispatch(inputNumOfChild(numOfChild)),
        inputTime: (time) => dispatch(inputTime(time)),
        selectDrink: () => dispatch(selectDrink()),
        recordPrice: (price) => dispatch(recordPrice(price)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingFormInput)