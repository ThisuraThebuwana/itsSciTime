import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabsScreen from "./screens/MainTabsScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
          {/*<Drawer.Navigator initialRouteName="Home">*/}
              {/*<Drawer.Screen name="Home" component={MainTabsScreen} />*/}
              {/*/!*<Drawer.Screen name="Details" component={MainTabsScreen} />*!/*/}
          {/*</Drawer.Navigator>*/}
          <MainTabsScreen></MainTabsScreen>
      </NavigationContainer>
  );
}

