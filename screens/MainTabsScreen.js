import Icon from 'react-native-vector-icons/Ionicons';
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ChatScreen from "./ChatScreen";
import AccountScreen from "./AccountScreen";
import LessonScreen from "./LessonScreen";
import ContactScreen from "./ContactScreen";
import TeachersScreen from "./TeachersScreen";

const LessonStack = createStackNavigator();
const ContactStack = createStackNavigator();
const AccountStack = createStackNavigator();
const ChatStack = createStackNavigator();
const TeachersStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabsScreen = () => (
    <Tab.Navigator
        initialRouteName="Lessons"
        activeColor="#008CBA"
        barStyle={{ backgroundColor: '#fff' }}
    >
        <Tab.Screen
            name="Lessons"
            component={LessonStackScreen}
            options={{
                tabBarLabel: 'Lessons',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-tv" color={color} size={26} />
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
            name="Teachers"
            component={TeachersStackScreen}
            options={{
                tabBarLabel: 'Teachers',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Contact"
            component={ContactStackScreen}
            options={{
                tabBarLabel: 'Contact',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-information-circle" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabsScreen;

const LessonStackScreen = ({navigation})=> (
    <LessonStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <LessonStack.Screen name="LESSONS" component={LessonScreen} options={{
        }}/>
    </LessonStack.Navigator>
);

const ContactStackScreen = ({navigation})=> (
    <ContactStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ContactStack.Screen name="CONTACT" component={ContactScreen} options={{
        }}/>
    </ContactStack.Navigator>
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
            backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ChatStack.Screen name="CHAT ROOM" component={ChatScreen} options={{
        }}/>
    </ChatStack.Navigator>
);

const TeachersStackScreen = ({navigation})=> (
    <TeachersStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <TeachersStack.Screen name="TEACHERS" component={TeachersScreen} options={{
        }}/>
    </TeachersStack.Navigator>
);
