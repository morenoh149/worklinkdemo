import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ListView
} from 'react-native';

type Props = {};
export default class LeftBody extends Component<Props> {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    paddingLeft: '2%',
    paddingRight: '2%',
    marginRight: '2%'
  }
});
