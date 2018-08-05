import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TableDetailFormData from '../main-components/table-detail-form-data';

class TableDetail extends Component {
    static navigationOptions = {
        title: 'Table Detail',
    };
    render() {
        return (
            <View style={styles.container}>
                <TableDetailFormData/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
    }
});

export default TableDetail;
