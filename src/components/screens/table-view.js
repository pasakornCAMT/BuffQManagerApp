import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import GridView from 'react-native-super-grid';
import TableItem from '../sub-components/table-item';
import { setTableDetailState } from '../../actions/table-detail-action'

class TableView extends Component {
    onPressTableItem(tableItem){
        const { navigate } = this.props.navigation
        this.props.setTableDetailState(tableItem)
        navigate('TableDetail')
    }
    render() {
        const { tableLayout } = this.props.tableLayout
        return (
            <GridView
                itemDimension={100}
                items={tableLayout}
                style={styles.container}
                renderItem={item => (
                    <TableItem item={item} onPressTableItem={this.onPressTableItem.bind(this)} />
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginVertical: 15,
        elevation: 2,
    }
});

function mapStateToProps(state) {
    return {
        tableLayout: state.tableLayout
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setTableDetailState: (tableItem) => dispatch(setTableDetailState(tableItem)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableView)
