import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class ServiceDetail extends Component<any, any> {
  render() {
    const {
      id,
      status,
      serviceLocation,
      assignedTo,
      shop,
      workCode,
      clientSchedule
    } = this.props.navigation.state.params;

    return (
      <View style={styles.mainDescription}>
        <Text style={[styles.status]}>{status.toLocaleUpperCase()}</Text>
        <Text style={[styles.id]}>{id}</Text>
        <View>
          <View>
            <Text style={styles.serviceDetails}>Service Details</Text>
            <View style={[styles.detailItem, styles.padding]}>
              <View style={styles.icon} />
              <Text style={styles.title}>SERVICE LOCATION</Text>
            </View>
            <Text style={[styles.detail, styles.padding]}>
              {serviceLocation}
            </Text>
          </View>
          <View>
            <View style={[styles.detailItem, styles.padding]}>
              <View style={styles.icon} />
              <Text style={styles.title}>WORK CODE</Text>
            </View>
            <Text style={[styles.detail, styles.padding]}>{workCode}</Text>
          </View>
          <View>
            <View style={[styles.detailItem, styles.padding]}>
              <View style={styles.icon} />
              <Text style={styles.title}>SHOP</Text>
            </View>
            <Text style={[styles.detail, styles.padding]}>{shop}</Text>
          </View>
          <View>
            <View style={[styles.detailItem, styles.padding]}>
              <View style={styles.icon} />
              <Text style={styles.title}>ASSIGNED TO</Text>
            </View>
            <Text style={[styles.detail, styles.padding]}>{assignedTo}</Text>
          </View>
          <View>
            <View style={[styles.detailItem, styles.padding]}>
              <View style={styles.icon} />
              <Text style={styles.title}>CLIENT PREFERRED SCHEDULE</Text>
            </View>
            <View style={styles.clientSchedule}>
              <Text style={[styles.detail, styles.padding]}>
                {clientSchedule}
              </Text>
              <TouchableOpacity>+ Add to calendar</TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainDescription: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD'
  },
  status: {
    color: '#757575',
    fontWeight: 'bold',
    fontSize: 12,
    paddingBottom: '3%'
  },
  id: {
    fontSize: 18,
    color: '#757575',
    fontWeight: 'bold',
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
