import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import { Button, Text, Divider} from 'react-native-elements'
import {
  fetchRestaurantFromFirebase
} from '../../actions/restaurant-action'
import RestaurantFormData from '../main-components/restaurant-form-data';

class RestaurantDetail extends Component {

  componentWillMount(){
    this.props.fetchRestaurantFromFirebase()
  }

  render() {
    const {restaurant} = this.props.restaurant
    return (
      <View style={styles.container}>
        <Text h4>Console</Text>
        <Divider style={styles.divider}/>
        <Button
          title = 'Open Restaurant'
          backgroundColor = 'tomato'
        />
        <RestaurantFormData restaurant={restaurant}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      padding: 10
    },
    divider:{
      marginVertical: 5,
      backgroundColor: '#ccc'
    }
});

function mapStateToProps(state){
  return{
    restaurant: state.restaurant
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchRestaurantFromFirebase: () => dispatch(fetchRestaurantFromFirebase())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail)
//export default RestaurantDetail;
