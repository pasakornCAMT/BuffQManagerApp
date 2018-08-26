import {
    FETCHING_TABLE,
    FETCHING_TABLE_SUCCESS,
    FETCHING_TABLE_FAILURE,
} from '../../src/constants/constants'
import { getTableLayout, getTableLayoutFailure } from '../../src/actions/table-layout-action';

describe('Test table-layout-action', () => {
    it('calls FETCHING_TABLE & should return only type', () => {
        //Arange

        //Act
        const result = getTableLayout()
        //Assert
        expect(result).toEqual({
            type: FETCHING_TABLE,
        })
    })
    it('calls FETCHING_TABLE_SUCCESS & should return Struct',()=>{
        //Arange

        //Act

        //Assert

    })
    it('calls FETCHING_TABLE_FAILURE & should return only type', () => {
        //Arange

        //Act
        const result = getTableLayoutFailure()
        //Assert
        expect(result).toEqual({
            type: FETCHING_TABLE_FAILURE,
        })
    })
})