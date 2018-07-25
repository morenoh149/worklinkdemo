import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {};
export default class AppBodySkeleton extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={[styles.leftStyles, styles.bothHeaders]} />
          <View
            style={[styles.rightStyles, styles.rightHeader, styles.bothHeaders]}
          />
        </View>
        <View style={styles.body}>
          <View
            style={[styles.leftStyles, styles.leftBody, styles.bothBodies]}
          />
          <View style={[styles.rightStyles, styles.bothBodies]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    paddingTop: '1%',
    paddingLeft: '3%',
    paddingRight: '3%',
    paddingBottom: '3%'
  },
  header: {
    flex: 0.3,
    flexDirection: 'row'
  },
  leftStyles: {
    flex: 2,
    marginRight: '2%'
  },
  rightStyles: {
    flex: 0.7,
    marginLeft: '2%'
  },
  bothHeaders: {
    paddingLeft: '3%'
  },
  rightHeader: {
    flex: 0.6
  },
  body: {
    flex: 5,
    flexDirection: 'row'
  },
  leftBody: {
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  bothBodies: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD'
  }
});
