import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import TablesGrid from '../main-components/tables-grid';
import {connect} from 'react-redux';
import {setTableDetailState} from '../../actions/table-detail-action'

class TablesLayout extends Component {
    onPressTableItem(tableItem){
        this.props.setTableDetailState(tableItem)
        this.navigateToTableDetail()
    }
    navigateToTableDetail(){
        const { navigate } = this.props.navigation;
        navigate('TableDetail')
      }
    render() {
        return (
            <View>
                <TablesGrid onPressTableItem={this.onPressTableItem.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
    return {
        tableDetail: state.tableDetail
    }
  }
  
  function mapDispatchToProps (dispatch){
    return{
        setTableDetailState: (tableItem) => dispatch(setTableDetailState(tableItem))
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(TablesLayout)