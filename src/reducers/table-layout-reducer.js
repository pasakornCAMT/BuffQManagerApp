import {
    FETCHING_TABLE,
    FETCHING_TABLE_SUCCESS,
    FETCHING_TABLE_FAILURE,
} from '../constants/constants'

const tableLayoutState = {
    tableLayout: [],
    isFetching: false,
    isError: false,
}

export default function tableLayoutReducer(state = tableLayoutState, action){
    switch (action.type) {
        case FETCHING_TABLE:
            return{
                ...state,
                isFetching: true
            }
        case FETCHING_TABLE_SUCCESS:
            return{
                tableLayout: action.tableLayout,
                isFetching: false,
                isError: false,
            }
        case FETCHING_TABLE_FAILURE:
            return{
                ...state,
                isError: true
            }        
        default:
            return state
    }
}