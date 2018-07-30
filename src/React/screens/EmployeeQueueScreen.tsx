import React, { Component } from 'react';
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
import ActionsList from '../components/RightPanel/Body/ActionsList';

import { NavigationScreenProp } from 'react-navigation';

export interface IMyQueueScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class EmployeeQueueScreen extends Component<
  IMyQueueScreenProps
> {
  render() {
    return (
      <AppContainer>
        {/* ========
             LEFT
        ======== */}
        <LeftPanel>
          <LeftHeader>
            <WorkOrderHeader>My Work Orders</WorkOrderHeader>
          </LeftHeader>
          <LeftBody>
            <MyWorkOrderList navigation={this.props.navigation} />
          </LeftBody>
        </LeftPanel>
        {/* ========
             RIGHT
        ======== */}
        <RightPanel>
          <RightHeader>
            <ActionHeader>Action</ActionHeader>
          </RightHeader>
          <RightBody>
            <ActionsList />
          </RightBody>
        </RightPanel>
      </AppContainer>
    );
  }
}
