import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class LeftContainer extends Component {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#BDBDBD'
  }
});
