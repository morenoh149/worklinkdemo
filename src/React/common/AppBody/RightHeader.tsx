import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class RightHeader extends Component {
  render() {
    return <View style={styles.rightHeader}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  rightHeader: {
    flex: 0.3,
    paddingLeft: '10%',
    alignItems: 'center'
  }
});
