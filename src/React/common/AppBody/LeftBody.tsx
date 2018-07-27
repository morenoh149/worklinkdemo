import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class LeftBody extends Component {
  render() {
    return <View style={styles.leftBody}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  leftBody: {
    flex: 5,
    borderWidth: 0.8,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    paddingTop: '8%',
    paddingLeft: '8%',
    paddingRight: '8%',
    paddingBottom: '2%'
  }
});
