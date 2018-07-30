import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import AppContainer from '../common/AppBody/AppContainer';
import LeftPanel from '../common/AppBody/LeftPanel';
import LeftHeader from '../common/AppBody/LeftHeader';
import LeftBody from '../common/AppBody/LeftBody';
import RightPanel from '../common/AppBody/RightPanel';
import RightHeader from '../common/AppBody/RightHeader';
import RightBody from '../common/AppBody/RightBody';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionHeader from '../components/RightPanel/Header/ActionHeader';
import ActionsList from '../components/RightPanel/Body/ActionsList';
import ServiceDetailCard from '../components/LeftPanel/Body/ServiceDetailCard';
import ServiceDescriptionCard from '../components/LeftPanel/Body/ServiceDescriptionCard';
import ClientCard from '../components/LeftPanel/Body/ClientCard';
import HistoryCard from '../components/LeftPanel/Body/HistoryCard';

export default class OrderDetail extends Component<any, any> {
  scroll: ScrollView | null = null;

  render() {
    const { id } = this.props.navigation.state.params;

    return (
      <AppContainer>
        {/* ========
             LEFT
        ======== */}
        <LeftPanel>
          <LeftHeader>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon
                name="ios-arrow-back"
                size={20}
                color="black"
                style={styles.backArrow}
              />
              <Text style={styles.backText}>{id}</Text>
            </TouchableOpacity>
          </LeftHeader>
          <LeftBody>
            <ScrollView
              // create a ref to scroll back up to when button clicked
              ref={c => {
                this.scroll = c;
              }}
            >
              <ServiceDetailCard navigation={this.props.navigation} />
              <ServiceDescriptionCard navigation={this.props.navigation} />
              <ClientCard navigation={this.props.navigation} />
              <HistoryCard navigation={this.props.navigation} />
              <TouchableOpacity
                onPress={() => {
                  if (this.scroll !== null)
                    this.scroll.scrollTo({
                      x: 0,
                      y: 0,
                      animated: true
                    });
                }}
              >
                <Icon
                  name="ios-arrow-dropup-outline"
                  size={30}
                  color="black"
                  style={styles.upArrow}
                />
              </TouchableOpacity>
            </ScrollView>
          </LeftBody>
        </LeftPanel>
        {/* ========
             RIGHT
        ======== */}
        <RightPanel>
          <RightHeader>
            <ActionHeader />
          </RightHeader>
          <RightBody>
            <ActionsList />
          </RightBody>
        </RightPanel>
      </AppContainer>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    marginTop: '2.5%'
  },
  backArrow: {
    paddingTop: '.5%',
    paddingRight: '2%'
  },
  backText: {
    fontSize: 20,
    // color: '#757575',
    fontWeight: 'bold'
  },
  id: {
    fontSize: 18,
    color: '#757575',
    fontWeight: 'bold',
    paddingBottom: '3%'
  },
  upArrow: {
    marginBottom: '8%',
    color: '#757575',
    alignSelf: 'flex-end',
    alignItems: 'flex-start'
  }
});
