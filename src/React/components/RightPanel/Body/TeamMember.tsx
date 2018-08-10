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

// const AnimatedModal = Animated.createAnimatedComponent(TeamModal);
export default class TeamMember extends Component<any, any> {
  constructor(props: any) {
    super(props);
    const { width, height } = Dimensions.get('window');
    const edgeLength = 100;

    const axisX = width / 2 - edgeLength / 2;
    const axisY = height / 2 - edgeLength / 2;

    this.axisX = axisX;
    this.axisY = axisY;
    this.state = {
      edgeLength,
      // pan: new Animated.ValueXY(),
      scaleAnimation: new Animated.Value(1)
    };
  }
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

  render() {
    const {
      // locationPressed,
      // modalVisible,
      // setModalVisible,
      getLocation,
      item
    } = this.props;

    // const panStyle = {
    //   position: 'absolute',
    //   top: locationPressed.y,
    //   left: locationPressed.x,
    //   transform: this.state.pan.getTranslateTransform()
    // };

    return (
      <View
        style={[styles.teamMember]} // onLongPress={evt => {
        //   console.log('original evt', evt);
        //   getLocation(evt.nativeEvent);
        // }}
        {...this.props.modalPanResponder.panHandlers}
      >
        <View style={styles.name}>
          <Text style={styles.teamMemberText}>{item.client.name}</Text>
        </View>
        <View style={styles.countIcon}>
          <Text style={styles.countText}>5</Text>
        </View>
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
