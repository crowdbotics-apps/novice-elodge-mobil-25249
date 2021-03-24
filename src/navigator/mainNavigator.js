import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile218454Navigator from '../features/UserProfile218454/navigator';
import Settings218453Navigator from '../features/Settings218453/navigator';
import Settings218451Navigator from '../features/Settings218451/navigator';
import SignIn2218449Navigator from '../features/SignIn2218449/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile218454: { screen: UserProfile218454Navigator },
Settings218453: { screen: Settings218453Navigator },
Settings218451: { screen: Settings218451Navigator },
SignIn2218449: { screen: SignIn2218449Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
