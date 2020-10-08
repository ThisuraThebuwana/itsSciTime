import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabsScreen from "./screens/MainTabsScreen";
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import LoginScreen from "./screens/LoginScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Main Screen" component={MainTabsScreen} options={{ headerShown: false }}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

