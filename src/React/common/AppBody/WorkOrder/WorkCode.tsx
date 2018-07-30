import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class WorkCode extends Component<any, any> {
  render() {
    return <View style={styles.workCode}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  workCode: {
    flex: 1.5,
    justifyContent: 'center'
  }
});
