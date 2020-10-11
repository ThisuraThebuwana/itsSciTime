import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";

const BuyVideoScreen = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View style={styles.balanceDialog}>

                    <Text style={{fontSize:18}}>Account Balance - RS.3000</Text>
                <View style={styles.viewAmount}>
                    <Text style={{fontSize:18}}>Unit-02 {"\n"} {"\n"}Price-100</Text>
                   
                </View>
                

                <View style={styles.fixToText}>
                    {/*<Button*/}
                        {/*title='Button'*/}
                        {/*onPress={() => navigation.navigate('Payment Method')}*/}
                    {/*/>*/}
                    <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('Play Video')}>
                        <Text style={{color:'#fff'}}>Pay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default BuyVideoScreen;


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
        height:230,
        width:280,
        backgroundColor:'#009688',
        borderRadius: 15,
        padding: 20
    },
    btn1: {
        backgroundColor: '#E53535',
        alignItems: 'center',
        borderRadius: 10,
        fontSize:18,
        padding: 10,
        paddingHorizontal:20,
    }
});
