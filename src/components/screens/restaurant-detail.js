import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text, Divider } from 'react-native-elements'
import RestaurantFormData from '../main-components/restaurant-form-data';
import { closeRestaurant, openRestaurant, logout } from '../../actions/firebase-action'

class RestaurantDetail extends Component {

  openRestaurant() {
    openRestaurant()
  }

  closeRestaurant() {
    closeRestaurant()
  }

  render() {
    const { restaurant } = this.props.restaurant
    return (
      <View style={styles.container}>
        <Text h4>Console</Text>
        <Divider style={styles.divider} />
        {
          restaurant.status == 'open' ? (
            <Button
              title='Close Restaurant'
              backgroundColor='red'
              color='white'
              onPress={this.closeRestaurant.bind(this)}
            />
          ) : (
              <Button
                title='Open Restaurant'
                backgroundColor='#00ff85'
                color='#38003c'
                onPress={this.openRestaurant.bind(this)}
              />
            )
        }
        <RestaurantFormData restaurant={restaurant} />
        <Button
          title='Logout'
          backgroundColor='red'
          color='white'
          onPress={()=>logout()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 15,
    elevation: 2
  },
  divider: {
    marginVertical: 5,
    backgroundColor: '#ccc'
  }
});

function mapStateToProps(state) {
  return {
    restaurant: state.restaurant
  }
}

export default connect(mapStateToProps)(RestaurantDetail)

