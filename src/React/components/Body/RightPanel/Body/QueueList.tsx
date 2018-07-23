import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { workOrders } from '../../../../../data';

type Props = {};
export default class MyQueueList extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={workOrders}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.wordCards}>
              <View style={styles.workCode}>
                <Text numberOfLines={1} style={styles.workCodeText}>
                  {item.workCode}
                </Text>
              </View>
              <View style={styles.location}>
                <Text numberOfLines={1} style={styles.locationText}>
                  {item.serviceLocation}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // paddingLeft: '2%',
    // paddingRight: '2%',
    marginLeft: '2%',
    // paddingTop: '2%',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#BDBDBD'
  },
  wordCards: {
    // backgroundColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    padding: '4%'
  },
  workCode: {
    flexDirection: 'row',
    padding: '1%'
  },
  workCodeText: {
    fontWeight: 'bold',
    flex: 1
  },
  location: {
    flexDirection: 'row',
    padding: '1%'
  },
  locationText: {
    flex: 1
  }
});
