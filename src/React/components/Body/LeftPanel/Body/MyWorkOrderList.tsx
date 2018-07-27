import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { workOrders, IWorkOrder } from '../../../../../data';

export default class MyWorkOrderList extends Component<any, any> {
  onViewMore = (workOrder: IWorkOrder) => {
    this.props.navigation.navigate('Details', {
      ...workOrder
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={workOrders}
          renderItem={({ item }) => (
            <View style={styles.wordCards}>
              <View style={styles.details}>
                <View style={styles.status}>
                  <Text style={styles.statusText}>
                    {item.status.toLocaleUpperCase()}
                  </Text>
                  <View style={styles.statusIndicator} />
                </View>
                <View style={styles.workCode}>
                  <Text numberOfLines={1} style={styles.workCodeText}>
                    {item.workCode}
                  </Text>
                  <Text style={styles.workCodeId}>{item.id}</Text>
                </View>
                <View style={styles.location}>
                  <Text numberOfLines={1} style={styles.locationText}>
                    Service Location: {item.serviceLocation}
                  </Text>
                  <Text style={styles.client}>Client: {item.client.name}</Text>
                </View>
                <TouchableOpacity
                  style={styles.more}
                  onPress={() => this.onViewMore(item)}
                >
                  <Text style={styles.moreText}>View More</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.avatarContainer}>
                <TouchableOpacity style={styles.avatar}>
                  <Text>JJ</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2
  },
  wordCards: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    padding: '3%',
    paddingBottom: '7%'
  },
  details: {
    flex: 3,
    padding: '2%'
  },
  status: {
    flexDirection: 'row',
    flex: 1
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#757575'
  },
  statusIndicator: {
    backgroundColor: '#BDBDBD',
    borderRadius: 10,
    width: 10,
    height: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  workCode: {
    flex: 1.5,
    justifyContent: 'center'
  },
  workCodeText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#616161'
  },
  workCodeId: {
    fontSize: 12,
    color: '#9E9E9E'
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    padding: '1%'
  },
  location: {
    flex: 1,
    justifyContent: 'center'
  },
  locationText: {
    color: '#424242'
  },
  client: {
    color: '#757575'
  },
  more: {
    flex: 1,
    justifyContent: 'center'
  },
  moreText: {
    color: '#757575'
  },
  avatar: {
    backgroundColor: '#BDBDBD',
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
