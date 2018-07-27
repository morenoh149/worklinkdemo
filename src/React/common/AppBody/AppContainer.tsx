import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class AppContainer extends Component {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    paddingTop: '1%',
    paddingLeft: '3%',
    paddingRight: '3%',
    paddingBottom: '3%'
  }
});
