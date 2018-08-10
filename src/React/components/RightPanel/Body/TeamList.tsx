import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  UIManager,
  findNodeHandle,
  Animated,
  PanResponder
} from 'react-native';
import { workOrders } from '../../../../data';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TeamMember from './TeamMember';
import TeamModal from './TeamModal';

const AnimatedModal = Animated.createAnimatedComponent(TeamModal);

export default class TeamList extends Component<any, any> {
  // state = {
  //   scrollEnabled: true,
  //   modalVisible: false,
  //   locationPressed: {
  //     x: 0,
  //     y: 0
  //   },
  //   pan: new Animated.ValueXY()
  // };
  // panResponder = {};
  // componentWillMount() {
  //   this.panResponder = PanResponder.create({
  //     onStartShouldSetPanResponder: () => true,
  //     onPanResponderMove: Animated.event([
  //       null,
  //       {
  //         // <--- When moving
  //         dx: this.state.pan.x,
  //         dy: this.state.pan.y
  //       }
  //     ]),
  //     onPanResponderRelease: (e, gesture) => {
  //       Animated.spring(this.state.pan, {
  //         toValue: { x: 0, y: 0 },
  //         friction: 5
  //       }).start();
  //     } // <--- callback when dropped
  //   });
  // }
  // // get location of team member element to make modal appear there
  // getLocationPressed = (event: any) => {
  //   console.log('event', event);
  //   const UIManager = require('NativeModules').UIManager;
  //   const handle = findNodeHandle(event.target);
  //   UIManager.measureInWindow(handle, (x, y, width, height) => {
  //     console.log('offset', x, y, width, height);
  //     this.setState({
  //       locationPressed: {
  //         x: x,
  //         y: y
  //       }
  //     });
  //     console.log('location!!', this.state.locationPressed);
  //     this.setModalVisible(true);
  //   });
  // };
  // handle whether modal is visible or not
  // setModalVisible = (visible: boolean) => {
  //   this.setState({ modalVisible: visible });
  // };

  render() {
    const {} = this.props;
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
            />
            <Icon name="search" size={18} color="#BDBDBD" />
          </View>
        </View>
        <FlatList
          scrollEnabled={this.props.scrollEnabled}
          style={styles.teamContainer}
          data={workOrders}
          extraData={this.props}
          renderItem={({ item }) => (
            <TeamMember
              item={item}
              getLocation={this.props.getLocation}
              modalPanResponder={this.props.modalPanResponder}
            />
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
    // position: 'absolute',
    // zIndex: 355,
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
    // zIndex: 55
    // position: 'absolute'
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
