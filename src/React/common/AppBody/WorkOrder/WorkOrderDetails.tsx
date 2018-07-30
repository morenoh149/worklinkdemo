import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class WorkOrderDetails extends Component<any, any> {
  render() {
    return <View style={styles.details}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  details: {
    flex: 3,
    padding: '2%'
  }
});
