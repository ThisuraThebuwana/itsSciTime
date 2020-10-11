import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({

    iconWithText:{
        flexDirection: 'row',
        padding: 20,
    },

    icon:{
        paddingRight: 10,
    },

    closeIcon:{
        flexDirection: 'row',
        alignSelf: 'flex-end',
        padding: 20
    },

    input:{
        flexDirection: 'row',
        alignSelf: 'center',
        width: '70%',
        height: 40,
        borderWidth: 1,
        borderColor: '#1c6e8c',
        borderRadius: 6,
        fontSize: 15,
        marginTop: 5,
        backgroundColor: '#ffffff'
    },

    headingText:{
        fontWeight: 'bold',
        flexDirection: 'row',
        fontSize: 24,
        alignSelf: 'center',
        marginBottom: 25
    },

    registerButton:{
        color: 'white',
        fontWeight: 'bold',
        flexDirection: 'row',
        alignSelf: 'center',
        width: '50%',
        height: 50,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 6,
        fontSize: 15,
        marginTop: 30,
        backgroundColor: '#1c6e8c',
        fontSize:24,
        textAlign: 'center',
        paddingVertical: 10,
    },

    editProfileButton:{
        color: 'white',
        backgroundColor: 'grey',
        padding: 6,
        borderRadius: 6,
        marginTop: 20,
        fontSize: 18,
        flexDirection: 'row',
        alignSelf: 'center'
    },

    errorText:{
        color: 'crimson',
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center'
    },

    mediumText: {
        marginVertical: 20,
        fontSize: 15,
        flexDirection: 'row',
        alignSelf: 'center'
    },

    tinyText:{
        fontSize: 8,
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 20
    },

    linkText:{
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },

    image: {
        alignSelf: 'center',
        marginTop: 30,
        width: 150,
        height: 150,
        resizeMode: 'contain'
    }

});