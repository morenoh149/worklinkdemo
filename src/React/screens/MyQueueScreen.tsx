import React, { Component } from 'react';
import AppContainer from '../common/AppBody/AppContainer';
import LeftPanel from '../common/AppBody/LeftPanel';
import LeftHeader from '../common/AppBody/LeftHeader';
import LeftBody from '../common/AppBody/LeftBody';
import RightPanel from '../common/AppBody/RightPanel';
import RightHeader from '../common/AppBody/RightHeader';
import RightBody from '../common/AppBody/RightBody';
import WorkOrderHeader from '../components/Body/LeftPanel/Header/MyWorkOrderHeader';
import ActionHeader from '../components/Body/RightPanel/Header/ActionHeader';
import MyWorkOrderList from '../components/Body/LeftPanel/Body/MyWorkOrderList';
import ActionsList from '../components/Body/RightPanel/Body/ActionsList';

import { NavigationScreenProp } from 'react-navigation';

export interface IMyQueueScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class MyQueueScreen extends Component<IMyQueueScreenProps> {
  render() {
    return (
      <AppContainer>
        {/* ========
             LEFT
        ======== */}
        <LeftPanel>
          <LeftHeader>
            <WorkOrderHeader />
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
            <ActionHeader />
          </RightHeader>
          <RightBody>
            <ActionsList />
          </RightBody>
        </RightPanel>
      </AppContainer>
    );
  }
}
