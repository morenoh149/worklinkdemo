import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class WorkOrderContainer extends Component<any, any> {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2
  }
});
