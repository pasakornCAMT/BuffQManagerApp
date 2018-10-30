import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { 
    currentDate,
    setDate, 
    fetchBookingFromFirebase, 
    fetchArrivingFromFirebase, 
    fetchFinishingFromFirebase 
} from '../../actions/customer-booking-board-action';

class BookingBoardDate extends Component {
    changeDate(date){
        setDate(date);
        this.props.fetchBookingFromFirebase();
        this.props.fetchArrivingFromFirebase();
        this.props.fetchFinishingFromFirebase();
    }
    render() {
        return (
            <DatePicker
                style={{ width: '50%', paddingVertical: 10, }}
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
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BookingBoardDate)
