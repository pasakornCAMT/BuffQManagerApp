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
  FETCHING_WALK_IN_LIST,
  FETCHING_WALK_IN_LIST_SUCCESS,
} from '../constants/constants'
import { ListView } from 'react-native'

const bookingBoardState = {
  isFetching: false,
  isFetchingFail: false,
  bookingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
  arrivingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
  eatingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
  finishingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
  walkInDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
  bookings: [],
  arrivings: [],
  eatings: [],
  finishings: [],
  walkIn: [],
}

export default function bookingBoardReducer(state = bookingBoardState, action) {
  switch (action.type) {
    case FETCHING_BOOKING_LIST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_BOOKING_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        bookings: action.bookings,
        bookingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(action.bookings)
      }
    case FETCHING_BOOKING_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetchingFail: true,
      }
    case NO_BOOKING_LIST:
      return {
        ...state,
        isFetching: false,
        bookingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        bookings: [],
      }
    case FETCHING_ARRIVING_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        arrivings: action.arrivings,
        arrivingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(action.arrivings)
      }
    case NO_ARRIVING_LIST:
      return {
        ...state,
        isFetching: false,
        arrivingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        arrivings: [],
      }
    case FETCHING_EATING_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        eatings: action.eatings,
        eatingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(action.eatings)
      }
    case NO_EATING_LIST:
      return {
        ...state,
        isFetching: false,
        eatingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        eatings: [],
      }
    case FETCHING_FINISHING_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        finishings: action.finishings,
        finishingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(action.finishings)
      }
    case NO_FINISHING_LIST:
      return {
        ...state,
        isFetching: false,
        finishingDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        finishings: [],
      }
    case FETCHING_WALK_IN_LIST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_WALK_IN_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        walkIn: action.walkInList,
        walkInDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(action.walkInList)
      }
    default:
      return state;
  }
}
