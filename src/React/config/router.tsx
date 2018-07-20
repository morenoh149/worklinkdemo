import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

// main tab navigator
export const TabNavigator = createMaterialTopTabNavigator(
  {
    UNASSIGNED: { screen: Unassigned },
    'MY QUEUE': { screen: MyQueue }
  },
  {}
);

// main navigator
export const RootStack = createStackNavigator(
  {
    MainNavigator: TabNavigator
  },
  {
    initialRouteName: 'MainNavigator',
    headerMode: 'float',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      header: <Header />
    }
  }
);
