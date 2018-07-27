import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class LeftPanel extends Component {
  render() {
    return <View style={styles.leftPanel}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  leftPanel: {
    flex: 3,
    marginRight: '2%'
  }
});
