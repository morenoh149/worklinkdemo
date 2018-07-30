import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import EmployeeQueue from '../React/screens/EmployeeQueueScreen';
import SupervisorQueue from '../React/screens/SupervisorQueueScreen';
import Unassigned from '../React/screens/UnassignedScreen';
import OrderDetail from '../React/screens/OrderDetail';
import Calendar from '../React/screens/CalendarScreen';
import Notices from '../React/screens/Notices';

const WorkOrderListStack = createStackNavigator(
  {
    Feed: {
      screen: EmployeeQueue
    },
    Details: {
      screen: OrderDetail,
      navigationOptions: {
        title: null
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const UnassignedListStack = createStackNavigator(
  {
    Feed: {
      screen: Unassigned
    },
    Details: {
      screen: OrderDetail,
      navigationOptions: {
        title: null
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const TabNavigator = createMaterialTopTabNavigator(
  {
    'MY QUEUE': { screen: WorkOrderListStack },
    UNASSIGNED: { screen: UnassignedListStack },
    CALENDAR: { screen: SupervisorQueue },
    NOTICES: { screen: Notices }
  },
  {
    tabBarOptions: {
      //   activeTintColor: '#ffffff',
      labelStyle: {
        fontSize: 14,
        color: 'black'
      },
      style: {
        backgroundColor: 'white'
      },
      indicatorStyle: {
        backgroundColor: 'black'
      }
    }
  }
);

export default TabNavigator;
