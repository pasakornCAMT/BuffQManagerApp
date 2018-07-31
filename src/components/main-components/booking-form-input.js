import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button, CheckBox } from 'react-native-elements'
import Spinner from 'react-native-number-spinner';
import DatePicker from 'react-native-datepicker'

class BookingFormInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <FormLabel>Name</FormLabel>
                    <FormInput
                        underlineColorAndroid="#ccc"
                    />
                    <FormLabel>Phone</FormLabel>
                    <FormInput
                        underlineColorAndroid="#ccc"
                        keyboardType="numeric"
                    />
                    <View style={styles.customer}>
                        <View style={{ flexDirection: 'column' }}>
                            <FormLabel>Adult</FormLabel>
                            <View style={{ marginLeft: 15 }}>
                                <Spinner
                                    value={2}
                                    max={10}
                                    min={1}
                                    color="#39f"
                                    fontSize={16}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <FormLabel>Child</FormLabel>
                            <View style={{ marginLeft: 15 }}>
                                <Spinner
                                    value={2}
                                    max={10}
                                    min={1}
                                    color="#99f"
                                    fontSize={16}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.right}>
                    <DatePicker
                        style={{ width: '50%', paddingBottom: 10, }}
                        mode="time"
                        androidMode="spinner"
                        placeholder="select time"
                        format="hh-mm"
                        is24Hour={true}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                            }
                        }}
                        onDateChange={(date) => { }}
                    />
                    <CheckBox
                        title='Including a drink'
                        checked={true}
                        checkedColor='#38003c'
                        onPress={() => { }}
                    />
                    <Text style={styles.price}>Price: 0 THB</Text>
                    <View style={styles.button}>
                        <Button
                            backgroundColor="#00ff85"
                            color = '#38003c'
                            title="Confirm"
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
    price:{
        fontSize: 24,
        fontWeight: 'bold',
        color: "#38003c"
    },
});

export default BookingFormInput;
