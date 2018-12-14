import { subset_sum, getSuggestTables, testTable } from "../../src/actions/table-layout-action";

describe('Test firebase-action',()=>{
    it('calculate subset_sum', (done) => {
        //Arange
        var tables = [
            {table:1, seat:4},
            {table:2, seat:4},
            {table:3, seat:4},
            {table:4, seat:4},
            {table:5, seat:4},
            {table:6, seat:4},
            {table:7, seat:4},
            {table:8, seat:4},
            {table:9, seat:4},
            {table:10, seat:8},

        ]
        var num = 1
       
        //Act
        var data = subset_sum(tables,num)
        var data2 = testTable();
        //Assert
       

        setTimeout(() => {
            expect(data2).toBeDefined();
            done();
          }, 3000);
    })
})