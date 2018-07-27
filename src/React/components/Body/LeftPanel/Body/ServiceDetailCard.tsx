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
      <View style={styles.container}>
        <Text style={[styles.status]}>{status.toLocaleUpperCase()}</Text>
        <Text style={[styles.id]}>{id}</Text>
        <View>
          <View>
            <Text style={styles.title}>Service Details</Text>
            <View style={[styles.detailItem, styles.padding]}>
              <View style={styles.icon} />
              <Text style={styles.subTitle}>SERVICE LOCATION</Text>
            </View>
            <Text style={[styles.detail, styles.padding]}>
              {serviceLocation}
            </Text>
          </View>
          <View>
            <View style={[styles.detailItem, styles.padding]}>
              <View style={styles.icon} />
              <Text style={styles.subTitle}>WORK CODE</Text>
            </View>
            <Text style={[styles.detail, styles.padding]}>{workCode}</Text>
          </View>
          <View>
            <View style={[styles.detailItem, styles.padding]}>
              <View style={styles.icon} />
              <Text style={styles.subTitle}>SHOP</Text>
            </View>
            <Text style={[styles.detail, styles.padding]}>{shop}</Text>
          </View>
          <View>
            <View style={[styles.detailItem, styles.padding]}>
              <View style={styles.icon} />
              <Text style={styles.subTitle}>ASSIGNED TO</Text>
            </View>
            <Text style={[styles.detail, styles.padding]}>{assignedTo}</Text>
          </View>
          <View>
            <View style={[styles.detailItem, styles.padding]}>
              <View style={styles.icon} />
              <Text style={styles.subTitle}>CLIENT PREFERRED SCHEDULE</Text>
            </View>
            <View style={styles.clientSchedule}>
              <Text style={[styles.detail, styles.padding]}>
                {clientSchedule}
              </Text>
              <TouchableOpacity>
                <Text style={styles.add}>+ Add to calendar</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    paddingBottom: '2%'
  },
  status: {
    color: '#424242',
    fontWeight: 'bold',
    fontSize: 12,
    paddingBottom: '3%'
  },
  id: {
    fontSize: 18,
    color: '#424242',
    fontWeight: 'bold',
    paddingBottom: '3%'
  },
  title: {
    color: '#424242',
    paddingBottom: '2%',
    fontWeight: 'bold'
  },
  detailItem: {
    flexDirection: 'row'
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
  clientSchedule: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  add: {
    color: '#424242',
    fontWeight: 'bold'
  }
});
