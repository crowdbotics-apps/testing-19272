import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen487334Navigator from '../features/BlankScreen487334/navigator';
import SignIn1186589Navigator from '../features/SignIn1186589/navigator';
import ArticleList286588Navigator from '../features/ArticleList286588/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen487334: { screen: BlankScreen487334Navigator },
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
