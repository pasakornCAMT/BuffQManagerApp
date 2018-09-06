import{
    SET_BOOKING_DETAIL_STATE,
    EDIT_NUM_OF_CUSTOMER,
    UP_NUM_OF_CUSTOMER,
    DOWN_NUM_OF_CUSTOMER,
    VALID_EDIT_NAME,
    VALID_EDIT_PHONE_NUMBER,
    EDIT_DRINK,
} from '../constants/constants'

import FirebaseService from '../services/firebase-service'

export function setBookingDetailState(bookingItem){
    return{
        type: SET_BOOKING_DETAIL_STATE,
        bookingItem,
    }
}

export function editNumOfCustomer(numOfCustomer){
    return{
        type: EDIT_NUM_OF_CUSTOMER,
        numOfCustomer
    }
}

export function upNumOfCustomer(){
    return{
        type: UP_NUM_OF_CUSTOMER,
    }
}

export function downNumOfCustomer(){
    return{
        type: DOWN_NUM_OF_CUSTOMER,
    }
}

export function onEditName(name){
    return (dispatch) => {
        dispatch(validEditName(name))
    }
}

export function validEditName(name){
    return{
        type: VALID_EDIT_NAME,
        name,
    }
}

export function onEditPhoneNumber(phone){
    return (dispatch) => {
        dispatch(validEditPhoneNumber(phone))
    }
}

export function validEditPhoneNumber(phone){
    return{
        type: VALID_EDIT_PHONE_NUMBER,
        phone,
    }
}

export function editDrink(){
    return{
        type: EDIT_DRINK
    }
}
