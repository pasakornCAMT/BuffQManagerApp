import {
    FETCHING_RESTAURANT,
    FETCHING_RESTAURANT_SUCCESS,
    FETCHING_RESTAURANT_FAILURE,
    NO_RESTAURNAT_DATA,
} from '../../src/constants/constants'
import {
    getRestaunrant, 
    getRestaurantFailure,
    noRestaurantData
} from '../../src/actions/restaurant-action';

describe('Test restaurant-action', () => {
    it('calls FETCHING_RESTAURANT & should return only type', () => {
        //Arange

        //Act
        const result = getRestaunrant()
        //Assert
        expect(result).toEqual({
            type: FETCHING_RESTAURANT,
        })
    })
    it('calls FETCHING_RESTAURANT_SUCCESS & should return Struct',()=>{
        //Arange

        //Act

        //Assert

    })
    it('calls FETCHING_RESTAURANT_FAILURE & should return only type', () => {
        //Arange

        //Act
        const result = getRestaurantFailure()
        //Assert
        expect(result).toEqual({
            type: FETCHING_RESTAURANT_FAILURE,
        })
    })
    it('calls NO_RESTAURNAT_DATA & should return only type', () => {
        //Arange

        //Act
        const result = noRestaurantData()
        //Assert
        expect(result).toEqual({
            type: NO_RESTAURNAT_DATA,
        })
    })
})