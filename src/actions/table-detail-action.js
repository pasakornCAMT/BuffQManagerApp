import{
    SET_TABLE_DETAIL_STATE
} from '../constants/constants'

export function setTableDetailState(tableItem){
    return{
        type: SET_TABLE_DETAIL_STATE,
        tableItem,
    }
}