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
    onSelectedItemsChange = selectedItem => {
        if(selectedItem !== ''){
            Alert.alert(
                'Alert',
                'Are you sure',
                [
                    { text: 'Cancel', style: 'cancel' },
                    {
                        text: 'OK', onPress: () => {
                            const { tableItem } = this.props.tableDetail
                            assignBookingToTable(selectedItem, tableItem.id)
                            this.redirectToTablesLayout();
                            changeStatusToEating(selectedItem.id)
                        }
                    },
                ]
            );
        }
    }
    onSelectReset() {
        Alert.alert(
            'Alert',
            'Are you sure',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        const { tableItem } = this.props.tableDetail
                        resetAssign(tableItem.id)
                        this.redirectToTablesLayout()
                    }
                },
            ]
        );

    }
    redirectToTablesLayout() {
        const { navigate } = this.props.navigation
        navigate('TablesLayout')
    }
    render() {
        const { tableItem } = this.props.tableDetail
        const { navigate } = this.props.navigation;
        const { arrivings } = this.props.bookingBoard
        return (
            <View style={styles.container}>
                <View style={styles.assignTable}>
                    <Picker
                        selectedValue={tableItem.customer_phone}
                        onValueChange={this.onSelectedItemsChange.bind(this)}
                        style={{ backgroundColor: "#ccc" }}>
                        <Picker.Item label="Select Booking..." value="" />
                        {
                            Object.values(arrivings).map((item, key) => (
                                <Picker.Item label={item.customer + '_' + item.phone} value={item} key={key} />
                            ))
                        }
                    </Picker>
                </View>
                <TableDetailFormData navigate={navigate} onSelectedItemsChange={this.onSelectedItemsChange.bind(this)} />
                <Button
                    title="Reset"
                    onPress={this.onSelectReset.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    assignTable: {
        width: '50%',
        marginVertical: 5,
    }
});

function mapStateToProps(state) {
    return {
        tableDetail: state.tableDetail,
        bookingBoard: state.bookingBoard
    }
}

export default connect(mapStateToProps)(TableDetail)
