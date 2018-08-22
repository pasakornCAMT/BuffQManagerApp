import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements'

class RestaurantFormData extends Component {
    render() {
        const { restaurant } = this.props
        return (
            <View>
                <View style={styles.detailContainer}>
                    <Text style={styles.left}>Status</Text>
                    <Text style={styles.right}>{restaurant.status}</Text>
                </View>
                <Divider style={{ backgroundColor: '#dcdde1' }} />
                <View style={styles.detailContainer}>
                    <Text style={styles.left}>Restaurant Name</Text>
                    <Text style={styles.right}>{restaurant.name}</Text>
                </View>
                <Divider style={{ backgroundColor: '#dcdde1' }} />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
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

});

export default RestaurantFormData;


