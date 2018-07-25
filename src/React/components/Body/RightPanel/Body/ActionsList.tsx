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
export default class ActionList extends Component<Props> {
  render() {
    return (
      <View>
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
  actions: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 100,
    marginTop: '15%'
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
