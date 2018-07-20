import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type Props = {};
export default class NavBar extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            // Default style for every tab
            styles.tabContainer,
            styles.tabContainerActive
          ]}
        >
          <View style={[styles.tabIcon, styles.tabIconActive]} />
          <Text style={styles.tabText}>MY QUEUE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabContainer]}>
          <View style={styles.tabIcon} />
          <Text style={styles.tabText}>UNASSIGNED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabContainer]}>
          <View style={styles.tabIcon} />
          <Text style={styles.tabText}>CALENDAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabContainer]}>
          <View style={styles.tabIcon} />
          <Text style={styles.tabText}>NOTICES</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    // backgroundColor: 'red',
    flexDirection: 'row'
    // alignItems: 'center'
  },
  tabContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'transparent'
    // backgroundColor: 'green'
  },
  tabText: {
    marginTop: 6
  },
  tabIcon: {
    backgroundColor: '#BDBDBD',
    borderRadius: 30,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabContainerActive: {
    borderBottomColor: '#212121'
  },
  tabIconActive: {
    backgroundColor: '#212121'
  }
});
