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
} from '../constants/constants'
import FirebaseService from '../services/firebase-service'

export function fetchBookingFromFirebase(){
  return (dispatch) => {
    dispatch(getBookingList())
    try {
      FirebaseService.child('bookings').child('users').child('1')
      .orderByChild('status').equalTo('booking').on('value',(snap)=>{
        if(snap.val() == null){
          dispatch(noBookingList())
        }else{
          dispatch(getBookingListSuccess(snap.val()))
        }
      })
    } catch (e) {
      dispatch(getBookingListFailure())
    }
  }
}

export function getBookingList(){
  return{
    type: FETCHING_BOOKING_LIST
  }
}

export function getBookingListSuccess(bookings){
  return{
    type: FETCHING_BOOKING_LIST_SUCCESS,
    bookings
  }
}

export function getBookingListFailure(){
  return{
    type: FETCHING_BOOKING_LIST_FAILURE
  }
}

export function noBookingList(){
  return{
    type: NO_BOOKING_LIST
  }
}

export function fetchArrivingFromFirebase(){
  return (dispatch) =>{
    try {
      FirebaseService.child('bookings').child('users').child('1')
      .orderByChild('status').equalTo('arriving').on('value',(snap)=>{
        if(snap.val() == null){
          dispatch(noArringList())
        }else{
          dispatch(getArrivingListSuccess(snap.val()))
        }
      })
    } catch (e) {

    }
  }
}

export function noArringList(){
  return{
    type: NO_ARRIVING_LIST
  }
}

export function getArrivingListSuccess(arrivings){
  return{
    type: FETCHING_ARRIVING_LIST_SUCCESS,
    arrivings
  }
}

export function fetchEatingFromFirebase(){
  return (dispatch) =>{
    try {
      FirebaseService.child('bookings').child('users').child('1')
      .orderByChild('status').equalTo('eating').on('value',(snap)=>{
        if(snap.val() == null){
          dispatch(noEatingList())
        }else{
          dispatch(getEatingListSuccess(snap.val()))
        }
      })
    } catch (e) {

    }
  }
}

export function noEatingList(){
  return{
    type: NO_EATING_LIST
  }
}

export function getEatingListSuccess(eatings){
  return{
    type: FETCHING_EATING_LIST_SUCCESS,
    eatings
  }
}

export function fetchFinishingFromFirebase(){
  return (dispatch) =>{
    try {
      FirebaseService.child('bookings').child('users').child('1')
      .orderByChild('status').equalTo('finishing').on('value',(snap)=>{
        if(snap.val() == null){
          dispatch(noFinishingList())
        }else{
          dispatch(getFinishingListSuccess(snap.val()))
        }
      })
    } catch (e) {

    }
  }
}

export function noFinishingList(){
  return{
    type: NO_FINISHING_LIST
  }
}

export function getFinishingListSuccess(finishings){
  return{
    type: FETCHING_FINISHING_LIST_SUCCESS,
    finishings
  }
}
