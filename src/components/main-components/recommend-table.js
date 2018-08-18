import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

class RecommendTable extends Component {
    componentWillMount(){
        this.generateTable()
    }
    generateTable(){
        const {tableLayout} = this.props
        const {numOfCustomer} = this.props
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
        var text2 = <View style={styles.tableBorder}><Text>some text2</Text></View>
        text =  text,text2
        return text
    }
    render() {
        const {tableItem} = this.props
        const {numOfCustomer} = this.props
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
                    {this.someText()}
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
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

export default RecommendTable;
