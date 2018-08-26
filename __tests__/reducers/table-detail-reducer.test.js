import {
    SET_TABLE_DETAIL_STATE
} from '../../src/constants/constants'
import tableDetailReducer from '../../src/reducers/table-detail-reducer';

const tableDetailState = {
    tableItem: []
}

const tableDetailData = {
    available: false,
    bookingId: "-LJhaXtXLF-SdSygYcT_",
    customer: "Ken",
    customer_phone: "Ken_0899696523",
    id: "0",
    seat: 4,
    table: "1"
}

describe('Test table-detail-reducer', () => {
    it('has a default state', () => {
        //Arrange
        const state = tableDetailState
        const action = {
            type: 'unexpected'
        }
        //Act
        result = tableDetailReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state
        })
    })
    it('calls SET_TABLE_DETAIL_STATE', () => {
        //Arrange
        const state = tableDetailState
        const action = {
            type: SET_TABLE_DETAIL_STATE,
            tableItem: tableDetailData
        }
        //Act
        result = tableDetailReducer(state, action)
        //Assert
        const assertObj = {
            ...state,
            tableItem: action.tableItem,
        }
        expect(JSON.stringify(result)).toEqual(JSON.stringify(assertObj))
   })
})