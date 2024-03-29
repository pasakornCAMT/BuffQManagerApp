import React, { Component } from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomerBookingBoard from '../components/screens/customer-booking-board';
import BookingDetail from '../components/screens/booking-detail'
import RestaurantDetail from '../components/screens/restaurant-detail';
import AddCustomerBooking from '../components/screens/add-customer-booking';
import TablesLayout from '../components/screens/tables-layout';
import TableDetail from '../components/screens/table-detail';
import DataHistory from '../components/screens/data-history';
import TableView from '../components/screens/table-view';
import createTabNavigator from '../../node_modules/react-navigation-tabs/dist/utils/createTabNavigator';
import EditBooking from '../components/screens/edit-booking';

const CustomerBookingBoardStack = StackNavigator({
  CustomerBookingBoard: {
    screen: CustomerBookingBoard,
    navigationOptions: {
      header: null
    }
  },
  BookingDetail: {
    screen: BookingDetail,
  },
  TablesLayout: {
    screen: TablesLayout,
  },
  EditBooking: {
    screen: EditBooking,
  }
})

const TablesViewStack = StackNavigator({
  TableView: {
    screen: TableView,
    navigationOptions: {
      header: null
    },
  },
  TableDetail: {
    screen: TableDetail,
  }

})

const AddCustomerBookingStack = StackNavigator({
  AddCustomerBooking: {
    screen: AddCustomerBooking,
    navigationOptions: {
      header: null
    }
  }
})

const DataHistoryStack = StackNavigator({
  DataHistory: {
    screen: DataHistory,
    navigationOptions: {
      header: null
    }
  }
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
  Board: { screen: CustomerBookingBoardStack },
  Tables: { screen: TablesViewStack },
  AddBooking: { screen: AddCustomerBookingStack },
  History: { screen: DataHistoryStack },
  Restaurant: { screen: RestaurantDetailStack },
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Board') {
          iconName = `ios-list-box${focused ? '' : '-outline'}`;
        } else if (routeName === 'Tables') {
          iconName = `md-square${focused ? '' : '-outline'}`;
        } else if (routeName === 'Restaurant') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'AddBooking') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'History') {
          iconName = `ios-clock${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: '#2f3640',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: BottomTabBar,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  })