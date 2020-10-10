import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabsScreen from "./screens/MainTabsScreen";
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SplashScreen from "./screens/SplashScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
          <NavigationContainer>
              <Stack.Navigator initialRouteName="splash">
                  <Stack.Screen name="splash" component={SplashScreen} options={{  headerShown: false ,headerLeft: null }}/>
                  <Stack.Screen name="Login" component={LoginScreen} options={{  headerShown: false ,headerLeft: null }}/>
                  <Stack.Screen name="Main Screen" component={MainTabsScreen} options={{  headerShown: false}}/>
                  <Stack.Screen name="signUP" component={SignUpScreen} options={{  headerShown: false ,headerLeft: null }}/>

              </Stack.Navigator>


          </NavigationContainer>



  );
}

