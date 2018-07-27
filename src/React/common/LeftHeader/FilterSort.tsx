import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FilterSort extends Component {
  render() {
    return (
      <View style={styles.icons}>
        <TouchableOpacity style={styles.filter}>
          <Text style={styles.iconText}>Filter</Text>
          <Icon name="filter" size={20} color="#757575" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sort}>
          <Text style={styles.iconText}>Sort</Text>
          <Icon name="sort" size={20} color="#757575" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icons: {
    flex: 1,
    flexDirection: 'row'
  },
  filter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  sort: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  iconText: {
    color: '#757575'
  }
});
