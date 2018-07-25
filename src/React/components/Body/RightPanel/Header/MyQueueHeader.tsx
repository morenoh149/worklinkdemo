import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {};
export default class MyQueueHeader extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>My Queue</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity style={styles.filter}>
            <Text style={styles.iconText}>Filter</Text>
            <Icon name="filter" size={20} color="#757575" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
    // marginLeft: '3%'
  },
  title: {
    flex: 2
    // paddingLeft: '5%'
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#424242'
  },
  icons: {
    flex: 1,
    flexDirection: 'row'
  },
  filter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  iconText: {
    color: '#757575'
  }
});
