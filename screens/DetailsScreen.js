import React from "react";
import {Button, Text, View} from "react-native";

const DetailsScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details page again"
                onPress={() => navigation.push('Details')}
            />
            <Button
                title="Go to HomeScreen"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go to first page"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
};

export default DetailsScreen;
