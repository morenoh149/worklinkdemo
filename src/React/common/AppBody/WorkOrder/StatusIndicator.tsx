import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class StatusIndicator extends Component<any, any> {
  render() {
    return <View style={styles.statusIndicator} />;
  }
}

const styles = StyleSheet.create({
  statusIndicator: {
    backgroundColor: '#BDBDBD',
    borderRadius: 10,
    width: 10,
    height: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
