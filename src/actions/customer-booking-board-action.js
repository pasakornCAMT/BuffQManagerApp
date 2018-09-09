import {
  FETCHING_BOOKING_LIST,
  FETCHING_BOOKING_LIST_SUCCESS,
  FETCHING_BOOKING_LIST_FAILURE,
  NO_BOOKING_LIST,
  FETCHING_ARRIVING_LIST_SUCCESS,
  NO_ARRIVING_LIST,
  FETCHING_EATING_LIST_SUCCESS,
  NO_EATING_LIST,
  FETCHING_FINISHING_LIST_SUCCESS,
  NO_FINISHING_LIST,
  FETCHING_WALK_IN_LIST,
  FETCHING_WALK_IN_LIST_SUCCESS,
} from '../constants/constants'
import FirebaseService from '../services/firebase-service'

const currentResId = '0'
const currentDate = '9-9-2018'
const restaurantBookings = FirebaseService.child('restaurantBookings')
const allBookingsRef = FirebaseService.child('bookings').child('users').child('1')

export function getAll(){
  var all = []
  fetchAllBooking(currentResId, snap => Promise.all([snap.val()]).then((val)=>{
    console.log(val)
    all.push(val[0])
    console.log('re: ',all)
  }))
}
export function fetchAllBooking(resId,column,cd) {
  restaurantBookings.child(resId).on('child_added', (snap) => {
      let bookingsRef = allBookingsRef.child(snap.key);
      bookingsRef.once('value', cd)
    })
}

export function fetchBookingFromFirebase() {
  //getAll()
  return (dispatch) => {
    dispatch(getBookingList())
    try {
      FirebaseService.child('bookings').child('users').child('1')
        .orderByChild('status').equalTo('booking').on('value', (snap) => {
          if (snap.val() == null) {
            dispatch(noBookingList())
          } else {
            var data = []
            snap.forEach(booking => {
              if(booking.val().dateText == currentDate){
                data.push(booking.val())
              }
            })
            console.log('result: ',data)
            dispatch(getBookingListSuccess(data))
          }
        })
      // var all = []
      // var text = 'booking'
      // fetchAllBooking(currentResId,text, snap => Promise.all([snap.val()]).then((val)=>{
      //   all.push(val[0])
      //   dispatch(getBookingListSuccess(all))
      // }))
    } catch (e) {
      dispatch(getBookingListFailure())
    }
  }
  
}

export function getBookingList() {
  return {
    type: FETCHING_BOOKING_LIST
  }
}

export function getBookingListSuccess(bookings) {
  return {
    type: FETCHING_BOOKING_LIST_SUCCESS,
    bookings
  }
}

export function getBookingListFailure() {
  return {
    type: FETCHING_BOOKING_LIST_FAILURE
  }
}

export function noBookingList() {
  return {
    type: NO_BOOKING_LIST
  }
}

export function fetchArrivingFromFirebase() {
  return (dispatch) => {
    try {
      FirebaseService.child('bookings').child('users').child('1')
        .orderByChild('status').equalTo('arriving').on('value', (snap) => {
          if (snap.val() == null) {
            dispatch(noArrivingList())
          } else {
            var data = []
            snap.forEach(booking => {
              if(booking.val().dateText == currentDate){
                data.push(booking.val())
              }
            })
            dispatch(getArrivingListSuccess(data))
          }
        })
    } catch (e) {

    }
  }
}

export function noArrivingList() {
  return {
    type: NO_ARRIVING_LIST
  }
}

export function getArrivingListSuccess(arrivings) {
  return {
    type: FETCHING_ARRIVING_LIST_SUCCESS,
    arrivings
  }
}

export function fetchEatingFromFirebase() {
  return (dispatch) => {
    try {
      FirebaseService.child('bookings').child('users').child('1')
        .orderByChild('status').equalTo('eating').on('value', (snap) => {
          if (snap.val() == null) {
            dispatch(noEatingList())
          } else {
            var data = []
            snap.forEach(booking => {
              if(booking.val().dateText == currentDate){
                data.push(booking.val())
              }
            })
            dispatch(getEatingListSuccess(data))
          }
        })
    } catch (e) {

    }
  }
}

export function noEatingList() {
  return {
    type: NO_EATING_LIST
  }
}

export function getEatingListSuccess(eatings) {
  return {
    type: FETCHING_EATING_LIST_SUCCESS,
    eatings
  }
}

export function fetchFinishingFromFirebase() {
  return (dispatch) => {
    try {
      FirebaseService.child('bookings').child('users').child('1')
        .orderByChild('status').equalTo('finishing').on('value', (snap) => {
          if (snap.val() == null) {
            dispatch(noFinishingList())
          } else {
            var data = []
            snap.forEach(booking => {
              if(booking.val().dateText == currentDate){
                data.push(booking.val())
              }
            })
            dispatch(getFinishingListSuccess(data))
          }
        })
    } catch (e) {

    }
  }
}

export function noFinishingList() {
  return {
    type: NO_FINISHING_LIST
  }
}

export function getFinishingListSuccess(finishings) {
  return {
    type: FETCHING_FINISHING_LIST_SUCCESS,
    finishings
  }
}

export function fetchWalkInFromFirebase(){
  return (dispatch) => {
    dispatch(getWalkInList())
    try {
      FirebaseService.child('bookings').child('walk-in').on('value',(snap)=>{
        dispatch(getWalkInListSuccess(snap.val()))
      })
    } catch (error) {
      
    }
  }
}

export function getWalkInList(){
  return{
    type: FETCHING_WALK_IN_LIST
  }
}

export function getWalkInListSuccess(walkInList){
  return{
    type: FETCHING_WALK_IN_LIST_SUCCESS,
    walkInList,
  }
}
