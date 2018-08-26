import {
    FETCHING_DATA_HISTORY,
    FETCHING_DATA_HISTORY_SUCCESS,
    FETCHING_DATA_HISTORY_FAILURE,
    NO_DATA_HISTORY,
} from '../../src/constants/constants'
import { 
    getDataHistory, 
    getDataHistorySuccess, 
    getDataHistoryFailure,
    noDataHistory
} from '../../src/actions/data-history-action';

describe('Test data-history-action',()=>{
    it('calls FETCHING_DATA_HISTORY & should return only type',()=>{
        //Arange

        //Act
        const result = getDataHistory()
        //Assert
        expect(result).toEqual({
            type: FETCHING_DATA_HISTORY,
        })
    })
    it('calls FETCHING_DATA_HISTORY & should return Struct',()=>{
        //Arange

        //Act

        //Assert

    })
    it('calls FETCHING_DATA_HISTORY_FAILURE & should return only type',()=>{
        //Arange

        //Act
        const result = getDataHistoryFailure()
        //Assert
        expect(result).toEqual({
            type: FETCHING_DATA_HISTORY_FAILURE,
        })
    })
    it('calls NO_DATA_HISTORY & should return only type',()=>{
        //Arange

        //Act
        const result = noDataHistory()
        //Assert
        expect(result).toEqual({
            type: NO_DATA_HISTORY,
        })
    })
})