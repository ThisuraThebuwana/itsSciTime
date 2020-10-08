import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

const TeachersScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Lesson Screen</Text>
        </View>
    );
};

export default TeachersScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff'
    },
});
