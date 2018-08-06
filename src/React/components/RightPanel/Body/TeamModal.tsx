import React, { Component } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TeamModal extends Component<any, any> {
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
      pan: new Animated.ValueXY(),
      scaleAnimation: new Animated.Value(1)
    };
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      // onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: evt => true,
      onPanResponderMove: Animated.event([
        null,
        {
          // <--- When moving
          dx: this.state.pan.x,
          dy: this.state.pan.y
        }
      ]),
      onPanResponderGrant: e => {
        // this.state.pan.setOffset({ x: this.axisX, y: this.axisY });
        // this.state.pan.setValue({ x: 0, y: 0 });
        // Animated.spring(this.state.scaleAnimation, {
        //   toValue: 1.5
        // }).start();
      },
      onPanResponderRelease: (e, gesture) => {
        // Animated.spring(this.state.scaleAnimation, {
        //   toValue: 1
        // }).start();
        Animated.spring(this.state.pan, {
          toValue: { x: 0, y: 0 },
          friction: 5
        }).start();
      } // <--- callback when dropped
    });
  }

  render() {
    const { locationPressed, modalVisible, setModalVisible } = this.props;
    const panStyle = {
      position: 'absolute',
      top: locationPressed.y,
      left: locationPressed.x,
      transform: this.state.pan.getTranslateTransform()
    };
    return (
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}
      >
        <Animated.View
          style={[styles.modal, panStyle]}
          {...this.panResponder.panHandlers}
        >
          <View style={styles.containerStyle}>
            <Icon name="account-circle" size={30} color="#BDBDBD" />
            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Animated.View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    height: 50,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#FFF'
  },
  containerStyle: {
    flexDirection: 'row'
    // flex: 1
    // marginTop: 400 * 0.05
  }
});
