import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class RestaurantFormData extends Component {
    render() {
        const { restaurant } = this.props
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.left}>Restaurant Name</Text>
                    <Text style={styles.right}>{restaurant.name}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.left}>Status</Text>
                    <Text style={styles.right}>{restaurant.status}</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
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

export default RestaurantFormData;


