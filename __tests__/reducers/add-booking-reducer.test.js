import {
    INPUT_NAME,
    INPUT_PHONE_NUMBER,
    INPUT_NUM_OF_CUSTOMER,
    INPUT_NUM_OF_ADULT,
    INPUT_NUM_OF_CHILD,
    INPUT_TIME,
    SELECT_DRINK,
    RECORD_PRICE,
} from '../../src/constants/constants'
import addBookingReducer from '../../src/reducers/add-booking-reducer';
import moment from 'moment';

let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let mindate = date + '-' + month + '-' + year;

let hours = moment().hours()
let minutes = moment().minutes()
let mintime = hours + ':' + minutes

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

describe('Test add-booking-reducer', () => {
    it('has a default state', () => {
        //Arrange
        const state = undefined
        const action = {
            type: 'unexpected'
        }
        //Act
        result = addBookingReducer(state, action)
        //Assert
        expect(result).toEqual({
            dateText: mindate,
            timeText: mintime,
            numOfCustomer: 1,
            numOfAdult: 1,
            numOfChild: 0,
            name: '',
            phoneNumber: '',
            drink: false,
            price: 0,
            invalidPhone: true,
            invalidName: false,
        })
    })
    it('calls INPUT_NAME', () => {
        //Arrange
        const state = addBookingState
        const action = {
            type: INPUT_NAME,
            name: 'TIM'
        }
        //Act
        result = addBookingReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            name: 'TIM'
        })
    })
    it('calls INPUT_PHONE_NUMBER', () => {
        //Arrange
        const state = addBookingState
        const action = {
            type: INPUT_PHONE_NUMBER,
            phone: '0999999999'
        }
        //Act
        result = addBookingReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            phoneNumber: '0999999999'
        })
    })
    it('calls INPUT_NUM_OF_CUSTOMER', () => {
        //Arrange
        const state = addBookingState
        const action = {
            type: INPUT_NUM_OF_CUSTOMER,
            numOfCustomer: 4
        }
        //Act
        result = addBookingReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            numOfCustomer: 4
        })
    })
    it('calls INPUT_NUM_OF_ADULT', () => {
        //Arrange
        const state = addBookingState
        const action = {
            type: INPUT_NUM_OF_ADULT,
            numOfAdult: 2
        }
        //Acts
        result = addBookingReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            numOfAdult: 2
        })
    })
    it('calls INPUT_NUM_OF_CHILD', () => {
        //Arrange
        const state = addBookingState
        const action = {
            type: INPUT_NUM_OF_CHILD,
            numOfChild: 2
        }
        //Acts
        result = addBookingReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            numOfChild: 2
        })
    })
    it('calls INPUT_TIME', () => {
        //Arrange
        const state = addBookingState
        const action = {
            type: INPUT_TIME,
            time: '18:00'
        }
        //Acts
        result = addBookingReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            timeText: '18:00'
        })
    })
    it('calls SELECT_DRINK to TRUE', () => {
        //Arrange
        const state = addBookingState
        const action = {
            type: SELECT_DRINK
        }
        //Acts
        result = addBookingReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            drink: true
        })
    })
    it('calls SELECT_DRINK to FALSE', () => {
        //Arrange
        const state = {
            ...addBookingState,
            drink: true
        }
        const action = {
            type: SELECT_DRINK
        }
        //Acts
        result = addBookingReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            drink: false
        })
    })
    it('calls RECORD_PRICE', () => {
        //Arrange
        const state = addBookingState
        const action = {
            type: RECORD_PRICE,
            price: 189
        }
        //Acts
        result = addBookingReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            price: 189
        })
    })
})