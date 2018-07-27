import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class LeftHeader extends Component {
  render() {
    return <View style={styles.leftHeader}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  leftHeader: {
    flex: 0.3,
    paddingLeft: '4%'
  }
});
