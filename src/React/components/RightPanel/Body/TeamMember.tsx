import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PanResponder,
  Animated,
  Dimensions,
  TouchableOpacity
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
  componentWillMount() {
    // this.panResponder = PanResponder.create({
    //   onStartShouldSetPanResponder: () => true,
    //   onPanResponderMove: Animated.event([
    //     null,
    //     {
    //       // <--- When moving
    //       dx: this.state.pan.x,
    //       dy: this.state.pan.y
    //     }
    //   ]),
    //   onPanResponderGrant: e => {
    //     // this.state.pan.setOffset({ x: this.axisX, y: this.axisY });
    //     this.state.pan.setValue({ x: 0, y: 0 });
    //     Animated.spring(this.state.scaleAnimation, {
    //       toValue: 1.5
    //     }).start();
    //     this.props.toggleScroll();
    //   },
    //   onPanResponderRelease: (e, gesture) => {
    //     // Animated.spring(this.state.scaleAnimation, {
    //     //   toValue: 1
    //     // }).start();
    //     Animated.spring(this.state.pan, {
    //       toValue: { x: 0, y: 0 },
    //       friction: 5
    //     }).start();
    //     this.props.toggleScroll();
    //   } // <--- callback when dropped
    // });
  }

  render() {
    // const panStyle = {
    //   transform: this.state.pan.getTranslateTransform()
    // };
    return (
      <TouchableOpacity
        style={[styles.teamMember]}
        onPress={() => this.props.setModalVisible(true)}
      >
        {/* {...this.panResponder.panHandlers} */}
        <View style={styles.name}>
          <Text style={styles.teamMemberText}>
            {this.props.item.client.name}
          </Text>
        </View>
        <View style={styles.countIcon}>
          <Text style={styles.countText}>5</Text>
        </View>
        <TeamModal
          modalVisible={this.props.modalVisible}
          setModalVisible={this.props.setModalVisible}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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
