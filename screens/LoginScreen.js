import React from "react";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  StyleSheet,
  TextInput,
  Linking

} from "react-native";

import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import { useTheme } from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import Users from "../users/Users";
import {Alert} from "react-native-web";
// import * as  from "react-native-web";

const LoginScreen = ({ navigation }) => {
  // function to check input change

  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser:true,
    isValidPassword:false
  });

  const textInputChange = (val) => {
    if (val.trim().length > 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser:true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser:false
      });
    }
  };

  //   handle pass change
  const handlePasswordChange = (val) => {
    if(val.trim().length >= 6){
      setData({
        ...data,
        password: val,
        // check_textInputChange: true,
        isValidPassword:true
      });
    }else{
      setData({
        isValidPassword:false
      })
    }


  };

  // reveal password
  const revealPassword = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  // load a page in browser
  const loadInBrowser = () => {
    Linking.openURL('https://accounts.google.com/login').catch(err => console.error('An error occurred', err));
  };

  const loadfb = () => {
    Linking.openURL('https://www.facebook.com/').catch(err => console.error('An error occurred', err));
  };

  const signInPress = () =>{
     navigation.push("Main Screen")
  }

  // //handle user email password and let the login happen
  // const loginHandler = (email,password) =>{
  //   const foundUsers = Users.filter(
  //       item=>{
  //         return email == item.email && password == item.password;
  //       }
  //   )
  //   if(data.email.length == 0 || data.password ==0 ){
  //     Alert.alert('Invalid User: email or password cannot be empty');
  //   }else{
  //     signIn(email,password)
  //     signIn:async (foundUser) => {
  //       let userToken
  //       userToken = foundUser[0].userToken;
  //      const email = foundUser[0].email;
  //      const password = foundUser[0].password
  //
  //     }
  //   }
  //
  // }


  //
  //

  return (
      // <View style={{
      //     flex: 1,
      //     alignItems: 'center',
      //     justifyContent: 'center' ,
      //     backgroundColor:'#ffffff'}}>
      //     <Text>Sign in here</Text>
      //     <Button
      //         title="Login"
      //         onPress={() => navigation.push('Main Screen')}
      //     />
      //
      // </View>

      <View style={styles.container}>
        <StatusBar
            backgroundColor={'#71cfec'}
            barStyle={'light-content'}
        ></StatusBar>
        <View style={styles.header}>
          <Text style={styles.text_header}>Sign in with Email</Text>
        </View>

        {/*<Animatable.View*/}
        {/*    animation="bounceIn"*/}
        {/*>*/}


        <View style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
          {/*user email*/}
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
                style={styles.textInput}
                placeholder="Your Email"
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
            ></TextInput>
            {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
            ) : null}

          </View>
          {/*validation username*/}
          {data.isValidUser ? null :
              <Animatable.View
                  animation='fadeInLeft'
                  duration={500}
              >
                <Text style={styles.errorMsg}>Email must be valid</Text>
              </Animatable.View>
          }



          {/*    password field*/}

          <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
                style={styles.textInput}
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={(val) => handlePasswordChange(val)}
            ></TextInput>
            <TouchableOpacity onPress={revealPassword}>
              {/* reveal pass icon change */}
              {data.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
              ) : (
                  <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
            {/*{data.isValidPassword ? null :*/}

            {/*}*/}


          </View>
          {/*validation password*/}
          {data.isValidPassword ? null :
              <Animatable.View
                  animation='fadeInLeft'
                  duration={500}
              >
                <Text style={styles.errorMsg}>Password must be 6 characters long</Text>
              </Animatable.View>
          }

          <TouchableOpacity>
            <Text style={{marginTop:15,color:'#009387'}}>Forgot password ?</Text>
          </TouchableOpacity>


          {/* sig in button   */}

          <View style={styles.button}>
            <TouchableOpacity
                title="Login"
                onPress={() => navigation.push("Main Screen")}
                // onPress={signInPress()}
            >
              <LinearGradient
                  colors={["#56d6cb", "#17f1d7"]}
                  style={[
                    styles.signIn,
                    {
                      borderColor: "#009387",
                      width: 320,
                      height: 50,
                      marginTop:-15,
                      marginBottom:15
                    },
                  ]}
              >
                <Text style={[styles.textSign, { color: "#fff" }]}>Sign in</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.push("signUP")}
                style={[
                  styles.signIn,
                  {
                    borderColor: "#009387",
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}
            >
              <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#009387",
                    },
                  ]}
              >
                Need an account ?
              </Text>
            </TouchableOpacity>

          </View>
          <View>

            <FontAwesome style={styles.icons} name="google-plus-square" color="#78e3e3" size={20} />
            <TouchableOpacity

                onPress={()=>loadInBrowser()}
                style={[
                  styles.signIn,
                  {
                    borderColor: "#78e3e3",
                    borderWidth: 1,
                    marginTop: -15,
                  },
                ]}
            >

              <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#78e3e3",
                    },
                  ]}
              >


                Login with Google
              </Text>

            </TouchableOpacity>
          </View>


          {/*facebook login*/}
          <View>
            <FontAwesome style={styles.icons} name="facebook-square" color="#1b9df5" size={20} />
            <TouchableOpacity
                onPress={() => loadfb()}
                style={[
                  styles.signIn,
                  {
                    borderColor: "#1b9df5",
                    borderWidth: 1,
                    marginTop: -15,
                  },
                ]}
            >
              <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#1b9df5",
                    },
                  ]}
              >
                Login with Facebook
              </Text>
            </TouchableOpacity>

          </View>

        </View>
        {/*</Animatable.View>*/}
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#71cfec",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  icons:{
    top:20,
    left:30
  }
});

export default LoginScreen;
