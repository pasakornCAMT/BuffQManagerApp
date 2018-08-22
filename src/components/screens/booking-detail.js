import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import BookingFormData from '../main-components/booking-form-data';
import RecommendTable from '../main-components/recommend-table';
import tableDetail from './table-detail';
import { Button } from 'react-native-elements'

class BookingDetail extends Component {
    static navigationOptions = {
        title: 'Booking Detail',
    };
    onPressAssignTable(){
        const {navigate} = this.props.navigation
        navigate('TablesLayout')
    }

    render() {
        const { bookingItem } = this.props.bookingDetail
        const { tableLayout } = this.props.tableLayout
        return (
            <ScrollView>
                <View style={styles.container}>
                    <BookingFormData bookingItem={bookingItem} />
                    {
                        bookingItem.status == 'arriving' ? (
                            <View>
                                <Button
                                    title='Assign Table'
                                    buttonStyle={{marginTop: 10}}
                                    backgroundColor = '#70a1ff'
                                    onPress = {this.onPressAssignTable.bind(this)}
                                />
                            </View>

                        ) : null
                    }

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

export default connect(mapStateToProps)(BookingDetail)