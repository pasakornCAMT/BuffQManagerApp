import{
    SET_TABLE_DETAIL_STATE
} from '../constants/constants'

const tableDetailState = {
    tableItem: []
}

export default function tableDetailReducer(state = tableDetailState, action){
    switch (action.type) {
        case SET_TABLE_DETAIL_STATE:
            return{
                tableItem: action.tableItem
            }
        default:
            return state
    }
}