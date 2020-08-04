import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile87357Navigator from '../features/UserProfile87357/navigator';
import SignIn1186589Navigator from '../features/SignIn1186589/navigator';
import ArticleList286588Navigator from '../features/ArticleList286588/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
