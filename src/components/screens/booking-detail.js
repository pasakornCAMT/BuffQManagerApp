import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import BookingFormData from '../main-components/booking-form-data';
import RecommendTable from '../main-components/recommend-table';
import tableDetail from './table-detail';
import { Button } from 'react-native-elements'
import { setBookingDetailState } from '../../actions/booking-detail-action';
import { removeBookingFromFirebase } from '../../actions/firebase-action';

class BookingDetail extends Component {
    static navigationOptions = {
        title: 'Booking Detail',
    };
    onPressAssignTable() {
        const { navigate } = this.props.navigation
        navigate('TablesLayout')
    }
    onPressEdit() {
        const { bookingItem } = this.props.bookingDetail
        const { navigate } = this.props.navigation
        this.props.setBookingDetailState(bookingItem)
        navigate('EditBooking')
    }
    onPressRemove() {
        const { id } = this.props.bookingDetail.bookingItem
        Alert.alert(
            'Alert',
            'Do you want to remove this booking information?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        removeBookingFromFirebase()
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
        const { bookingItem } = this.props.bookingDetail
        const { tableLayout } = this.props.tableLayout
        return (
            <ScrollView>
                <View style={styles.container}>
                    <BookingFormData bookingItem={bookingItem}/>
                    {
                        bookingItem.status == 'arriving' ? (
                            <View>
                                <Button
                                    title='Assign Table'
                                    buttonStyle={{ marginTop: 10 }}
                                    backgroundColor='#70a1ff'
                                    onPress={this.onPressAssignTable.bind(this)}
                                />
                            </View>

                        ) : null
                    }
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ width: '80%' }}>
                            <Button
                                title='Edit'
                                buttonStyle={{ marginTop: 10 }}
                                onPress={this.onPressEdit.bind(this)}
                                borderRadius={8}
                            />
                        </View>
                        <Button
                            title='Remove'
                            buttonStyle={{ marginTop: 10 }}
                            onPress={this.onPressRemove.bind(this)}
                            backgroundColor='#eb3b5a'
                            borderRadius={8}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        elevation: 2,
        marginVertical: 15,
    },
});

function mapStateToProps(state) {
    return {
        bookingDetail: state.bookingDetail,
        tableLayout: state.tableLayout,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setBookingDetailState: (bookingItem) => dispatch(setBookingDetailState(bookingItem)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail)