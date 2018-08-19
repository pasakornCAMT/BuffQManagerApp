import { combineReducers } from 'redux'
import bookingBoard from './booking-board-reducer'
import restaurant from './restaurant-reducer'
import bookingDetail from './booking-detail-reducer'
import addBooking from './add-booking-reducer'
import tableLayout from './table-layout-reducer'
import tableDetail from './table-detail-reducer'
import dataHistory from './data-history-reducer'

//For dismiss the warning message
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
console.ignoredYellowBox = [ 'Setting a timer' ]

const rootReducer = combineReducers({
    bookingBoard,
    restaurant,
    bookingDetail,
    addBooking,
    tableLayout,
    tableDetail,
    dataHistory,
})

export default rootReducer
