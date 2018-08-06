import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PanResponder,
  Animated,
  Dimensions,
  TouchableOpacity,
  UIManager,
  findNodeHandle
} from 'react-native';
import TeamModal from './TeamModal';

export default class TeamMember extends Component<any, any> {
  //   constructor(props: any) {
  //     super(props);
  //     const { width, height } = Dimensions.get('window');
  //     const edgeLength = 100;

  //     const axisX = width / 2 - edgeLength / 2;
  //     const axisY = height / 2 - edgeLength / 2;

  //     this.axisX = axisX;
  //     this.axisY = axisY;
  //     this.state = {
  //       edgeLength,
  //       pan: new Animated.ValueXY(),
  //       scaleAnimation: new Animated.Value(1)
  //     };
  //   }
  // panResponder = PanResponderInstance
  panResponder: any;
  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      // onMoveShouldSetPanResponder: (event, gestureState) => true,
      onPanResponderGrant: ({ nativeEvent }, gestureState) => {
        this.props.getLocation(nativeEvent);
      },
      onPanResponderMove: (event, gestureState) => false,
      onPanResponderTerminationRequest: evt => true,
      onPanResponderRelease: (event, gestureState) => {
        // true;
        // this.props.getLocation(nativeEvent);
        // this.setState({
        //   locationX: event.nativeEvent.locationX.toFixed(2),
        //   locationY: event.nativeEvent.locationY.toFixed(2)
        // });
      }
    });
  }

  render() {
    // const panStyle = {
    //   transform: this.state.pan.getTranslateTransform()
    // };
    const {
      locationPressed,
      modalVisible,
      setModalVisible,
      getLocation,
      item
    } = this.props;
    return (
      <View style={styles.view}>
        <TouchableOpacity
          style={[styles.teamMember]}
          onLongPress={evt => {
            getLocation(evt.nativeEvent);
          }}
        >
          {/* {...this.panResponder.panHandlers} */}
          <View style={styles.name}>
            <Text style={styles.teamMemberText}>{item.client.name}</Text>
          </View>
          <View style={styles.countIcon}>
            <Text style={styles.countText}>5</Text>
          </View>
          <TeamModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            getLocation={getLocation}
            locationPressed={locationPressed}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    // backgroundColor: 'yellow'
  },
  teamMember: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    padding: '4%'
  },
  name: {
    // flexDirection: 'row',
    // padding: '1%',
    // backgroundColor: 'red'
  },
  teamMemberText: {
    flex: 1
  },
  countIcon: {
    backgroundColor: '#BDBDBD',
    borderRadius: 30,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  countText: {
    // flex: 1
  }
});
