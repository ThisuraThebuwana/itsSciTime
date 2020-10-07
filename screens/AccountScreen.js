import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import AccountBalanceScreen from "./AccountBalanceScreen";
import PaymentMethodScreen from "./PaymentMethodScreen";

const Stack = createStackNavigator();

const AccountScreen = ({navigation}) => {
    return (
                <Stack.Navigator>
                    <Stack.Screen name="Balance" component={AccountBalanceScreen} options={{ headerShown: false }}/>
                    <Stack.Screen name="Payment Method" component={PaymentMethodScreen} options={{ headerShown: true, title: '' }}/>
                </Stack.Navigator>
    );
};

export default AccountScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
