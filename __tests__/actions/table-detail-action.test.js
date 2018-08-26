import {
    SET_TABLE_DETAIL_STATE
} from '../../src/constants/constants'
import { setTableDetailState } from '../../src/actions/table-detail-action';

describe('Test table-detail-action', () => {
    it('calls SET_TABLE_DETAIL_STATE & should return Struct', () => {
        //Arange
        const table = {
            available: false,
            bookingId: "-LJhaXtXLF-SdSygYcT_",
            customer: "Ken",
            customer_phone: "Ken_0899696523",
            id: "0",
            seat: 4,
            table: "1"
        }
        //Act
        const result = setTableDetailState(table)
        //Assert
        expect(result).toEqual({
            type: SET_TABLE_DETAIL_STATE,
            tableItem: {
                available: false,
                bookingId: "-LJhaXtXLF-SdSygYcT_",
                customer: "Ken",
                customer_phone: "Ken_0899696523",
                id: "0",
                seat: 4,
                table: "1"
            }
        })
    })
})