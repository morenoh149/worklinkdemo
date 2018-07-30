import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Location extends Component<any, any> {
  render() {
    return <View style={styles.location}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  location: {
    flex: 1,
    justifyContent: 'center'
  }
});
