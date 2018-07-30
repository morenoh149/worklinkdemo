import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { workOrders, IWorkOrder } from '../../../../data';
import { withNavigation } from 'react-navigation';

class MyQueueList extends Component<any, any> {
  onWorkOrderClick = (workOrder: IWorkOrder) => {
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
            <TouchableOpacity
              style={styles.wordCards}
              onPress={() => this.onWorkOrderClick(item)}
            >
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
export default withNavigation(MyQueueList);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#BDBDBD'
  },
  wordCards: {
    borderWidth: 1,
    borderBottomWidth: 0.5,
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
