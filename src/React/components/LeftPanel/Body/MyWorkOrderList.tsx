import React, { Component } from 'react';
import { Text, FlatList, findNodeHandle } from 'react-native';
import { workOrders, IWorkOrder } from '../../../../data';
import WorkOrderContainer from '../../../common/AppBody/WorkOrder/WorkOrderContainer';
import WorkOrderCard from '../../../common/AppBody/WorkOrder/WorkOrderCard';
import WorkOrderDetails from '../../../common/AppBody/WorkOrder/WorkOrderDetails';
import Status from '../../../common/AppBody/WorkOrder/Status';
import StatusText from '../../../common/AppBody/WorkOrder/StatusText';
import StatusIndicator from '../../../common/AppBody/WorkOrder/StatusIndicator';
import WorkCode from '../../../common/AppBody/WorkOrder/WorkCode';
import WorkCodeId from '../../../common/AppBody/WorkOrder/WorkCodeId';
import WorkCodeText from '../../../common/AppBody/WorkOrder/WorkCodeText';
import Location from '../../../common/AppBody/WorkOrder/Location';
import LocationText from '../../../common/AppBody/WorkOrder/LocationText';
import Client from '../../../common/AppBody/WorkOrder/Client';
import ViewMore from '../../../common/AppBody/WorkOrder/ViewMore';
import Avatar from '../../../common/AppBody/WorkOrder/Avatar';

export default class MyWorkOrderList extends Component<any, any> {
  state = {
    flatListId: 0
  };
  onViewMore = (workOrder: IWorkOrder) => {
    this.props.navigation.navigate('Details', {
      ...workOrder
    });
  };
  setFlatListId = (id: number) => {
    this.setState({
      flatListId: id
    });
    // console.log('state,', this.state.flatListId);
  };
  // componentDidMount() {
  //   const flatListHandle = findNodeHandle(this.mainContainer);
  //   console.log(flatListHandle);
  //   this.setState({ flatListId: flatListHandle }, function() {
  //     // do something with new state
  //   });
  //   console.log(this.state.flatListId);
  // }
  render() {
    return (
      <WorkOrderContainer>
        <FlatList
          ref={ref => (this.mainContainer = ref)}
          onLayout={() => {
            const flatListHandle = findNodeHandle(this.mainContainer);
            console.log(flatListHandle);
            // this.setFlatListId(1267);
            this.setState({
              flatListId: flatListHandle
            });
            // console.log('state,', this.state.flatListId);
          }}
          data={workOrders}
          extraData={[this.props, this.state]}
          renderItem={({ item }) => (
            <WorkOrderCard
              setDropZoneValues={this.props.setDropZoneValues}
              workOrderPanResponder={this.props.workOrderPanResponder}
              flatListId={this.state.flatListId}
            >
              <WorkOrderDetails>
                <Status>
                  <StatusText>{item.status.toLocaleUpperCase()}</StatusText>
                  <StatusIndicator />
                </Status>
                <WorkCode>
                  <WorkCodeText>{item.workCode}</WorkCodeText>
                  <WorkCodeId>{item.id}</WorkCodeId>
                </WorkCode>
                <Location>
                  <LocationText>
                    Service Location: {item.serviceLocation}
                  </LocationText>
                  <Client>Client: {item.client.name}</Client>
                </Location>
                <ViewMore onViewMore={this.onViewMore} item={item} />
              </WorkOrderDetails>
              <Avatar>
                <Text>JJ</Text>
              </Avatar>
            </WorkOrderCard>
          )}
          keyExtractor={item => item.id}
        />
      </WorkOrderContainer>
    );
  }
}
