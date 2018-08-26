import {
    FETCHING_DATA_HISTORY,
    FETCHING_DATA_HISTORY_SUCCESS,
    FETCHING_DATA_HISTORY_FAILURE,
    NO_DATA_HISTORY,
} from '../../src/constants/constants'
import dataHistoryReducer from '../../src/reducers/data-history-reducer';

const dataHistoryState = {
    dataHistory: [],
    avgWaitingTime: 0,
    avgEatingTime: 0,
    avgTotalTime: 0,
    isFetching: false,
    isError: false,
    isNoData: false,
}

const dataHistoryData = {
    "-LKDH4O91VJ3Jw-_mJj-": {
        "bookingId": "-LJhaLN9M46sMdqc2EQU",
        "eatingTime": 80,
        "finishTime": "2018-08-19 01:24:46",
        "id": "-LKDH4O91VJ3Jw-_mJj-",
        "startArriving": "2018-08-19 01:16:56",
        "startEating": "2018-08-19 01:17:20",
        "totalTime": 140,
        "waitingTime": 60
    },
    "-LKDHFWAznvJsVegemPd": {
        "bookingId": "-LJh_wGUKoD9dSppWO9F",
        "eatingTime": 90,
        "finishTime": "2018-08-19 01:25:32",
        "id": "-LKDHFWAznvJsVegemPd",
        "startArriving": "2018-08-18 22:21:21",
        "startEating": "2018-08-18 22:21:37",
        "totalTime": 120,
        "waitingTime": 30
    }
}

describe('Test data-history-reducer', () => {
    it('has a default state', () => {
        //Arrange
        const state = dataHistoryState
        const action = {
            type: 'unexpected'
        }
        //Act
        result = dataHistoryReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state
        })
    })
    it('calls FETCHING_DATA_HISTORY ', () => {
        //Arrange
        const state = dataHistoryState
        const action = {
            type: FETCHING_DATA_HISTORY
        }
        //Act
        result = dataHistoryReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            isFetching: true
        })
    })
    it('calls FETCHING_DATA_HISTORY_SUCCESS', () => {
        //Arrange
        const state = dataHistoryState
        const action = {
            type: FETCHING_DATA_HISTORY_SUCCESS,
            data: dataHistoryData,
            waiting: 60,
            eating: 60,
            total: 120
        }
        //Act
        result = dataHistoryReducer(state, action)
        //Assert
        const assertObj = {
            ...state,
            dataHistory: action.data,
            avgWaitingTime: action.waiting,
            avgEatingTime: action.eating,
            avgTotalTime: action.total,

        }
        expect(JSON.stringify(result)).toEqual(JSON.stringify(assertObj))
    })
    it('calls FETCHING_DATA_HISTORY_FAILURE ', () => {
        //Arrange
        const state = dataHistoryState
        const action = {
            type: FETCHING_DATA_HISTORY_FAILURE
        }
        //Act
        result = dataHistoryReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            isError: true
        })
    })
    it('calls NO_DATA_HISTORY ', () => {
        //Arrange
        const state = dataHistoryState
        const action = {
            type: NO_DATA_HISTORY
        }
        //Act
        result = dataHistoryReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            isNoData: true
        })
    })
})