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
      <View style={styles.container}>
        <Text style={styles.title}>Service Description</Text>
        <View>
          <View style={styles.detailItem}>
            <View style={styles.icon} />
            <Text style={styles.subTitle}>WORK DESCRIPTION</Text>
          </View>
          <Text style={styles.detail}>{workDescription}</Text>
        </View>
        <View>
          <View style={styles.detailItem}>
            <View style={styles.icon} />
            <Text style={styles.subTitle}>CLIENT DESCRIPTION</Text>
          </View>
          {/* TO DO: add more button */}
          <Text style={styles.detail}>{clientDescription}</Text>
        </View>
        <View style={styles.serviceIcons}>
          <View style={styles.image}>
            <Icon name="ios-image-outline" size={18} color="#424242" />
            <Text style={styles.imageText}>PNG_01</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.add}>+ Add notes or photos</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    paddingTop: '5%',
    paddingBottom: '2%'
  },
  title: {
    color: '#424242',
    paddingBottom: '2%',
    fontWeight: 'bold'
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
  subTitle: {
    fontWeight: 'bold',
    color: '#757575',
    fontSize: 12,
    paddingBottom: '2%',
    paddingLeft: '3%'
  },
  detail: {
    color: '#424242',
    paddingBottom: '3%',
    paddingLeft: '6%'
  },
  serviceIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '3%'
  },
  image: {
    flex: 0.25,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageText: {
    color: '#424242'
  },
  add: {
    color: '#424242',
    fontWeight: 'bold'
  }
});
