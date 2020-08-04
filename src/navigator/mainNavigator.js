import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList87368Navigator from '../features/NotificationList87368/navigator';
import Settings87367Navigator from '../features/Settings87367/navigator';
import Settings87359Navigator from '../features/Settings87359/navigator';
import UserProfile87357Navigator from '../features/UserProfile87357/navigator';
import SignIn1186589Navigator from '../features/SignIn1186589/navigator';
import ArticleList286588Navigator from '../features/ArticleList286588/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList87368: { screen: NotificationList87368Navigator },
Settings87367: { screen: Settings87367Navigator },
Settings87359: { screen: Settings87359Navigator },
UserProfile87357: { screen: UserProfile87357Navigator },
SignIn1186589: { screen: SignIn1186589Navigator },
ArticleList286588: { screen: ArticleList286588Navigator },

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
