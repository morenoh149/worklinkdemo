import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import Header from '../React/components/Header';
import MyQueue from '../React/screens/MyQueueScreen';

const TabNavigator = createMaterialTopTabNavigator(
  {
    UNASSIGNED: { screen: MyQueue },
    'MY QUEUE': { screen: MyQueue },
    Shop: { screen: MyQueue }
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
        color: 'black'
      },
      style: {
        backgroundColor: 'transparent'
      }
    }
  }
);

// const Routes = createStackNavigator(
//   {
//     MainNavigator: MyQueue
//   },
//   {
//     initialRouteName: 'MainNavigator',
//     headerMode: 'float',
//     /* The header config from HomeScreen is now here */
//     navigationOptions: {
//       headerTitle: <Header />
//     }
//   }
// );

// export default Routes;
// const Routes = createStackNavigator(
//   {
//     MainNavigator: TabNavigator
//   },
//   {
//     initialRouteName: 'MainNavigator',
//     headerMode: 'float',
//     /* The header config from HomeScreen is now here */
//     navigationOptions: {
//       headerTitle: <Header />
//     }
//   }
// );

export default TabNavigator;
