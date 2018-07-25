import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import LeftHeader from '../components/Body/LeftPanel/Header';
import RightHeader from '../components/Body/RightPanel/Header/ActionHeader';
import LeftBody from '../components/Body/LeftPanel/Body/MyWorkOrderList';
import RightBody from '../components/Body/RightPanel/Body/ActionsList';

import { NavigationScreenProp } from 'react-navigation';

export interface IMyQueueScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class MyQueueScene extends Component<IMyQueueScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={[styles.leftStyles, styles.bothHeaders]}>
            <LeftHeader />
          </View>
          <View
            style={[styles.rightStyles, styles.rightHeader, styles.bothHeaders]}
          >
            <RightHeader />
          </View>
        </View>
        <View style={styles.body}>
          <View style={[styles.leftStyles, styles.leftBody, styles.bothBodies]}>
            <LeftBody navigation={this.props.navigation} />
          </View>
          <View style={[styles.rightStyles, styles.bothBodies]}>
            <RightBody />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    paddingTop: '1%',
    paddingLeft: '3%',
    paddingRight: '3%',
    paddingBottom: '3%'
  },
  header: {
    flex: 0.3,
    flexDirection: 'row'
  },
  leftStyles: {
    flex: 2,
    marginRight: '2%'
  },
  rightStyles: {
    flex: 0.7,
    marginLeft: '2%'
  },
  bothHeaders: {
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#BDBDBD',
    paddingLeft: '3%'
  },
  rightHeader: {
    flex: 0.6
  },
  body: {
    flex: 5,
    flexDirection: 'row'
  },
  leftBody: {
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  bothBodies: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD'
  }
});
