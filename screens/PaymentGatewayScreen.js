import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground} from "react-native";
import TextInput from "react-native-paper/src/components/TextInput/TextInput";
import icon from "../assets/creditcard-visa.png";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#fff',
        padding : 20,
    },
    textArea1: {
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    textArea: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    textArea2: {
        alignSelf: 'flex-end',
        marginTop: 40,
        marginBottom: 10,
    },
    textArea3: {
        alignSelf: 'flex-end',
        marginTop: 10,
        marginBottom: 30,
    },
    btn: {
        backgroundColor: '#E53535',
        width: 100,
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        color: '#fff'
    }
});

class PaymentGatewayScreen extends Component {

    navigation;
    nameHasErrors=false;
    cardNoHasErrors=false;
    expiryHasErrors=false;
    cvvHasErrors=false;

    constructor(props, context) {
        super(props, context);
        this.navigation = props.navigation
        this.state = {
            NameValue:'',
            CardNoValue:'',
            ExpiryValue:'',
            CVVValue:'',
            ErrorMsg: "You must fill all the fields correctly"
        };
    }

    changeNameValue = function (value) {
        let self = this;

        self.setState({
            NameValue: value
        })

    };
    changeNumberValue = function (value) {
        let self = this;

        self.setState({
            CardNoValue: value
        })
    };
    changeExpiryValue = function (value) {
        let self = this;

        self.setState({
            ExpiryValue: value
        })
    };
    changeCVVValue = function (value) {
        let self = this;

        self.setState({
            CVVValue: value
        })
    };

    checkNameValue = function () {
        let self = this;
        let val = this.state.NameValue;
        if(val===""||val===null){
            self.nameHasErrors = true;
        }else{
            self.nameHasErrors = false;
        }

    };

    checkNumberValue = function () {
        let self = this;
        let val = this.state.CardNoValue;
        if(val==="" || val===null|| !(val % 1 === 0)|| val.length !== 16){
            self.cardNoHasErrors= true
        }else{
            self.cardNoHasErrors=false
        }
    };

     checkExpiryValue = function () {
        let self = this;
        let val = this.state.ExpiryValue;
        let val1 = val.substr(0,2);
        let val2 = val.substr(2,1);
        let val3 = val.substr(3,2);

        if(val===""||val===null || val.length !==5 || !(val1 % 1 === 0) || !(val3 % 1 === 0) || val2 !== '/' || val1 >= 13){
            self.expiryHasErrors = true;
        }else{
            self.expiryHasErrors = false;
        }

    };

    checkCVVValue = function () {
        let self = this;
        let val = this.state.CVVValue;

        if(val==="" || val===null|| !(val % 1 === 0)|| val.length !== 3){
            self.cvvHasErrors= true
        }else{
            self.cvvHasErrors=false
        }
    };

    CardHoldersNameInput = () => {
        const [value, onChangeText] = React.useState('');

        return (
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,borderRadius:5}}
                onChangeText={text => onChangeText(text)}
                value={value}
                onEndEditing={(e) => this.changeNameValue(e.nativeEvent.text)}
            />
        );
    }

    CardNumberInput = () => {
        const [value, onChangeText] = React.useState('');

        return (
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,borderRadius:5}}
                onChangeText={text => onChangeText(text)}
                value={value}
                onEndEditing={(e) => this.changeNumberValue(e.nativeEvent.text)}
            />
        );
    }

    ExpiryInput = () => {
        const [value, onChangeText] = React.useState('');

        return (
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,borderRadius:5}}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder={'(MM/YY)'}
                onEndEditing={(e) => this.changeExpiryValue(e.nativeEvent.text)}
            />
        );
    }

    CVVInput = () => {
        const [value, onChangeText] = React.useState('');

        return (
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,borderRadius:5}}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder={'3 Digit Number'}
                onEndEditing={(e) => this.changeCVVValue(e.nativeEvent.text)}
            />
        );
    };

    createTwoButtonAlert = () =>
    {
        this.checkNameValue();
        this.checkNumberValue();
        this.checkExpiryValue();
        this.checkCVVValue();
        if(!this.nameHasErrors && !this.cardNoHasErrors && !this.expiryHasErrors && !this.cvvHasErrors){
            // console.log('success');
            Alert.alert(
                "Transaction Successful",
                " You have successfully reloaded your account",
                [
                    { text: "OK", onPress: () => {
                            this.navigation.navigate('Balance')
                        }}
                ],
                { cancelable: false }
            );
        }else{
            // console.log('error');
            Alert.alert(
                "Error",
                this.state.ErrorMsg,
                [
                    { text: "OK", onPress: () => {
                            // this.navigation.navigate('Balance')
                        }}
                ],
                { cancelable: false }
            );
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textArea3}>
                    {/*<ImageBackground source={icon} style={{width: 100}}>*/}
                        {/*<Text>kjbjk</Text>*/}
                    {/*</ImageBackground>*/}
                    <Image
                        style={{width: 70, height: 50}}
                        source={icon}
                    />
                </View>
                <View style={styles.textArea}>
                    <Text>Card Holder's Name</Text>
                    <this.CardHoldersNameInput/>
                </View>
                <View style={styles.textArea}>
                    <Text>Card Number</Text>
                    <this.CardNumberInput/>
                </View>
                <View style={styles.textArea1}>
                    <View style={{width:'45%', marginRight: '5%'}}>
                        <Text>Expiry</Text>
                        <this.ExpiryInput/>
                    </View>
                    <View style={{width:'45%', marginLeft: '5%'}}>
                        <Text>CVV</Text>
                        <this.CVVInput/>
                    </View>
                </View>
                <View style={styles.textArea2}>
                    <TouchableOpacity style={styles.btn} onPress={() =>  this.createTwoButtonAlert()}>
                        <Text style={{fontSize: 18, color:'#fff'}}>Pay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default PaymentGatewayScreen;
