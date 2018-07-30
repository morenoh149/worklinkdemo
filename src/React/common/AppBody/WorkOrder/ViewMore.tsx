import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class ViewMore extends Component<any, any> {
  render() {
    return (
      <TouchableOpacity
        style={styles.more}
        onPress={() => this.props.onViewMore(this.props.item)}
      >
        <Text style={styles.moreText}>View More</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  more: {
    flex: 1,
    justifyContent: 'center'
  },
  moreText: {
    color: '#757575'
  }
});
