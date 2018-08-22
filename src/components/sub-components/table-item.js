import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Divider } from 'react-native-elements'

class TableItem extends Component {
    render() {
        const { item } = this.props
        return (
            <View>
                <TouchableHighlight onPress={() => this.props.onPressTableItem(item)}>
                    <View style={[styles.itemContainer, 
                        { backgroundColor: item.available ? 'transparent' : '#a4b0be' }]}>
                        <Text style={{ fontWeight: 'bold' }}>Table {item.table}</Text>
                        <Divider style={{ backgroundColor: '#dcdde1' }} />
                        <View style={styles.spaceBtw}>
                            <Text>Seat</Text>
                            <Text style={styles.itemName}>{item.seat}</Text>
                        </View>
                        <Divider style={{ backgroundColor: '#dcdde1' }} />
                        {
                            item.available ? (
                                <Text style={styles.availableTxt}>Available</Text>
                            ) : (
                                <Text style={styles.unavailableTxt}>Unavailable</Text>
                            )
                        }
                        <Divider style={{ backgroundColor: '#dcdde1' }} />
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        //justifyContent: 'flex-end',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        height: 100,
        elevation: 1,
    },
    itemName: {
        fontSize: 12,
        color: '#2f3640',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 10,
        color: '#2f3640',
    },
    spaceBtw: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    availableTxt: {
        color: '#55efc4',
        fontWeight: 'bold'
    },
    unavailableTxt: {
        color: '#d63031',
        fontWeight: 'bold'
    }
});

export default TableItem;
