import React, { Component } from 'react';
import AppContainer from '../common/AppBody/AppContainer';
import LeftPanel from '../common/AppBody/LeftPanel';
import LeftHeader from '../common/AppBody/LeftHeader';
import LeftBody from '../common/AppBody/LeftBody';
import RightPanel from '../common/AppBody/RightPanel';
import RightHeader from '../common/AppBody/RightHeader';
import RightBody from '../common/AppBody/RightBody';

import { NavigationScreenProp } from 'react-navigation';

export interface ICalendarProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class Calendar extends Component<ICalendarProps> {
  render() {
    return (
      <AppContainer>
        {/* ========
             LEFT
        ======== */}
        <LeftPanel>
          <LeftHeader />
          <LeftBody />
        </LeftPanel>
        {/* ========
             RIGHT
        ======== */}
        <RightPanel>
          <RightHeader />
          <RightBody />
        </RightPanel>
      </AppContainer>
    );
  }
}
