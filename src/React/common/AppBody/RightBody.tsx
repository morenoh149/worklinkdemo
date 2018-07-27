import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class RightBody extends Component {
  render() {
    return <View style={styles.rightBody}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  rightBody: {
    flex: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD'
  }
});
