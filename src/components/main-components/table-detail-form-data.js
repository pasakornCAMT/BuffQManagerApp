import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Picker, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Divider } from 'react-native-elements'

class TableDetailFormData extends Component {
    render() {
        const { tableItem } = this.props
        return (
            <ScrollView>
                <View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                    <View style={styles.detailContainer}>
                        <Text style={styles.left}>Table </Text>
                        <Text style={styles.right}>{tableItem.table}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                    <View style={styles.detailContainer}>
                        <Text style={styles.left}>Booking ID </Text>
                        <Text style={styles.right}>{tableItem.bookingId}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                    <View style={styles.detailContainer}>
                        <Text style={styles.left}>Customer </Text>
                        <Text style={styles.right}>{tableItem.customer}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                    <View style={styles.detailContainer}>
                        <Text style={styles.left}>Customer_Phone </Text>
                        <Text style={styles.right}>{tableItem.customer_phone}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                    <View style={styles.detailContainer}>
                        <Text style={styles.left}>Seats </Text>
                        <Text style={styles.right}>{tableItem.seat}</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#dcdde1' }} />
                </View>
            </ScrollView>
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

function mapStateToProps(state) {
    return {
        tableDetail: state.tableDetail,
        bookingBoard: state.bookingBoard
    }
}



export default connect(mapStateToProps)(TableDetailFormData);
