import React from "react";
import { StyleSheet, Text, View} from "react-native";
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


