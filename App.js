import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/React/components/Header';
import NavBar from './src/React/components/NavBar';
import Body from './src/React/components/Body/BodyContainer';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <NavBar />
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
