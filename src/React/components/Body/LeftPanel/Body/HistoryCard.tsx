import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class OrderDetail extends Component<any, any> {
  render() {
    const { history } = this.props.navigation.state.params;

    return (
      <View style={styles.history}>
        <View style={styles.historyItem}>
          <View>
            <View>JJ</View>
            <Text>{history.event.description}</Text>
          </View>
          <Text>{history.event.time}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  history: {
    backgroundColor: 'beige'
  },
  detailItem: {
    flexDirection: 'row'
    // backgroundColor: 'green'
  },
  icon: {
    backgroundColor: '#BDBDBD',
    borderRadius: 10,
    width: 15,
    height: 15
  },
  title: {
    fontWeight: 'bold',
    color: '#757575',
    fontSize: 12,
    paddingBottom: '2%',
    paddingLeft: '3%'
  },
  detail: {
    color: '#757575',
    paddingBottom: '3%',
    paddingLeft: '6%'
  }
});
