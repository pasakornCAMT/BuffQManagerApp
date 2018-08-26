import {
    SET_BOOKING_DETAIL_STATE
} from '../../src/constants/constants'
import bookingDetailReducer from '../../src/reducers/booking-detail-reducer';

const bookingDetailState = {
    bookingItem: [],
    id: '',
    dateText: '',
    timeText: '',
    numOfCustomer: 0,
    numOfAdult: 1,
    numOfChild: 0,
    phone: '',
    customer: '',
    totalPrice: 0,
    status: '',
    restaurant: '',
    pressDate: '',
}

const bookingDetailData = {
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
    }
}

describe('Test booking-detail-reducer', () => {
    it('has a default state', () => {
        //Arrange
        const state = bookingDetailState
        const action = {
            type: 'unexpected'
        }
        //Act
        result = bookingDetailReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state
        })
    })
    it('calls SET_BOOKING_DETAIL_STATE', () => {
         //Arrange
         const bookings = bookingDetailData
         const state = bookingDetailState
         const action = {
             type: SET_BOOKING_DETAIL_STATE,
             bookingItem: bookings
         }
         //Act
         result = bookingDetailReducer(state, action)
         //Assert
         const assertObj = {
             ...state,
             bookingItem: action.bookingItem,
         }
         expect(JSON.stringify(result)).toEqual(JSON.stringify(assertObj))
    })
})