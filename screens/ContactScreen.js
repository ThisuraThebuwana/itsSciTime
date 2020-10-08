import React from "react";
import { StyleSheet, Text, View} from "react-native";

const ContactScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Lesson Screen</Text>
        </View>
    );
};

export default ContactScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff'
    },
});
