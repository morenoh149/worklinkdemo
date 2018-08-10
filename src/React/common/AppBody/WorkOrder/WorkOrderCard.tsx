import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  UIManager,
  findNodeHandle,
  TouchableHighlight,
  Text
} from 'react-native';

export default class WorkOrderCard extends Component<any, any> {
  componentDidMount() {}
  render() {
    return (
      <View
        ref={ref => (this.workOrderCard = ref)}
        style={[styles.wordCard]}
        // onLayout={({
        //   nativeEvent: {
        //     layout: { x, y, width, height }
        //   }
        // }) => {

        //   const measurements = {
        //     x: x,
        //     y: y,
        //     width: width,
        //     height: height
        //   };
        //   console.log(measurements);

        //   // this.props.setDropZoneValues(measurements);
        // }}
        // {...this.props.workOrderPanResponder.panHandlers}
        // onLayout={({ nativeEvent }) => {
        //   console.log(nativeEvent);
        //   const handle = findNodeHandle(nativeEvent.target);
        //   UIManager.measure(
        //     handle || 0,
        //     (x: number, y: number, width: number, height: number) => {
        //       const measurements = {
        //         x: x,
        //         y: y,
        //         width: width,
        //         height: height,
        //         lx: nativeEvent.layout.x,
        //         ly: nativeEvent.layout.y,
        //         lwidth: nativeEvent.layout.width,
        //         lheight: nativeEvent.layout.height
        //       };
        //       console.log(measurements);
        //     }
        //   );

        //   // console.log('layout', layout);
        //   // 413, 162.5
        //   // this.view.measure(
        //   //   (x: number, y: number, width: number, height: number) => {
        //   //     const measurements = {
        //   //       x: x,
        //   //       y: y,
        //   //       width: width,
        //   //       height: height
        //   //     };
        //   //     this.props.setDropZoneValues(measurements);
        //   //   }
        //   // );
        // }}
        onLayout={({ nativeEvent }) => {
          const handle = findNodeHandle(nativeEvent.target);
          console.log(handle);
          UIManager.measure(
            handle,
            (
              x: number,
              y: number,
              width: number,
              height: number,
              pageX,
              pageY
            ) => {
              const measurements = {
                x: x,
                y: y,
                width: width,
                height: height,
                pageX: pageX,
                pageY: pageY
              };
              console.log(measurements);
            }
          );
        }}
      >
        <TouchableHighlight
          onPress={() => {
            const handle = findNodeHandle(this.props.flatListId);
            console.log(this.props.flatListId);
            UIManager.measure(
              handle,
              (
                x: number,
                y: number,
                width: number,
                height: number,
                pageX,
                pageY
              ) => {
                const measurements = {
                  x: x,
                  y: y,
                  width: width,
                  height: height,
                  pageX: pageX,
                  pageY: pageY
                };
                console.log(measurements);
              }
            );
          }}
        >
          <Text>Test</Text>
        </TouchableHighlight>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wordCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    padding: '3%',
    paddingBottom: '7%'
  },
  active: {
    backgroundColor: 'yellow'
  }
});
