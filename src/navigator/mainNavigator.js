import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings87995Navigator from '../features/Settings87995/navigator';
import Settings87975Navigator from '../features/Settings87975/navigator';
import Settings87881Navigator from '../features/Settings87881/navigator';
import UserProfile87397Navigator from '../features/UserProfile87397/navigator';
import Tutorial87396Navigator from '../features/Tutorial87396/navigator';
import NotificationList87368Navigator from '../features/NotificationList87368/navigator';
import Settings87367Navigator from '../features/Settings87367/navigator';
import Settings87359Navigator from '../features/Settings87359/navigator';
import UserProfile87357Navigator from '../features/UserProfile87357/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings87995: { screen: Settings87995Navigator },
Settings87975: { screen: Settings87975Navigator },
Settings87881: { screen: Settings87881Navigator },
UserProfile87397: { screen: UserProfile87397Navigator },
Tutorial87396: { screen: Tutorial87396Navigator },
NotificationList87368: { screen: NotificationList87368Navigator },
Settings87367: { screen: Settings87367Navigator },
Settings87359: { screen: Settings87359Navigator },
UserProfile87357: { screen: UserProfile87357Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
