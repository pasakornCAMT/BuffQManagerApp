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
    numOfChild: 0,
    name: '',
    phoneNumber: '',
    drink: false,
    price: 0 
}