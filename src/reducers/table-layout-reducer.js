import {
    FETCHING_TABLE,
    FETCHING_TABLE_SUCCESS,
    FETCHING_TABLE_FAILURE,
    GET_SUGGEST_TABLES_SUCCESS
} from '../constants/constants'

const tableLayoutState = {
    tableLayout: [],
    isFetching: false,
    isError: false,
    suggestTables: []
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
                ...state,
                tableLayout: action.tableLayout,
                isFetching: false,
                isError: false,
            }
        case FETCHING_TABLE_FAILURE:
            return{
                ...state,
                isError: true
            }
        case GET_SUGGEST_TABLES_SUCCESS:
            return{
                ...state,
                suggestTables: action.tables
            }            
        default:
            return state
    }
}