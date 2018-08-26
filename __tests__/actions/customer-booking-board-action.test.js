import {
    FETCHING_BOOKING_LIST,
    FETCHING_BOOKING_LIST_SUCCESS,
    FETCHING_BOOKING_LIST_FAILURE,
    NO_BOOKING_LIST,
    FETCHING_ARRIVING_LIST_SUCCESS,
    NO_ARRIVING_LIST,
    FETCHING_EATING_LIST_SUCCESS,
    NO_EATING_LIST,
    FETCHING_FINISHING_LIST_SUCCESS,
    NO_FINISHING_LIST,
} from '../../src/constants/constants'
import { 
    getBookingList, 
    getBookingListFailure, 
    noBookingList, 
    noArrivingList, 
    noEatingList,
    noFinishingList
} from '../../src/actions/customer-booking-board-action';

describe('Test customer-booking-board-action',()=>{
    it('calls FETCHING_BOOKING_LIST & should return only type',()=>{
        //Arange

        //Act
        const result = getBookingList()
        //Assert
        expect(result).toEqual({
            type: FETCHING_BOOKING_LIST,
        })
    })
    it('calls FETCHING_BOOKING_LIST_SUCCESS & should return Struct',()=>{
        //Arange

        //Act
        
        //Assert
    })
    it('calls FETCHING_BOOKING_LIST_FAILURE & should return only type',()=>{
        //Arange

        //Act
        const result = getBookingListFailure()
        //Assert
        expect(result).toEqual({
            type: FETCHING_BOOKING_LIST_FAILURE,
        })
    })
    it('calls NO_BOOKING_LIST & should return only type',()=>{
        //Arange

        //Act
        const result = noBookingList()
        //Assert
        expect(result).toEqual({
            type: NO_BOOKING_LIST,
        })
    })
    it('calls FETCHING_ARRIVING_LIST_SUCCESS & should return Struct',()=>{
        //Arange

        //Act
        
        //Assert
        
    })
    it('calls NO_ARRIVING_LIST & should return only type',()=>{
        //Arange

        //Act
        const result = noArrivingList()
        //Assert
        expect(result).toEqual({
            type: NO_ARRIVING_LIST,
        })
    })
    it('calls FETCHING_EATING_LIST_SUCCESS & should return Struct',()=>{
        //Arange

        //Act
        
        //Assert
        
    })
    it('calls NO_EATING_LIST & should return only type',()=>{
        //Arange

        //Act
        const result = noEatingList()
        //Assert
        expect(result).toEqual({
            type: NO_EATING_LIST,
        })
    })
    it('calls FETCHING_FINISHING_LIST_SUCCESS & should return Struct',()=>{
        //Arange

        //Act
        
        //Assert
        
    })
    it('calls NO_FINISHING_LIST & should return only type',()=>{
        //Arange

        //Act
        const result = noFinishingList()
        //Assert
        expect(result).toEqual({
            type: NO_FINISHING_LIST,
        })
    })
})