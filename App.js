import React, { Component } from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/React/components/Header';
import NavBar from './src/React/components/NavBar';
// import Body from './src/React/components/Body/BodyContainer';
import TabNavigator from './src/config/router';
import MyQueue from './src/React/screens/MyQueueScreen';
// type Props = {};
// export default class App extends Component<Props> {

//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <Header /> */}
//         {/* <NavBar /> */}
//         <Body />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });
export default createStackNavigator(
  {
    MainNavigator: TabNavigator
  },
  {
    initialRouteName: 'MainNavigator',
    headerMode: 'float',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerTitle: <Header />
    }
  }
);
