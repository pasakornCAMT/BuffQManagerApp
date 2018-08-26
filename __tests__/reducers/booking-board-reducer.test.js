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
import { ListView } from 'react-native'
import bookingBoardReducer from '../../src/reducers/booking-board-reducer';

const bookingBoardState = {
    isFetching: false,
    isFetchingFail: false,
    bookingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    arrivingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    eatingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    finishingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    bookings: [],
    arrivings: [],
    eatings: [],
    finishings: [],
}

const bookingsData = {
    "-LJh_wGUKoD9dSppWO9F": {
        "customer": "Gig",
        "dateText": "13-8-2018",
        "dateText_timeText": "13-8-2018_20:00",
        "eatingTime": 223,
        "finishTime": "2018-08-25 21:11:27",
        "id": "-LJh_wGUKoD9dSppWO9F",
        "includeDrink": true,
        "numOfCustomer": 2,
        "payment": true,
        "phone": "0899658965",
        "pressDate": "Sun 12-8-2018 17:4",
        "resImage": "https://firebasestorage.googleapis.com/v0/b/react-native-grocery-bcb32.appspot.com/o/mhu-song-chan.jpg?alt=media&token=48a39b33-a337-495b-99fd-4ae097948128",
        "restaurant": "Mhu-song-chan",
        "restaurantId": 0,
        "startArriving": "2018-08-25 16:33:07",
        "startEating": "2018-08-25 17:27:29",
        "status": "finishing",
        "timeText": "20:00",
        "totalPrice": 378,
        "totalTime": 0,
        "userId": "1",
        "waitingTime": 54
    },
    "-LJha67bGOO7nRU7wswK": {
        "customer": "Han",
        "dateText": "13-8-2018",
        "dateText_timeText": "13-8-2018_19:00",
        "eatingTime": 11066,
        "finishTime": "2018-08-19 01:25:33",
        "id": "-LJha67bGOO7nRU7wswK",
        "includeDrink": true,
        "numOfCustomer": 4,
        "payment": false,
        "phone": "0877458746",
        "pressDate": "Sun 12-8-2018 17:4",
        "resImage": "https://firebasestorage.googleapis.com/v0/b/react-native-grocery-bcb32.appspot.com/o/mhu-song-chan.jpg?alt=media&token=48a39b33-a337-495b-99fd-4ae097948128",
        "restaurant": "Mhu-song-chan",
        "restaurantId": 0,
        "startArriving": "2018-08-18 22:20:53",
        "startEating": "2018-08-18 22:21:07",
        "status": "finishing",
        "timeText": "19:00",
        "totalPrice": 756,
        "totalTime": 0,
        "userId": "1",
        "waitingTime": 14
    }
}

describe('Test booking-board-reducer', () => {
    it('has a default state', () => {
        //Arrange
        const state = bookingBoardState
        const action = {
            type: 'unexpected'
        }
        //Act
        result = bookingBoardReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state
        })
    })
    it('calls FETCHING_BOOKING_LIST ', () => {
        //Arrange
        const state = bookingBoardState
        const action = {
            type: FETCHING_BOOKING_LIST
        }
        //Act
        result = bookingBoardReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            isFetching: true
        })
    })
    it('calls FETCHING_BOOKING_LIST_SUCCESS ', () => {
        //Arrange
        const bookings = bookingsData
        const state = bookingBoardState
        const action = {
            type: FETCHING_BOOKING_LIST_SUCCESS,
            bookings: bookings
        }
        //Act
        result = bookingBoardReducer(state, action)
        //Assert
        const assertObj = {
            ...state,
            bookings: action.bookings,
            bookingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(action.bookings)
        }
        expect(JSON.stringify(result)).toEqual(JSON.stringify(assertObj))

    })
    it('calls FETCHING_BOOKING_LIST_FAILURE ', () => {
        //Arrange
        const state = bookingBoardState
        const action = {
            type: FETCHING_BOOKING_LIST_FAILURE
        }
        //Act
        result = bookingBoardReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            isFetchingFail: true
        })
    })
    it('calls NO_BOOKING_LIST ', () => {
        //Arrange
        const state = bookingBoardState
        const action = {
            type: NO_BOOKING_LIST
        }
        //Act
        result = bookingBoardReducer(state, action)
        //Assert
        expect(JSON.stringify(result)).toEqual(JSON.stringify(state))
    })
    it('calls FETCHING_ARRIVING_LIST_SUCCESS ', () => {
        //Arrange
        const bookings = bookingsData
        const state = bookingBoardState
        const action = {
            type: FETCHING_ARRIVING_LIST_SUCCESS,
            arrivings: bookings
        }
        //Act
        result = bookingBoardReducer(state, action)
        //Assert
        const assertObj = {
            ...state,
            arrivings: action.arrivings,
            arrivingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(action.arrivings)
        }
        expect(JSON.stringify(result)).toEqual(JSON.stringify(assertObj))
    })
    it('calls NO_ARRIVING_LIST ', () => {
        //Arrange
        const state = bookingBoardState
        const action = {
            type: NO_ARRIVING_LIST
        }
        //Act
        result = bookingBoardReducer(state, action)
        //Assert
        expect(JSON.stringify(result)).toEqual(JSON.stringify(state))
    })
    it('calls FETCHING_EATING_LIST_SUCCESS ', () => {
        //Arrange
        const bookings = bookingsData
        const state = bookingBoardState
        const action = {
            type: FETCHING_EATING_LIST_SUCCESS,
            eatings: bookings
        }
        //Act
        result = bookingBoardReducer(state, action)
        //Assert
        const assertObj = {
            ...state,
            eatings: action.eatings,
            eatingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(action.eatings)
        }
        expect(JSON.stringify(result)).toEqual(JSON.stringify(assertObj))
    })
    it('calls NO_EATING_LIST ', () => {
        //Arrange
        const state = bookingBoardState
        const action = {
            type: NO_EATING_LIST
        }
        //Act
        result = bookingBoardReducer(state, action)
        //Assert
        expect(JSON.stringify(result)).toEqual(JSON.stringify(state))
    })
    it('calls FETCHING_FINISHING_LIST_SUCCESS ', () => {
        //Arrange
        const bookings = bookingsData
        const state = bookingBoardState
        const action = {
            type: FETCHING_FINISHING_LIST_SUCCESS,
            finishings: bookings
        }
        //Act
        result = bookingBoardReducer(state, action)
        //Assert
        const assertObj = {
            ...state,
            finishings: action.finishings,
            finishingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(action.finishings)
        }
        expect(JSON.stringify(result)).toEqual(JSON.stringify(assertObj))
    })
    it('calls NO_FINISHING_LIST ', () => {
        //Arrange
        const state = bookingBoardState
        const action = {
            type: NO_FINISHING_LIST
        }
        //Act
        result = bookingBoardReducer(state, action)
        //Assert
        expect(JSON.stringify(result)).toEqual(JSON.stringify(state))
    })
    
})