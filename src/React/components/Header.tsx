import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {};
export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.logo}>NYU WORKLINK</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Icon name="search" size={30} color="#F5F5F5" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatar}>
            <Text>JJ</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="settings" size={30} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#424242',
    paddingTop: '.5%',
    paddingBottom: '.6%'
    // paddingLeft: 15,
    // paddingRight: 15
  },
  title: {
    flex: 4,
    alignItems: 'center'
  },
  logo: {
    fontSize: 22,
    color: '#F5F5F5',
    fontWeight: 'bold',
    paddingLeft: '20%'
  },
  icons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly'
  },
  avatar: {
    backgroundColor: '#BDBDBD',
    borderRadius: 30,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
