import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { getSuggestTables, fetchMergeTables } from '../../actions/table-layout-action';

class RecommendTable extends Component {
    componentDidMount(){
        //this.generateTable()
        const {numOfCustomer} = this.props.bookingDetail
        this.props.getSuggestTables(numOfCustomer);
    }
    generateTable(){
        const {tableLayout} = this.props.tableLayout
        const {numOfCustomer} = this.props.bookingDetail
        var tableSet = []
        var table = []
        var availableTables = []
        tableLayout.map((table)=>{
            if(table.available){
                availableTables.push(table)
            }
        })
        availableTables.sort(function(a, b){
            return b.seat - a.seat
        })
        console.log('available: ',availableTables)
        console.log('numOfCustomer: ',numOfCustomer)
        var count = numOfCustomer
        for(var i = 0 ; i < availableTables.length ; i++){
            count = count - availableTables[i]
            
        }
    }
    someText(){
        var text = <View style={styles.tableBorder}><Text>some text</Text></View>
        return text
    }
    render() {
        const {suggestTables} = this.props.tableLayout
        const {numOfCustomer} = this.props.bookingDetail
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Recommend Table </Text>
                <Text>{numOfCustomer}</Text>
                
                    {
                        suggestTables.map((set,key__1)=>(
                            <View style={{ flexDirection: 'row' }} key={key__1}>
                                {
                                    Object.values(set).map((table, key) => (
                                        <View style={styles.tableBorder} key= {key}>
                                            <Text style={styles.tableFont}>Table: {table.table}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        ))
                    }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      
    },
    header: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    tableBorder: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        margin: 5,
        width: 90,
    },
    tableFont:{
        fontSize: 18,
    }
});

function mapStateToProps(state) {
    return {
        bookingDetail: state.bookingDetail,
        tableLayout: state.tableLayout,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSuggestTables: (numOfCustomer) => dispatch(getSuggestTables(numOfCustomer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendTable)
