import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import BookingFormData from '../main-components/booking-form-data';
import RecommendTable from '../main-components/recommend-table';
import tableDetail from './table-detail';

class BookingDetail extends Component {
    static navigationOptions = {
        title: 'Booking Detail',
    };

    render() {
        const { bookingItem } = this.props.bookingDetail
        const { tableLayout } = this.props.tableLayout
        return (
            <View style={styles.container}>
                <BookingFormData bookingItem={bookingItem} />
                {
                    bookingItem.status == 'arriving' ? (
                        <RecommendTable tableLayout={tableLayout} numOfCustomer={bookingItem.numOfCustomer}/>
                    ) : null
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },
});

function mapStateToProps(state) {
    return {
        bookingDetail: state.bookingDetail,
        tableLayout: state.tableLayout,
    }
}

export default connect(mapStateToProps)(BookingDetail)