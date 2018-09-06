import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EditFormBooking from '../main-components/edit-form-booking';

class EditBooking extends Component {
    static navigationOptions = {
        title: 'Edit Booking',
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <EditFormBooking />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
    },
    left: {
        width: '70%',
        backgroundColor: 'white'
    },
});

export default EditBooking;
