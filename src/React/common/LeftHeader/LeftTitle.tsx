import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class LeftTitle extends Component {
  render() {
    return <View style={styles.title}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 2.5
  }
});
