import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActionHeader from './ActionHeader';
import MyQueueHeader from './MyQueueHeader';

type Props = {};
export default class RightPanelHeader extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ActionHeader />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '2%'
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#BDBDBD'
  }
});
