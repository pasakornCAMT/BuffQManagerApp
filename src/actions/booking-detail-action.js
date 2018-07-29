import{
    SET_BOOKING_DETAIL_STATE,
} from '../constants/constants'

import FirebaseService from '../services/firebase-service'

export function setBookingDetailState(bookingItem){
    return{
        type: SET_BOOKING_DETAIL_STATE,
        bookingItem,
    }
}
