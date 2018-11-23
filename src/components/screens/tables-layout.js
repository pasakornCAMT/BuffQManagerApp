import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import TablesGrid from '../main-components/tables-grid';
import { connect } from 'react-redux';
import { setTableDetailState } from '../../actions/table-detail-action'
import RecommendTable from '../main-components/recommend-table';
import { assignBookingToTable, changeStatusToEating, changeStatusWhenPressNext } from '../../actions/firebase-action';
import { Button } from 'react-native-elements'

class TablesLayout extends Component {
    static navigationOptions = {
        title: 'Assign Table',
    };
    onPressTableItem(tableItem) {
        const { bookingItem } = this.props.bookingDetail
        this.props.setTableDetailState(tableItem)
        assignBookingToTable(bookingItem, tableItem)

    }
    onPressConfirm(){
        const { bookingItem } = this.props.bookingDetail
        Alert.alert(
            'Alert',
            'Are you sure',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        //changeStatusToEating(bookingItem.id)
                        changeStatusWhenPressNext(bookingItem)
                        this.redirectToBookingBoard()
                    }
                },
            ]
        );
    }
    redirectToBookingBoard(){
        const { navigate } = this.props.navigation
        navigate('CustomerBookingBoard')
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TablesGrid onPressTableItem={this.onPressTableItem.bind(this)} />
                    <Button
                        title = 'Move to Eating'
                        onPress = {this.onPressConfirm.bind(this)}
                    />
                    <RecommendTable/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        elevation: 2,
        padding: 10,
    }
});

function mapStateToProps(state) {
    return {
        tableDetail: state.tableDetail,
        bookingDetail: state.bookingDetail,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setTableDetailState: (tableItem) => dispatch(setTableDetailState(tableItem)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TablesLayout)