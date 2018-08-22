import Home from '../views/Home';
import MyOrders from '../views/MyOrders';
import SideMenu from '../components/Menu'
import Camera from '../views/Camera'
import Settings from '../views/Settings'
import NewsItemView from '../views/NewsItemView'
import Incidents from '../views/Incidents'


import {createDrawerNavigator} from 'react-navigation';


export default createDrawerNavigator(
    {
	  HomeView: {
	    screen: Home
	  },
	  CameraView: {
	    screen: Camera
	  },
	  MyOrdersView: {
	    screen: MyOrders
	  },
	  SettingsView: {
	    screen: Settings
	  },
	  NewsItemView: {
	  	screen:NewsItemView
	  },
	  IncidentsView: {
	  	screen: Incidents
	  }
    },
    {
		contentComponent: SideMenu,
  		drawerWidth: 250,
        drawerPosition: 'left',
        gesturesEnabled: false
    }
);

