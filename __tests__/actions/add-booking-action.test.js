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
import { 
    inputName, 
    inputPhoneNumber, 
    inputNumOfCustomer,
    inputNumOfAdult,
    inputNumOfChild,
    inputTime,
    selectDrink,
    recordPrice
} from '../../src/actions/add-booking-action';

describe('Test add-booking-action',()=>{
    it('calls INPUT_NAME & should return name',()=>{
        //Arange
        const name = 'TIM'
        //Act
        const result = inputName(name)
        //Assert
        expect(result).toEqual({
            type: INPUT_NAME,
            name: 'TIM'
        })
    })
    it('calls INPUT_NAME & should return EMPTY',()=>{
        //Arange
        const name = ''
        //Act
        const result = inputName(name)
        //Assert
        expect(result).toEqual({
            type: INPUT_NAME,
            name: ''
        })
    })
    it('calls INPUT_NAME & should return NULL',()=>{
        //Arange
        const name = null
        //Act
        const result = inputName(name)
        //Assert
        expect(result).toEqual({
            type: INPUT_NAME,
            name: null
        })
    })
    it('calls INPUT_PHONE_NUMBER & should return phone number',()=>{
        //Arange
        const phone = '0999999999'
        //Act
        const result = inputPhoneNumber(phone)
        //Assert
        expect(result).toEqual({
            type: INPUT_PHONE_NUMBER,
            phone: '0999999999'
        })
    })
    it('calls INPUT_PHONE_NUMBER & should return EMPTY',()=>{
        //Arange
        const phone = ''
        //Act
        const result = inputPhoneNumber(phone)
        //Assert
        expect(result).toEqual({
            type: INPUT_PHONE_NUMBER,
            phone: ''
        })
    })
    it('calls INPUT_PHONE_NUMBER & should return NULL',()=>{
        //Arange
        const phone = null
        //Act
        const result = inputPhoneNumber(phone)
        //Assert
        expect(result).toEqual({
            type: INPUT_PHONE_NUMBER,
            phone: null
        })
    })
    it('calls INPUT_NUM_OF_CUSTOMER & should return number of customer',()=>{
        //Arange
        const numOfCustomer = 4
        //Act
        const result = inputNumOfCustomer(numOfCustomer)
        //Assert
        expect(result).toEqual({
            type: INPUT_NUM_OF_CUSTOMER,
            numOfCustomer: 4
        })
    })
    it('calls INPUT_NUM_OF_CUSTOMER & should return NULL',()=>{
        //Arange
        const numOfCustomer = null
        //Act
        const result = inputNumOfCustomer(numOfCustomer)
        //Assert
        expect(result).toEqual({
            type: INPUT_NUM_OF_CUSTOMER,
            numOfCustomer: null
        })
    })
    it('calls INPUT_NUM_OF_ADULT, & should return number of adult',()=>{
        //Arange
        const numOfAdult = 2
        //Act
        const result = inputNumOfAdult(numOfAdult)
        //Assert
        expect(result).toEqual({
            type: INPUT_NUM_OF_ADULT,
            numOfAdult: 2
        })
    })
    it('calls INPUT_NUM_OF_ADULT, & should return NULL',()=>{
        //Arange
        const numOfAdult = null
        //Act
        const result = inputNumOfAdult(numOfAdult)
        //Assert
        expect(result).toEqual({
            type: INPUT_NUM_OF_ADULT,
            numOfAdult: null
        })
    })
    it('calls INPUT_NUM_OF_CHILD, & should return number of child',()=>{
        //Arange
        const numOfChild = 2
        //Act
        const result = inputNumOfChild(numOfChild)
        //Assert
        expect(result).toEqual({
            type: INPUT_NUM_OF_CHILD,
            numOfChild: 2
        })
    })
    it('calls INPUT_NUM_OF_CHILD, & should return NULL',()=>{
        //Arange
        const numOfChild = null
        //Act
        const result = inputNumOfChild(numOfChild)
        //Assert
        expect(result).toEqual({
            type: INPUT_NUM_OF_CHILD,
            numOfChild: null
        })
    })
    it('calls INPUT_TIME, & should return time',()=>{
        //Arange
        const time = '18:00'
        //Act
        const result = inputTime(time)
        //Assert
        expect(result).toEqual({
            type: INPUT_TIME,
            time: '18:00'
        })
    })
    it('calls INPUT_TIME, & should return EMPTY',()=>{
        //Arange
        const time = ''
        //Act
        const result = inputTime(time)
        //Assert
        expect(result).toEqual({
            type: INPUT_TIME,
            time: ''
        })
    })
    it('calls INPUT_TIME, & should return NULL',()=>{
        //Arange
        const time = null
        //Act
        const result = inputTime(time)
        //Assert
        expect(result).toEqual({
            type: INPUT_TIME,
            time: null
        })
    })
    it('calls SELECT_DRINK, & should return only type',()=>{
        //Arange
        
        //Act
        const result = selectDrink()
        //Assert
        expect(result).toEqual({
            type: SELECT_DRINK,
        })
    })
    it('calls RECORD_PRICE, & should return price',()=>{
        //Arange
        const price = 189
        //Act
        const result = recordPrice(price)
        //Assert
        expect(result).toEqual({
            type: RECORD_PRICE,
            price: 189
        })
    })
    it('calls RECORD_PRICE, & should return NULL',()=>{
        //Arange
        const price = null
        //Act
        const result = recordPrice(price)
        //Assert
        expect(result).toEqual({
            type: RECORD_PRICE,
            price: null
        })
    })
})