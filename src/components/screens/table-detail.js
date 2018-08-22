import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Picker } from 'react-native';
import { Button } from 'react-native-elements'
import TableDetailFormData from '../main-components/table-detail-form-data';
import { resetAssign, assignBookingToTable } from '../../actions/firebase-action';
import { connect } from 'react-redux';
import { changeStatusToEating } from '../../actions/firebase-action';

class TableDetail extends Component {
    static navigationOptions = {
        title: 'Table Detail',
    };
    render() {
        const { tableItem } = this.props.tableDetail
        return (
            <View style={styles.container}>
                <TableDetailFormData tableItem={tableItem}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        elevation: 2,
        marginTop: 15,
    },
});

function mapStateToProps(state) {
    return {
        tableDetail: state.tableDetail,
        bookingBoard: state.bookingBoard
    }
}

export default connect(mapStateToProps)(TableDetail)
