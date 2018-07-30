import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Client extends Component<any, any> {
  render() {
    return <Text style={styles.client}>{this.props.children}</Text>;
  }
}

const styles = StyleSheet.create({
  client: {
    color: '#757575'
  }
});
