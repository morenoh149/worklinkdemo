import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ServiceDescription extends Component<any, any> {
  render() {
    const {
      workDescription,
      clientDescription
    } = this.props.navigation.state.params;

    return (
      <View style={styles.serviceDescription}>
        <Text style={styles.serviceDetails}>Service Description</Text>
        <View>
          <View style={[styles.detailItem, styles.padding]}>
            <View style={styles.icon} />
            <Text style={styles.title}>WORK DESCRIPTION</Text>
          </View>
          <Text style={[styles.detail, styles.padding]}>{workDescription}</Text>
        </View>
        <View>
          <View style={[styles.detailItem, styles.padding]}>
            <View style={styles.icon} />
            <Text style={styles.title}>CLIENT DESCRIPTION</Text>
          </View>
          <Text style={[styles.detail, styles.padding]}>
            {clientDescription}
          </Text>
        </View>
        <View style={[styles.serviceDescIcons, styles.padding]}>
          <View style={styles.png}>
            <Icon name="ios-image-outline" size={18} color="black" />
            <Text>PNG_01</Text>
          </View>
          <TouchableOpacity>+ Add notes or photos</TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  serviceDescription: {
    // backgroundColor: 'green'
    // paddingTop: '3%',
    paddingBottom: '3%'
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
