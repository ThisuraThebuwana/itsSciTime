import HomeScreen from "./HomeScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import DetailsScreen from "./DetailsScreen";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ChatScreen from "./ChatScreen";
import AccountScreen from "./AccountScreen";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const AccountStack = createStackNavigator();
const ChatStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabsScreen = () => (
    <Tab.Navigator
        initialRouteName="Account"
        activeColor="#008CBA"
        barStyle={{ backgroundColor: '#fff' }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Details"
            component={DetailsStackScreen}
            options={{
                tabBarLabel: 'Details',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-tv" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Account"
            component={AccountStackScreen}
            options={{
                tabBarLabel: 'Account',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-cash" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Chat"
            component={ChatStackScreen}
            options={{
                tabBarLabel: 'Chat',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-chatbubbles" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabsScreen;

const HomeStackScreen = ({navigation})=> (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="HOME" component={HomeScreen} options={{
            // headerLeft : () => (
            //     <Icon.Button name="ios-menu" size={25}
            //                  backgroundColor="#009387" onPress={() =>
            //         navigation.openDrawer()
            //     }/>
            // )
        }}/>
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation})=> (
    <DetailsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="ABOUT" component={DetailsScreen} options={{
            // headerLeft : () => (
            //     <Icon.Button name="ios-menu" size={25}
            //                  backgroundColor="#009387" onPress={() =>
            //         navigation.openDrawer()
            //     }/>
            // )
        }}/>
    </DetailsStack.Navigator>
);

const AccountStackScreen = ({navigation})=> (
    <AccountStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <AccountStack.Screen name="ACCOUNT" component={AccountScreen} options={{
            // headerLeft : () => (
            //     <Icon.Button name="ios-menu" size={25}
            //                  backgroundColor="#009387" onPress={() =>
            //         navigation.openDrawer()
            //     }/>
            // )
        }}/>
    </AccountStack.Navigator>
);

const ChatStackScreen = ({navigation})=> (
    <ChatStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ChatStack.Screen name="CHAT ROOM" component={ChatScreen} options={{
            // headerLeft : () => (
            //     <Icon.Button name="ios-menu" size={25}
            //                  backgroundColor="#009387" onPress={() =>
            //         navigation.openDrawer()
            //     }/>
            // )
        }}/>
    </ChatStack.Navigator>
);
