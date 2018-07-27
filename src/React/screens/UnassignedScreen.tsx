import React, { Component } from 'react';
import AppContainer from '../common/AppBody/AppContainer';
import LeftPanel from '../common/AppBody/LeftPanel';
import LeftHeader from '../common/AppBody/LeftHeader';
import LeftBody from '../common/AppBody/LeftBody';
import RightPanel from '../common/AppBody/RightPanel';
import RightHeader from '../common/AppBody/RightHeader';
import RightBody from '../common/AppBody/RightBody';
import UnassignedHeader from '../components/Body/LeftPanel/Header/UnassignedHeader';
import MyQueueHeader from '../components/Body/RightPanel/Header/MyQueueHeader';
import MyWorkOrderList from '../components/Body/LeftPanel/Body/MyWorkOrderList';
import QueueList from '../components/Body/RightPanel/Body/QueueList';

import { NavigationScreenProp } from 'react-navigation';

export interface IUnassignedProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class Unassigned extends Component<IUnassignedProps> {
  render() {
    return (
      <AppContainer>
        {/* ========
             LEFT
        ======== */}
        <LeftPanel>
          <LeftHeader>
            <UnassignedHeader />
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
            <MyQueueHeader />
          </RightHeader>
          <RightBody>
            <QueueList />
          </RightBody>
        </RightPanel>
      </AppContainer>
    );
  }
}