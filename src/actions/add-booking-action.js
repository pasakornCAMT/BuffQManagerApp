import {
    INPUT_NAME,
    INPUT_PHONE_NUMBER,
    INPUT_NUM_OF_CUSTOMER,
    INPUT_NUM_OF_ADULT,
    INPUT_NUM_OF_CHILD,
    INPUT_TIME,
    SELECT_DRINK,
    RECORD_PRICE,
    CLEAR_FORM,
    NOT_EMPTY_NAME,
    VALID_PHONE_NUMBER,
    INVALID_PHONE_NUMBER,
    INVALID_NAME,
    VALID_NAME,
} from '../constants/constants'

export function validateName(name){
    return (dispatch) => {
        dispatch(inputName(name))
        if(name.length > 20){
            dispatch(invalidName())
        }else{
            dispatch(validName())
        }
    }
}

export function invalidName(){
    return {
        type: INVALID_NAME
    }
}

export function validName(){
    return {
        type: VALID_NAME
    }
}

export function inputName(name){
    return{
        type: INPUT_NAME,
        name
    }
}

export function validatePhoneNumber(phone){
    return (dispatch) => {
        dispatch(inputPhoneNumber(phone))
        if(phone.length == 10 && phone.startsWith("0")){
            dispatch(validPhoneNumber())
        }else{
            dispatch(invalidPhoneNumber())
        }
    }
}

export function validPhoneNumber(){
    return{
        type: VALID_PHONE_NUMBER
    }
}

export function invalidPhoneNumber(){
    return{
        type: INVALID_PHONE_NUMBER
    }
}

export function inputPhoneNumber(phone){
    return{
        type: INPUT_PHONE_NUMBER,
        phone
    }
}

export function inputNumOfCustomer(numOfCustomer){
    return{
        type: INPUT_NUM_OF_CUSTOMER,
        numOfCustomer
    }
}

export function inputNumOfAdult(numOfAdult){
    return{
        type: INPUT_NUM_OF_ADULT,
        numOfAdult
    }
}

export function inputNumOfChild(numOfChild){
    return{
        type: INPUT_NUM_OF_CHILD,
        numOfChild
    }
}

export function inputTime(time){
    return{
        type: INPUT_TIME,
        time
    }
}

export function selectDrink(){
    return{
        type: SELECT_DRINK
    }
}

export function recordPrice(price){
    return{
        type: RECORD_PRICE,
        price,
    }
}

export function clearForm(){
    return{
        type: CLEAR_FORM
    }
}

