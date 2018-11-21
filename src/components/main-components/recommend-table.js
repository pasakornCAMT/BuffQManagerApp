import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { getSuggestTables } from '../../actions/table-layout-action';

class RecommendTable extends Component {
    componentWillMount(){
        //this.generateTable()
        this.props.getSuggestTables();
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
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.tableBorder}>
                        <Text style={styles.tableFont}>Table1</Text>
                    </View>
                    <View style={styles.tableBorder}>
                        <Text style={styles.tableFont}>Table2</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.tableBorder}>
                        <Text style={styles.tableFont}>Table3</Text>
                    </View>
                    <View style={styles.tableBorder}>
                        <Text style={styles.tableFont}>Table4</Text>
                    </View>
                </View>
                {/* {
                    Object.values(suggestTables).map((table) => (
                        <Text>{table.seat}</Text>
                    ))
                } */}
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
        width: 70,
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
        getSuggestTables: () => dispatch(getSuggestTables())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendTable)
