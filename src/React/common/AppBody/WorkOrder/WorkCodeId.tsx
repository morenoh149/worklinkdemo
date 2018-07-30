import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class WorkCodeId extends Component<any, any> {
  render() {
    return <Text style={styles.workCodeId}>{this.props.children}</Text>;
  }
}

const styles = StyleSheet.create({
  workCodeId: {
    fontSize: 12,
    color: '#9E9E9E'
  }
});
