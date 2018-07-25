import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import LeftHeader from '../components/Body/LeftPanel/Header';
import ActionHeader from '../components/Body/RightPanel/Header/ActionHeader';
import LeftBody from '../components/Body/LeftPanel/Body/MyWorkOrderList';
import ActionList from '../components/Body/RightPanel/Body/ActionsList';

export default class OrderDetail extends Component<any, any> {
  render() {
    const {
      id,
      status,
      serviceLocation,
      assignedTo,
      shop,
      workCode,
      clientSchedule,
      workDescription,
      clientDescription,
      notes,
      client,
      history
    } = this.props.navigation.state.params;

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
            <View style={styles.mainDescription}>
              <Text style={[styles.status]}>{status.toLocaleUpperCase()}</Text>
              <Text style={[styles.id]}>{id}</Text>
              <View style={styles.serviceDetails}>
                <View>
                  <View style={[styles.detailItem, styles.padding]}>
                    <View style={styles.icon} />
                    <Text style={styles.title}>SERVICE LOCATION</Text>
                  </View>
                  <Text style={[styles.detail, styles.padding]}>
                    {serviceLocation}
                  </Text>
                </View>
                <View>
                  <View style={[styles.detailItem, styles.padding]}>
                    <View style={styles.icon} />
                    <Text style={styles.title}>WORK CODE</Text>
                  </View>
                  <Text style={[styles.detail, styles.padding]}>
                    {workCode}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.serviceDescription}>
              <View>
                <View style={[styles.detailItem, styles.padding]}>
                  <View style={styles.icon} />
                  <Text style={styles.title}>NAME</Text>
                </View>

                <Text style={[styles.location, styles.padding]}>
                  {serviceLocation}
                </Text>
              </View>
            </View>
            <View style={styles.client}>
              <View>
                <View style={[styles.detailItem, styles.padding]}>
                  <View style={styles.icon} />
                  <Text style={styles.title}>NAME</Text>
                </View>

                <Text style={[styles.location, styles.padding]}>
                  {serviceLocation}
                </Text>
              </View>
            </View>
            <View style={styles.history} />
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
    backgroundColor: 'blue',
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
  // WorkOrder Styles
  //=================
  mainDescription: {
    // backgroundColor: 'red'
  },
  status: {
    color: '#757575',
    fontWeight: 'bold',
    fontSize: 12
    // marginBottom: '1%'
  },
  id: {
    fontSize: 20,
    color: '#757575',
    fontWeight: 'bold'
    // marginBottom: '1%'
  },
  detailItem: {
    flexDirection: 'row',
    // backgroundColor: 'green'
  },
  icon: {
    backgroundColor: '#BDBDBD',
    borderRadius: 10,
    width: 15,
    height: 15
  },
  padding: {
    paddingBottom: '3%'
  },
  serviceDescription: {
    // backgroundColor: 'green'
  },
  title: {
    color: '#757575'
  },
  client: {
    backgroundColor: 'yellow'
  },
  history: {
    backgroundColor: 'beige'
  }
});
