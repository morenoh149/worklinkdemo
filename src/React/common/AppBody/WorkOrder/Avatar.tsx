import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default class Avatar extends Component<any, any> {
  render() {
    return (
      <View style={styles.avatarContainer}>
        <TouchableOpacity style={styles.avatar}>
          {this.props.children}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    padding: '1%'
  },
  avatar: {
    backgroundColor: '#BDBDBD',
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
