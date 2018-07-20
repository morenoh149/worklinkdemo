import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};
export default class ActionHeader extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Action</Text>
        </View>
        <View style={styles.icons} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '2%',
    paddingRight: '2%',
    marginLeft: '2%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD'
    // backgroundColor: 'yellow'
  },
  title: {
    flex: 2
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#424242'
  },
  icons: {
    flex: 1,
    flexDirection: 'row'
  }
});
