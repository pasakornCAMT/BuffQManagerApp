import {
    FETCHING_TABLE,
    FETCHING_TABLE_SUCCESS,
    FETCHING_TABLE_FAILURE,
} from '../../src/constants/constants'
import tableLayoutReducer from '../../src/reducers/table-layout-reducer';

const tableLayoutState = {
    tableLayout: [],
    isFetching: false,
    isError: false,
}

const tableLayoutData = [{
    "available": true,
    "bookingId": "",
    "customer": "",
    "customer_phone": "",
    "id": "0",
    "seat": 4,
    "table": "1"
}, {
    "available": true,
    "bookingId": "",
    "customer": "",
    "customer_phone": "",
    "id": "1",
    "seat": 4,
    "table": "2"
}, {
    "available": true,
    "bookingId": "",
    "customer": "",
    "customer_phone": "",
    "id": "2",
    "seat": 4,
    "table": "3"
}]

describe('Test table-layout-reducer', () => {
    it('has a default state', () => {
        //Arrange
        const state = tableLayoutState
        const action = {
            type: 'unexpected'
        }
        //Act
        result = tableLayoutReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state
        })
    })
    it('calls FETCHING_TABLE ', () => {
        //Arrange
        const state = tableLayoutState
        const action = {
            type: FETCHING_TABLE
        }
        //Act
        result = tableLayoutReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            isFetching: true
        })
    })
    it('calls FETCHING_TABLE_SUCCESS', () => {
        //Arrange
        const state = tableLayoutState
        const action = {
            type: FETCHING_TABLE_SUCCESS,
            tableLayout: tableLayoutData,
        }
        //Act
        result = tableLayoutReducer(state, action)
        //Assert
        const assertObj = {
            ...state,
            tableLayout: action.tableLayout,
        }
        expect(JSON.stringify(result)).toEqual(JSON.stringify(assertObj))
    })
    it('calls FETCHING_TABLE_FAILURE ', () => {
        //Arrange
        const state = tableLayoutState
        const action = {
            type: FETCHING_TABLE_FAILURE
        }
        //Act
        result = tableLayoutReducer(state, action)
        //Assert
        expect(result).toEqual({
            ...state,
            isError: true
        })
    })
})

