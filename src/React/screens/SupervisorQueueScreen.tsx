import React, { Component } from 'react';
import {
  Animated,
  findNodeHandle,
  PanResponder,
  PanResponderGestureState,
  GestureResponderEvent,
  UIManager
} from 'react-native';
import AppContainer from '../common/AppBody/AppContainer';
import LeftPanel from '../common/AppBody/LeftPanel';
import LeftHeader from '../common/AppBody/LeftHeader';
import LeftBody from '../common/AppBody/LeftBody';
import RightPanel from '../common/AppBody/RightPanel';
import RightHeader from '../common/AppBody/RightHeader';
import RightBody from '../common/AppBody/RightBody';
import WorkOrderHeader from '../components/LeftPanel/Header/MyWorkOrderHeader';
import ActionHeader from '../components/RightPanel/Header/ActionHeader';
import MyWorkOrderList from '../components/LeftPanel/Body/MyWorkOrderList';
import TeamList from '../components/RightPanel/Body/TeamList';
import TeamModal from '../components/RightPanel/Body/TeamModal';
import { NavigationScreenProp } from 'react-navigation';

export interface IMyQueueScreenProps {
  navigation: NavigationScreenProp<any, any>;
}
const AnimatedModal = Animated.createAnimatedComponent(TeamModal);

export default class SupervisorQueueScreen extends Component<
  IMyQueueScreenProps
> {
  state = {
    scrollEnabled: true,
    modalVisible: false,
    locationPressed: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    pan: new Animated.ValueXY(),
    dropZoneValues: []
  };
  modalPanResponder = {};
  workOrderPanResponder = {};
  componentWillMount() {
    // ============================
    // Set PanResponder for Modal
    // ============================
    this.modalPanResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        // <--- The gesture has started. Show visual feedback so the user knows
        evt.persist();
        console.log('native', evt);

        this.getLocationPressed(evt.nativeEvent);
        this.setState({
          modalVisible: true
        });
        // this.isIntersecting(evt, gestureState);
        // this.setPan();
      },
      onPanResponderMove: Animated.event([
        null,
        {
          // <--- When moving
          dx: this.state.pan.x,
          dy: this.state.pan.y
        }
      ]),
      // <--- callback when dropped
      onPanResponderRelease: (e, gesture) => {
        if (this.isIntersecting(e, gesture)) {
          console.log('yoo');
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 5
          }).start();
        }
        this.toggleScroll(true);
      }
    });
    // ====================================
    // Set Gesture Response for Work Orders
    // ====================================
  }
  setPan = () => {
    this.workOrderPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      // onPanResponderGrant: (evt, gesture) => {

      // },
      onPanResponderReject: evt => {
        console.log('work order evt', evt);
        // console.log('work order gesture', gesture);
      }
    });
    console.log('this is awesome!!');
  };
  // <--- get location of team member element to make modal appear there
  getLocationPressed = (event: any) => {
    console.log('event', event);
    const handle = findNodeHandle(event.target);
    UIManager.measureInWindow(
      handle || 0,
      (x: number, y: number, width: number, height: number) => {
        console.log('offset', x, y, width, height);
        this.setState({
          locationPressed: {
            x: x,
            y: y,
            width: width,
            height: height
          }
        });
        console.log('location!!', this.state.locationPressed);
        this.toggleScroll(false); // <--- disable scrolling
        // this.setModalVisible(true);
      }
    );
  };

  isIntersecting = (evt, gesture: PanResponderGestureState) => {
    console.log('drop zones', this.state.dropZoneValues);

    console.log('intersecting gesture', gesture);
    console.log('intersecting evt', evt);
    var rect1 = { x: 5, y: 5, width: 50, height: 50 };
    var rect2 = { x: 20, y: 10, width: 10, height: 10 };

    // if (
    //   rect1.x < rect2.x + rect2.width &&
    //   rect1.x + rect1.width > rect2.x &&
    //   rect1.y < rect2.y + rect2.height &&
    //   rect1.height + rect1.y > rect2.y
    // ) {
    //  this.setState({
    //     modalVisible: false
    //   });
    // }
    var dz = this.state.dropZoneValues;
    for (let i = 0; i < dz.length; i++) {
      // if (
      //   dz[i].x < Number(this.state.pan.x) + this.state.locationPressed.width &&
      //   dz[i].x + dz[i].width > this.state.pan.x &&
      //   dz[i].y <
      //     Number(this.state.pan.y) + this.state.locationPressed.height &&
      //   dz[i].height + dz[i].y > this.state.pan.y
      // ) {
      //   return true;
      // }
      console.log(dz[i].x);
      console.log(dz[i].y);
    }
    // return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  };

  //====================
  //Show Draggable Modal
  //====================
  renderModal = () => {
    const { locationPressed, modalVisible, pan } = this.state;
    const panStyle = {
      position: 'absolute',
      top: locationPressed.y - 100,
      left: locationPressed.x,
      transform: pan.getTranslateTransform()
    };
    if (modalVisible) {
      return (
        <AnimatedModal
          style={panStyle}
          locationPressed={locationPressed}
          modalPanResponder={this.modalPanResponder}
          pan={pan}
        />
      );
    }
  };

  setDropZoneValues = (measurements: {}) => {
    this.setState({
      dropZoneValues: [...this.state.dropZoneValues, measurements]
    });
  };

  toggleScroll = (visible: boolean) => {
    this.setState({ scrollEnabled: visible });
  };
  render() {
    return (
      <AppContainer>
        {/* ========
             LEFT
        ======== */}
        <LeftPanel>
          <LeftHeader>
            <WorkOrderHeader>My HVAC Queue</WorkOrderHeader>
          </LeftHeader>
          <LeftBody>
            <MyWorkOrderList
              navigation={this.props.navigation}
              setDropZoneValues={this.setDropZoneValues}
              workOrderPanResponder={this.workOrderPanResponder}
              modalPanResponder={this.modalPanResponder}
            />
          </LeftBody>
        </LeftPanel>
        {/* ========
             RIGHT
        ======== */}
        <RightPanel>
          <RightHeader>
            <ActionHeader>HVAC Team</ActionHeader>
          </RightHeader>
          <RightBody>
            <TeamList
              getLocation={this.getLocationPressed}
              scrollEnabled={this.state.scrollEnabled}
              modalPanResponder={this.modalPanResponder}
            />
          </RightBody>
        </RightPanel>
        {this.renderModal()}
      </AppContainer>
    );
  }
}
