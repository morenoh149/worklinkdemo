import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LeftContainer from '../../../common/LeftHeader/LeftContainer';
import LeftTitle from '../../../common/LeftHeader/LeftTitle';
import FilterSort from '../../../common/LeftHeader/FilterSort';

export default class MyWorkOrderHeader extends Component {
  render() {
    return (
      <LeftContainer>
        <LeftTitle>
          <Text style={styles.titleText}>{this.props.children}</Text>
          <View style={styles.onCall}>
            <TouchableOpacity style={styles.callBottom} />
            <Text style={styles.callText}>I am on call</Text>
          </View>
        </LeftTitle>
        <FilterSort />
      </LeftContainer>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#424242'
  },
  onCall: {
    flexDirection: 'row',
    marginTop: '2%',
    marginLeft: '5%',
    alignSelf: 'center'
  },
  callBottom: {
    color: '#424242',
    marginRight: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    borderRadius: 3,
    width: 15,
    height: 15
  },
  callText: {
    fontSize: 12,
    color: '#424242'
  }
});
