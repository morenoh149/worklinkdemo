import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ListView
} from 'react-native';
import ActionList from './ActionsList';

type Props = {};
export default class RightPanelBody extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ActionList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: 'center',
    // paddingLeft: '2%',
    // paddingRight: '2%',
    marginLeft: '2%',
    paddingTop: '4%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD'
  }
});
