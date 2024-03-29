import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { 
    currentDate,
    setDate, 
    fetchBookingFromFirebase, 
    fetchArrivingFromFirebase, 
    fetchFinishingFromFirebase, 
    fetchEatingFromFirebase
} from '../../actions/customer-booking-board-action';
import { fetchDataHistoryFromFirebase } from '../../actions/data-history-action';

class BookingBoardDate extends Component {
    changeDate(date){
        setDate(date);
        this.props.fetchBookingFromFirebase();
        this.props.fetchArrivingFromFirebase();
        this.props.fetchEatingFromFirebase();
        this.props.fetchFinishingFromFirebase();
        this.props.fetchDataHistoryFromFirebase();
    }
    render() {
        return (
            <DatePicker
                style={{ width: '50%', paddingTop: 10, }}
                mode="date"
                date={currentDate}
                androidMode="spinner"
                placeholder="select date"
                format="DD-M-YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                    },
                    dateInput: {
                        marginLeft: 38,
                        borderRadius: 4,
                    }
                }}
            onDateChange={(date)=>this.changeDate(date)}
            />
        );
    }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
    return {
      bookingBoard: state.bookingBoard
    }
  }

function mapDispatchToProps(dispatch) {
    return {
      fetchBookingFromFirebase: () => dispatch(fetchBookingFromFirebase()),
      fetchArrivingFromFirebase: () => dispatch(fetchArrivingFromFirebase()),
      fetchEatingFromFirebase: () => dispatch(fetchEatingFromFirebase()),
      fetchFinishingFromFirebase: () => dispatch(fetchFinishingFromFirebase()),
      fetchWalkInFromFirebase: () => dispatch(fetchWalkInFromFirebase()),
      fetchDataHistoryFromFirebase: () => dispatch(fetchDataHistoryFromFirebase()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BookingBoardDate)
