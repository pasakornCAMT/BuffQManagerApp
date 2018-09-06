import {
    SET_BOOKING_DETAIL_STATE,
    EDIT_NUM_OF_CUSTOMER,
    UP_NUM_OF_CUSTOMER,
    DOWN_NUM_OF_CUSTOMER,
    VALID_EDIT_NAME,
    VALID_EDIT_PHONE_NUMBER,
    EDIT_DRINK,
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
    drink: null,
}

export default function bookingDetailReducer(state = bookingDetailState, action){
    switch (action.type) {
        case SET_BOOKING_DETAIL_STATE:
            return{
                ...state,
                bookingItem: action.bookingItem,
                numOfCustomer: action.bookingItem.numOfCustomer,
                numOfAdult: action.bookingItem.numOfAdult,
                numOfChild: action.bookingItem.numOfChild,
                customer: action.bookingItem.customer,
                phone: action.bookingItem.phone,
                drink: action.bookingItem.includeDrink,
            }
        case EDIT_NUM_OF_CUSTOMER:
            return{
                ...state,
                numOfCustomer: action.numOfCustomer
            }
        case UP_NUM_OF_CUSTOMER:
            if(state.numOfCustomer < 10){
                return{
                    ...state,
                    numOfCustomer: state.numOfCustomer + 1
                }
            }else{
                return state
            }
            
        case DOWN_NUM_OF_CUSTOMER:
            if(state.numOfCustomer > 1){
                return{
                    ...state,
                    numOfCustomer: state.numOfCustomer - 1
                }   
            }else{
                return state
            }
        case VALID_EDIT_NAME:
            return{
                ...state,
                customer: action.name
            }
        case VALID_EDIT_PHONE_NUMBER:
            return{
                ...state,
                phone: action.phone
            }   
        case EDIT_DRINK:
            return{
                ...state,
                drink: !state.drink
            }     
        default:
            return state 
    }
}