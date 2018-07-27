import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class OrderDetail extends Component<any, any> {
  render() {
    const { history } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>History</Text>
        <View style={styles.history}>
          <View style={styles.historyItem}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JJ</Text>
            </View>
            <Text style={styles.event}>{history.event.description}</Text>
          </View>
          <Text style={styles.time}>{history.event.time}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '5%',
    paddingBottom: '2%'
  },
  title: {
    color: '#424242',
    paddingBottom: '2%',
    fontWeight: 'bold'
  },
  history: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '2%'
  },
  historyItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 0.6
  },
  avatar: {
    backgroundColor: '#BDBDBD',
    borderRadius: 40,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarText: {
    color: '#424242'
  },
  event: {
    color: '#757575',
    fontSize: 16
  },
  time: {
    color: '#757575'
  }
});
