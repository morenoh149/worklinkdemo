import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class LocationText extends Component<any, any> {
  render() {
    return (
      <Text numberOfLines={1} style={styles.locationText}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  locationText: {
    color: '#424242'
  }
});
