import React from "react";
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import AccountBalanceScreen from "./AccountBalanceScreen";
import PaymentMethodScreen from "./PaymentMethodScreen";
import PaymentGatewayScreen from "./PaymentGatewayScreen";
import PaymentGatewayMasterScreen from "./PaymentGatewayMasterScreen";

const Stack = createStackNavigator();

const AccountScreen = ({}) => {
    return (
                <Stack.Navigator>
                    <Stack.Screen name="Balance" component={AccountBalanceScreen} options={{ headerShown: false }}/>
                    <Stack.Screen name="Payment Method" component={PaymentMethodScreen} options={{ headerShown: false}}/>
                    <Stack.Screen name="Payment Gateway" component={PaymentGatewayScreen} options={{ headerShown: false}}/>
                    <Stack.Screen name="Payment Gateway Master" component={PaymentGatewayMasterScreen} options={{ headerShown: false}}/>
                </Stack.Navigator>
    );
};

export default AccountScreen;


