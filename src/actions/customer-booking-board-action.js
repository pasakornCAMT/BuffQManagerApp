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

let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

export var currentDate = date+'-'+month+'-'+year

export function setDate(date){
  currentDate = date
}

export function fetchBookingFromFirebase() {
  return (dispatch) => {
    dispatch(getBookingList())
    try {
      const res = FirebaseService.auth().currentUser;
        FirebaseService.database().ref().child('bookings').child('online')
        .orderByChild('status_dateText_resId').equalTo('booking_' + currentDate + '_' + res.uid).on('value', (snap) => {
          if (snap.val() == null) {
            dispatch(noBookingList())
          } else {
            var data = []
            snap.forEach(booking => {
              if (booking.val().dateText == currentDate) {
                data.push(booking.val())
              }
            })
            console.log('result: ', data)
            dispatch(getBookingListSuccess(data))
          }
        })
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
      const res = FirebaseService.auth().currentUser;
      FirebaseService.database().ref().child('bookings').child('online')
        .orderByChild('status_dateText_resId').equalTo('arriving_' + currentDate + '_' + res.uid).on('value', (snap) => {
          if (snap.val() == null) {
            dispatch(noArrivingList())
          } else {
            var data = []
            snap.forEach(booking => {
              if (booking.val().dateText == currentDate) {
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
      const res = FirebaseService.auth().currentUser;
      FirebaseService.database().ref().child('bookings').child('online')
        .orderByChild('status_dateText_resId').equalTo('eating_'+currentDate+'_'+res.uid).on('value', (snap)=>{  
          if (snap.val() == null) {
            dispatch(noEatingList())
          } else {
            var data = []
            snap.forEach(booking => {
              if (booking.val().dateText == currentDate) {
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
      const res = FirebaseService.auth().currentUser;
      FirebaseService.database().ref().child('bookings').child('online')
        .orderByChild('status_dateText_resId').equalTo('finishing_'+currentDate+'_'+res.uid).on('value', (snap)=>{  
          if (snap.val() == null) {
            dispatch(noFinishingList())
          } else {
            var data = []
            snap.forEach(booking => {
              if (booking.val().dateText == currentDate) {
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

export function fetchWalkInFromFirebase() {
  return (dispatch) => {
    dispatch(getWalkInList())
    try {
      FirebaseService.database().ref().child('bookings').child('walk-in').on('value', (snap) => {
        dispatch(getWalkInListSuccess(snap.val()))
      })
    } catch (error) {

    }
  }
}

export function getWalkInList() {
  return {
    type: FETCHING_WALK_IN_LIST
  }
}

export function getWalkInListSuccess(walkInList) {
  return {
    type: FETCHING_WALK_IN_LIST_SUCCESS,
    walkInList,
  }
}

function filterColumn(array, status) {
  var filtered = array.filter((item) => {
    return item.status == status
  });
  return filtered;
}
