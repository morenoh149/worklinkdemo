import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Status extends Component<any, any> {
  render() {
    return <View style={styles.status}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  status: {
    flexDirection: 'row',
    flex: 1
  }
});
