import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'

class BookingFormInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FormLabel>Name</FormLabel>
                <FormInput
                    underlineColorAndroid="#ccc"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingRight: '50%',
    }
});

export default BookingFormInput;
