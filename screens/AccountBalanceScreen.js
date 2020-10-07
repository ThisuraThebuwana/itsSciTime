import React from "react";
import {Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const AccountBalanceScreen = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View style={styles.balanceDialog}>

                    <Text style={{fontSize:18}}>Account Balance</Text>
                <View style={styles.viewAmount}>
                    <Text style={{fontSize:18, paddingTop: 10}}>Rs.</Text><Text style={{fontSize:28,paddingLeft: 10}}>1500.00</Text>
                </View>

                <View style={styles.fixToText}>
                    {/*<Button*/}
                        {/*title='Button'*/}
                        {/*onPress={() => navigation.navigate('Payment Method')}*/}
                    {/*/>*/}
                    <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('Payment Method')}>
                        <Text style={{color:'#fff'}}>Reload</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AccountBalanceScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    button: {
        flexDirection: 'row',
        width: 100,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        elevation:3,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 160,
        paddingTop: 40
    },
    viewAmount: {
        flexDirection: 'row',
        paddingLeft: 40,
        marginTop: 30
    },
    balanceDialog: {
        height:200,
        width:280,
        backgroundColor:'#E8DAEF',
        borderRadius: 15,
        padding: 20
    },
    btn1: {
        backgroundColor: '#E53535',
        alignItems: 'center',
        borderRadius: 10,
        fontSize:18,
        padding: 10,
    }
});
