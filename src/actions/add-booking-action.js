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

export function inputName(name){
    return{
        type: INPUT_NAME,
        name
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

