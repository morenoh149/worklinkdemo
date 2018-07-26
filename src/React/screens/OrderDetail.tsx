import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionHeader from '../components/Body/RightPanel/Header/ActionHeader';
import ActionList from '../components/Body/RightPanel/Body/ActionsList';
import ServiceDetailCard from '../components/Body/LeftPanel/Body/ServiceDetailCard';
import ServiceDescriptionCard from '../components/Body/LeftPanel/Body/ServiceDescriptionCard';
import ClientCard from '../components/Body/LeftPanel/Body/ClientCard';
import HistoryCard from '../components/Body/LeftPanel/Body/HistoryCard';

export default class OrderDetail extends Component<any, any> {
  render() {
    const { id } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={[styles.leftStyles, styles.bothHeaders]}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon
                name="ios-arrow-back"
                size={18}
                color="black"
                style={styles.backArrow}
              />
              <Text>{id}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[styles.rightStyles, styles.rightHeader, styles.bothHeaders]}
          >
            <ActionHeader />
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView
            style={[styles.leftStyles, styles.leftBody, styles.bothBodies]}
          >
            <ServiceDetailCard
              navigation={this.props.navigation}
              style={styles.cards}
            />
            <ServiceDescriptionCard
              navigation={this.props.navigation}
              style={styles.cards}
            />
            <ClientCard
              navigation={this.props.navigation}
              style={styles.cards}
            />
            <HistoryCard
              navigation={this.props.navigation}
              style={styles.cards}
            />
            <Text>gg</Text>
          </ScrollView>
          <View
            style={[styles.rightStyles, styles.rightBody, styles.bothBodies]}
          >
            <ActionList />
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
  leftStyles: {
    flex: 2,
    marginRight: '2%'
  },
  rightStyles: {
    flex: 0.7,
    marginLeft: '2%'
  },
  //=================
  // Header Styles
  //=================
  header: {
    flex: 0.3,
    flexDirection: 'row'
  },
  bothHeaders: {
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#BDBDBD',
    paddingLeft: '3%',
    justifyContent: 'center'
  },
  rightHeader: {
    flex: 0.6
  },
  backButton: {
    flexDirection: 'row'
  },
  backArrow: {
    paddingRight: '2%'
  },
  //=================
  // Body Styles
  //=================
  body: {
    flex: 5,
    flexDirection: 'row'
  },
  leftBody: {
    // flex: 5,
    // backgroundColor: 'blue',
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  rightBody: {
    flex: 0.4
  },
  bothBodies: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD'
  },

  //=================
  // Card Styles
  //=================
  cards: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD'
  },
  // status: {
  //   color: '#757575',
  //   fontWeight: 'bold',
  //   fontSize: 12,
  //   paddingBottom: '3%'
  // },
  id: {
    fontSize: 18,
    color: '#757575',
    fontWeight: 'bold',
    paddingBottom: '3%'
  }
});
