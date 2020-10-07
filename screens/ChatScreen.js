import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import TextInput from "react-native-paper/src/components/TextInput/TextInput";


const ChatScreen = ({navigation}) => {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    return (
        <View style={styles.container}>
            <Text>Chat Screen</Text>
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </View>
    );
};

export default ChatScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
