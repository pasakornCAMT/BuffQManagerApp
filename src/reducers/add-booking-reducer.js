 import {
    INPUT_NAME,
    INPUT_PHONE_NUMBER,
    INPUT_NUM_OF_CUSTOMER,
    INPUT_NUM_OF_ADULT,
    INPUT_NUM_OF_CHILD,
    INPUT_TIME,
    SELECT_DRINK,
    RECORD_PRICE,
} from '../constants/constants'

let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let mindate = date + '-' + month + '-' + year;

const addBookingState = {
    dateText: mindate,
    timeText: '',
    numOfCustomer: 1,
    numOfAdult: 1,
    numOfChild: 0,
    name: '',
    phoneNumber: '',
    drink: false,
    price: 0 
}

export default function addBookingReducer (state = addBookingState, action){
    switch (action.type) {
        case INPUT_NAME:
            return{
                ...state,
                name: action.name,
            }
        case INPUT_PHONE_NUMBER:
            return{
                ...state,
                phoneNumber: action.phone,
            }
        case INPUT_NUM_OF_CUSTOMER:
            return{
                ...state,
                numOfCustomer: action.numOfCustomer,
            }
        case INPUT_NUM_OF_ADULT:
            return{
                ...state,
                numOfAdult: action.numOfAdult,
            }
        case INPUT_NUM_OF_CHILD:
            return{
                ...state,
                numOfChild: action.numOfChild,
            }
        case INPUT_TIME:
            return{
                ...state,
                timeText: action.time,
            }
        case SELECT_DRINK:
            return{
                ...state,
                drink: !state.drink,
            }             
        case RECORD_PRICE:
            return{
                ...state,
                price: action.price,
            }
        default:
            return state
            
    }
}