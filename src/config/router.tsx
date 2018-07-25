import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import Header from '../React/components/Header';
import MyQueue from '../React/screens/MyQueueScreen';
import OrderDetail from '../React/screens/OrderDetail';

const WorkOrderListStack = createStackNavigator(
  {
    Feed: {
      screen: MyQueue
    },
    Details: {
      screen: OrderDetail,
      navigationOptions: {
        title: null
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const UnassignedListStack = createStackNavigator(
  {
    Feed: {
      screen: MyQueue
    },
    Details: {
      screen: OrderDetail
      //   navigationOptions: ({ navigation }) => ({
      //     title: `${navigation.state.params.id}`
      //   })
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const TabNavigator = createMaterialTopTabNavigator(
  {
    'MY QUEUE': { screen: WorkOrderListStack },
    UNASSIGNED: { screen: UnassignedListStack },
    CALENDAR: { screen: MyQueue },
    NOTICES: { screen: MyQueue }
  },
  {
    tabBarOptions: {
      //   activeTintColor: '#ffffff',
      labelStyle: {
        fontSize: 14,
        color: 'black'
      },
      style: {
        backgroundColor: 'transparent'
      },
      indicatorStyle: {
        backgroundColor: 'black'
      }
    }
  }
);

export default TabNavigator;
