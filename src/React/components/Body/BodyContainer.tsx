import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LeftHeader from './LeftPanel/Header';
import ActionHeader from './RightPanel/Header/ActionHeader';
// import LeftBody from './LeftPanel/Body/Container';
// import RightBody from './RightPanel/RightPanelBody/Container';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {};
export default class Body extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <LeftHeader />
          <ActionHeader />
        </View>
        <View style={styles.body} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    // backgroundColor: 'green',
    paddingTop: '1%',
    paddingLeft: '3%',
    paddingRight: '3%'
  },
  header: {
    flex: 0.3,
    flexDirection: 'row'
  },
  body: {
    flex: 5,
    backgroundColor: 'red'
  }
});
