import React from "react";
import {Button, Text, View} from "react-native";

const LoginScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'#fff'}}>
            <Text>Login Screen</Text>
            <Button
                title="Login"
                onPress={() => navigation.push('Main Screen')}
            />
        </View>
    );
};

export default LoginScreen;
