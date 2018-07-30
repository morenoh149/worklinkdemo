import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class WorkOrderCard extends Component<any, any> {
  render() {
    return <View style={styles.wordCard}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  wordCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    padding: '3%',
    paddingBottom: '7%'
  }
});
