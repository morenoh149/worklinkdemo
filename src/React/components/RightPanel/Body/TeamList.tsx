import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import { workOrders } from '../../../../data';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TeamList extends Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.teamSearch}>
          <View style={styles.searchInput}>
            <TextInput
              style={styles.inputText}
              placeholder={'Enter First or Last Name'}
              placeholderTextColor={'#999'}
              underlineColorAndroid={'#fff'}
              autoCorrect={false}
              // ref={}
            />
            <Icon name="search" size={18} color="#BDBDBD" />
          </View>
        </View>
        <FlatList
          style={styles.teamContainer}
          data={workOrders}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.wordCards}>
              <View style={styles.teamMember}>
                <Text style={styles.teamMemberText}>{item.client.name}</Text>
              </View>
              <View style={styles.countIcon}>
                <Text style={styles.countText}>5</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
        <View style={styles.addGroups}>
          <TouchableOpacity style={styles.addGroupButton}>
            <Text style={styles.addGroupText}>Add Groups or People</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'space-around'
  },
  teamSearch: {
    flex: 0.2,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    height: 35,
    padding: '2%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD'
  },
  inputText: {
    width: '75%',
    fontSize: 12
  },
  teamContainer: {
    flex: 1
  },
  wordCards: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    padding: '4%'
  },
  teamMember: {
    // flexDirection: 'row',
    // padding: '1%',
    // backgroundColor: 'red'
  },
  teamMemberText: {
    flex: 1
  },
  countIcon: {
    backgroundColor: '#BDBDBD',
    borderRadius: 30,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  countText: {
    // flex: 1
  },
  addGroups: {
    flex: 1,
    paddingTop: '15%'
  },
  addGroupButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    height: 45,
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  addGroupText: {
    fontSize: 12
  }
});
