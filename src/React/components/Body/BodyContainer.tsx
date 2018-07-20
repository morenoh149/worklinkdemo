import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LeftHeader from './LeftPanel/LeftPanelHeader';
// import RightHeader from './RightPanel/RightPanelHeader';
// import LeftBody from './LeftPanel/LeftPanelBody/Container';
// import RightBody from './RightPanel/RightPanelBody/Container';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {};
export default class Body extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <LeftHeader />

          <View style={styles.rightPanel} />
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
  rightPanel: { flex: 1, backgroundColor: 'yellow' },
  body: {
    flex: 5,
    backgroundColor: 'red'
  }
});
