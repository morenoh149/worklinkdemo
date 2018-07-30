import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class WorkCodeText extends Component<any, any> {
  render() {
    return (
      <Text numberOfLines={1} style={styles.workCodeText}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  workCodeText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#616161'
  }
});
