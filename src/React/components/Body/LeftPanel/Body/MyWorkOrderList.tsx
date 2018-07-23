import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ListView,
  FlatList
} from 'react-native';
import { workOrders } from '../../../../../data';

type Props = {};
export default class MyWorkOrderList extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
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
                <TouchableOpacity style={styles.more}>
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
    flex: 2,
    margin: '3%',
    marginTop: '7%'
  },
  wordCards: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    padding: '3%',
    paddingBottom: '7%'
    // backgroundColor: 'pink'
  },
  details: {
    flex: 3,
    // backgroundColor: 'red'
    // flexDirection: 'row',
    padding: '2%'
  },
  status: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    flex: 1
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#757575'
    // backgroundColor: 'gold'
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
    // backgroundColor: 'green',
    flex: 1.5,
    justifyContent: 'center'
  },
  workCodeText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#616161'
    // flex: 1
  },
  workCodeId: {
    fontSize: 12,
    color: '#9E9E9E'
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'blue',
    padding: '1%'
  },
  location: {
    // backgroundColor: 'gold',
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
