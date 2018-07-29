import {
    SET_BOOKING_DETAIL_STATE
} from '../constants/constants'

const bookingDetailState = {
    bookingItem: [],
    id: '',
    dateText: '',
    timeText: '',
    numOfCustomer: 0,
    numOfAdult: 1,
    numOfChild: 0,
    phone: '',
    customer: '',
    totalPrice: 0,
    status: '',
    restaurant: '',
    pressDate: '',
}

export default function bookingDetailReducer(state = bookingDetailState, action){
    switch (action.type) {
        case SET_BOOKING_DETAIL_STATE:
            return{
                ...state,
                bookingItem: action.bookingItem
            }
        default:
            return state 
    }
}