import {
    FETCHING_DATA_HISTORY,
    FETCHING_DATA_HISTORY_SUCCESS,
    FETCHING_DATA_HISTORY_FAILURE,
    NO_DATA_HISTORY,
} from '../constants/constants'

const dataHistoryState = {
    dataHistory: [],
    avgWaitingTime: 0,
    avgEatingTime: 0,
    avgTotalTime: 0,
    isFetching: false,
    isError: false,
    isNoData: false,
}

export default function dataHistoryReducer(state = dataHistoryState, action) {
    switch (action.type) {
        case FETCHING_DATA_HISTORY:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_DATA_HISTORY_SUCCESS:
            return {
                dataHistory: action.data,
                avgWaitingTime: action.waiting,
                avgEatingTime: action.eating,
                avgTotalTime: action.total,
                isFetching: false,
                isError: false,
                isNoData: false,
            }
        case FETCHING_DATA_HISTORY_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: true,
                isNoData: false,
            }
        case NO_DATA_HISTORY:
            return {
                ...state,
                isFetching: false,
                isError: false,
                isNoData: true
            }
        default:
            return state

    }
}