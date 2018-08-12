import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class TableItem extends Component {
    render() {
        const { item } = this.props
        return (
            <View>
                <TouchableHighlight onPress={()=>this.props.onPressTableItem(item)}>
                <View style={[styles.itemContainer, { backgroundColor: item.available ? 'transparent':'tomato' }]}>
                    <Text style={styles.itemName}>Table: {item.table}</Text>
                    <Text style={styles.itemCode}>Seat: {item.seat}</Text>
                </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        height: 100,
    },
    itemName: {
        fontSize: 12,
        color: '#ccc',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 10,
        color: '#ccc',
    },
});

export default TableItem;
