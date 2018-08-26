import {
    SET_BOOKING_DETAIL_STATE,
} from '../../src/constants/constants'
import { setBookingDetailState } from '../../src/actions/booking-detail-action';

describe('Test booking-detail-action', () => {
    it('calls SET_BOOKING_DETAIL_STATE & should return Struct', () => {
        //Arange
        const booking = {
            customer: "Ying",
            dateText: "12-8-2018",
            dateText_timeText: "12-8-2018_19:00",
            eatingTime: 446,
            finishTime: "2018-08-19 01:24:46",
            id: "-LJhaLN9M46sMdqc2EQU",
            includeDrink: true,
            numOfCustomer: 3,
            payment: false,
            phone: "0877458526",
            pressDate: "Sun 12-8-2018 17:5",
            resImage: "https://firebasestorage.googleapis.com/v0/b/react-native-grocery-bcb32.appspot.com/o/mhu-song-chan.jpg?alt=media&token=48a39b33-a337-495b-99fd-4ae097948128",
            restaurant: "Mhu-song-chan",
            restaurantId: 0,
            startArriving: "2018-08-19 01:16:56",
            startEating: "2018-08-19 01:17:20",
            status: "finishing",
            timeText: "19:00",
            totalPrice: 567,
            userId: "1",
            waitingTime: 24
        }
        //Act
        const result = setBookingDetailState(booking)
        //Assert
        expect(result).toEqual({
            type: SET_BOOKING_DETAIL_STATE,
            bookingItem: {
                customer: "Ying",
                dateText: "12-8-2018",
                dateText_timeText: "12-8-2018_19:00",
                eatingTime: 446,
                finishTime: "2018-08-19 01:24:46",
                id: "-LJhaLN9M46sMdqc2EQU",
                includeDrink: true,
                numOfCustomer: 3,
                payment: false,
                phone: "0877458526",
                pressDate: "Sun 12-8-2018 17:5",
                resImage: "https://firebasestorage.googleapis.com/v0/b/react-native-grocery-bcb32.appspot.com/o/mhu-song-chan.jpg?alt=media&token=48a39b33-a337-495b-99fd-4ae097948128",
                restaurant: "Mhu-song-chan",
                restaurantId: 0,
                startArriving: "2018-08-19 01:16:56",
                startEating: "2018-08-19 01:17:20",
                status: "finishing",
                timeText: "19:00",
                totalPrice: 567,
                userId: "1",
                waitingTime: 24
            }
        })
    })
})