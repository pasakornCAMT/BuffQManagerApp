import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class TableDetailFormData extends Component {
    render() {
        const { tableItem } = this.props.tableDetail
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.left}>Table: </Text>
                    <Text style={styles.right}>{tableItem.table}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.left}>Booking ID: </Text>
                    <Text style={styles.right}>{tableItem.bookingId}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.left}>Customer: </Text>
                    <Text style={styles.right}>{tableItem.customer}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.left}>Seats: </Text>
                    <Text style={styles.right}>{tableItem.seat}</Text>
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

function mapStateToProps(state) {
    return {
        tableDetail: state.tableDetail
    }
}

export default connect(mapStateToProps)(TableDetailFormData);
