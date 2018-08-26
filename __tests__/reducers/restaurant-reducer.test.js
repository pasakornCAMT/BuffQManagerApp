import {
    FETCHING_RESTAURANT,
    FETCHING_RESTAURANT_SUCCESS,
    FETCHING_RESTAURANT_FAILURE,
    NO_RESTAURNAT_DATA,
} from '../../src/constants/constants'
import restaurantReducer from '../../src/reducers/restaurant-reducer';

const restaurantState = {
    restaurant: [],
    isFetching: false,
    isNoData: false,
    isError: false,
}

const restaurantData = {
    "closeBookingTime": "16:00",
    "closeTime": "23:00",
    "drink": 30,
    "id": 0,
    "image": "https://firebasestorage.googleapis.com/v0/b/react-native-grocery-bcb32.appspot.com/o/mhu-song-chan.jpg?alt=media&token=48a39b33-a337-495b-99fd-4ae097948128",
    "maximumPerRound": 10,
    "name": "Mhu-song-chan",
    "openDate": "Monday-Sunday",
    "openTime": "17:00",
    "price": 159,
    "sectionTime": ["17:00", "18:00", "19:00", "20:00", "21:00"],
    "status": "close"
}

describe('Test restaurant-reducer', () => {
    it('has a default state', () => {
        //Arrange
        const state = restaurantState
        const action = {
            type: 'unexpected'
        }
        //Act
        result = restaurantReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state
        })
    })
    it('calls FETCHING_RESTAURANT ', () => {
        //Arrange
        const state = restaurantState
        const action = {
            type: FETCHING_RESTAURANT
        }
        //Act
        result = restaurantReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            isFetching: true
        })
    })
    it('calls FETCHING_RESTAURANT_SUCCESS', () => {
        //Arrange
        const state = restaurantState
        const action = {
            type: FETCHING_RESTAURANT_SUCCESS,
            restaurant: restaurantData,
        }
        //Act
        result = restaurantReducer(state, action)
        //Assert
        const assertObj = {
            ...state,
            restaurant: action.restaurant,
        }
        expect(JSON.stringify(result)).toEqual(JSON.stringify(assertObj))
    })
    it('calls FETCHING_RESTAURANT_FAILURE ', () => {
        //Arrange
        const state = restaurantState
        const action = {
            type: FETCHING_RESTAURANT_FAILURE
        }
        //Act
        result = restaurantReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            isError: true
        })
    })
    it('calls NO_RESTAURNAT_DATA ', () => {
        //Arrange
        const state = restaurantState
        const action = {
            type: NO_RESTAURNAT_DATA
        }
        //Act
        result = restaurantReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            isNoData: true
        })
    })
})