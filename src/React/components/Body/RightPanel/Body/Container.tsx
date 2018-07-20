import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ListView
} from 'react-native';

type Props = {};
export default class RightBody extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.actions}>
          <View style={styles.actionButton} />
          <Text style={styles.actionText}>Start Work</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actions}>
          <View style={styles.actionButton} />
          <Text style={styles.actionText}>On Hold</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actions}>
          <View style={styles.actionButton} />
          <Text style={styles.actionText}>Request for Attention</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actions}>
          <View style={styles.actionButton} />
          <Text style={styles.actionText}>Completed</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: '2%',
    paddingRight: '2%',
    marginLeft: '2%',
    paddingTop: '4%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD'
  },
  actions: {
    // backgroundColor: 'red',
    alignItems: 'center',
    width: 100,
    marginBottom: 30
  },
  actionButton: {
    backgroundColor: '#BDBDBD',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3%'
  },
  actionText: {
    textAlign: 'center'
  }
});
