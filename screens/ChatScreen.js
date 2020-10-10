import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground} from "react-native";
import TextInput from "react-native-paper/src/components/TextInput/TextInput";
import attachIcon from '../assets/icons8-attach-50.png'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff'
    },
    chatArea: {
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        flexWrap: 'nowrap',
        width: '100%',
    },
    keyboardArea: {
        height: '10%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    chatText: {
        backgroundColor: '#DAF7A6',
        borderRadius:8,
        padding: 20,
        margin:20
    },
    chatText2: {
        backgroundColor: '#F5EEF8',
        borderRadius:8,
        padding: 20,
        margin:20
    }
});

class ChatScreen extends Component {

    state = {
        textValue:[]
    };

    changeTextValue = function (value) {
        let self = this;
        self.state.textValue.push(value);

        self.setState({
            test: "123"
        })
    };

    UselessTextInput = () => {
        const [value, onChangeText] = React.useState('');

        return (
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,borderRadius:5}}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder={'Type message...'}
                onEndEditing={(e) => this.changeTextValue(e.nativeEvent.text)}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.chatArea}>
                    <View style={{alignSelf: 'flex-start'}}>
                        <Text style={styles.chatText2} >Hi</Text>
                    </View>

                    {this.state.textValue.map(item => (
                        <View style={{alignSelf: 'flex-end'}} key={item}>
                            <Text style={styles.chatText} key={item}>{item}</Text>
                        </View>
                    ))}


                </View>

                <View style={styles.keyboardArea}>
                    <View style={{flexGrow:1}}>
                        <TouchableOpacity  onPress={() => console.log('Pressed')}>
                            <View>
                                <ImageBackground source={attachIcon} style={{width:30,height:30, marginTop:7 ,marginLeft:15}}>

                                </ImageBackground>
                            </View>
                        </TouchableOpacity >

                    </View>
                    <View style={{flexGrow:8,marginRight:20}}>
                        <this.UselessTextInput/>
                    </View>
                </View>
            </View>
        );
    }
}

export default ChatScreen;
