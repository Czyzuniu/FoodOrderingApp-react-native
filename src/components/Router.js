import Home from '../views/Home';
import MyOrders from '../views/MyOrders';
import SideMenu from '../components/Menu'

import {DrawerNavigator} from 'react-navigation';

export default DrawerNavigator({
  HomeView: {
    screen: Home
  },
  MyOrdersView: {
    screen: MyOrders
  }
},  {
  contentComponent: SideMenu,
  drawerWidth: 300
});