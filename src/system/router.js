import React, { Component } from 'react';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomerBookingBoard from '../components/screens/customer-booking-board';
import RestaurantDetail from '../components/screens/restaurant-detail';

const CustomerBookingBoardStack = StackNavigator({
    CustomerBookingBoard: {
      screen: CustomerBookingBoard,
      navigationOptions: {
        header: null
      }
    },
})

const RestaurantDetailStack = StackNavigator({
    RestaurantDetail: {
      screen: RestaurantDetail,
      navigationOptions: {
        header: null
      }
    },

})

export default createBottomTabNavigator({
    Board: {screen: CustomerBookingBoardStack},
    Restaurant: {screen: RestaurantDetailStack},
},
{
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({ focused, tintColor}) => {
          const {routeName} = navigation.state;
          let iconName;
          if(routeName === 'Board') {
            iconName = `ios-list-box${focused ? '' : '-outline'}`;
          } else if (routeName === 'Restaurant') {
            iconName = `ios-home${focused ? '' : '-outline'}`;
          }
          return <Ionicons name={iconName} size={25} color={tintColor}/>
        },
      }),
      tabBarOptions:{
        activeTintColor: '#38003c',
        inactiveTintColor: 'gray',
      },
      tabBarComponent: BottomTabBar,
      tabBarPosition: 'bottom',
      animationEnabled: true,
      swipeEnabled: true,
})