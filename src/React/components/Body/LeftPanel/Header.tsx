import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {};
export default class LeftPanelHeader extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>My Work Orders</Text>
        </View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingLeft: '2%',
    // paddingRight: '2%',
    // marginRight: '2%',
    // borderWidth: 1,
    // borderStyle: 'solid',
    borderColor: '#BDBDBD'
  },
  title: {
    flex: 2.5
  },
  titleText: {
    fontSize: 20,
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
  sort: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  iconText: {
    color: '#757575'
  }
});
