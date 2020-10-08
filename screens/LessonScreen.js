import React from "react";
import { StyleSheet, Text, View} from "react-native";

const LessonScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Lesson Screen</Text>
        </View>
    );
};

export default LessonScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff'
    },
});
