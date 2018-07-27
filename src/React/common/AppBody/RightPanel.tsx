import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class RightPanel extends Component {
  render() {
    return <View style={styles.rightPanel}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  rightPanel: {
    flex: 1.2,
    marginLeft: '2%'
  }
});
