import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class StatusText extends Component<any, any> {
  render() {
    return <Text style={styles.statusText}>{this.props.children}</Text>;
  }
}

const styles = StyleSheet.create({
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#757575'
  }
});
