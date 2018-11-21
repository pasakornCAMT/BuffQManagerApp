import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GridView from 'react-native-super-grid';
import TableItem from '../sub-components/table-item';
import { connect } from 'react-redux';

class TablesGrid extends Component {
    render() {
        const { tableLayout, suggestTables } = this.props.tableLayout
        return (
            <GridView
                itemDimension={100}
                items={tableLayout}
                style={styles.gridView}
                renderItem={item => (
                    <TableItem item={item} onPressTableItem={this.props.onPressTableItem} />
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        paddingTop: 10,
    },
});

function mapStateToProps(state) {
    return {
        tableLayout: state.tableLayout
    }
}

export default connect(mapStateToProps)(TablesGrid)
