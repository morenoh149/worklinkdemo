import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ClientCard extends Component<any, any> {
  render() {
    const { client } = this.props.navigation.state.params;

    return (
      <View style={styles.client}>
        <View>
          <View style={[styles.detailItem, styles.padding]}>
            <View style={styles.icon} />
            <Text style={styles.title}>NAME</Text>
          </View>
          <Text style={[styles.detail, styles.padding]}>{client.name}</Text>
        </View>
        <View>
          <View style={[styles.detailItem, styles.padding]}>
            <View style={styles.icon} />
            <Text style={styles.title}>NET ID</Text>
          </View>
          <Text style={[styles.detail, styles.padding]}>{client.netId}</Text>
        </View>
        <View>
          <View style={[styles.detailItem, styles.padding]}>
            <View style={styles.icon} />
            <Text style={styles.title}>PHONE NUMBER</Text>
          </View>
          <Text style={[styles.detail, styles.padding]}>
            {client.phoneNumber}
          </Text>
        </View>
        <View>
          <View style={[styles.detailItem, styles.padding]}>
            <View style={styles.icon} />
            <Text style={styles.title}>EMAIL</Text>
          </View>
          <Text style={[styles.detail, styles.padding]}>{client.email}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  client: {
    // backgroundColor: 'yellow'
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
