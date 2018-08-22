import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';

class RecommendTable extends Component {
    componentWillMount(){
        this.generateTable()
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
        const {tableLayout} = this.props
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

export default connect(mapStateToProps)(RecommendTable)
