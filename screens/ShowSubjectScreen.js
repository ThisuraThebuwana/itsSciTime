import React from "react";
import { StyleSheet, Text, View,TouchableOpacity} from "react-native";

const ShowSubjectScreen = ({navigation}) => {
    return (
     
      <View style = {styles.container} >
    <TouchableOpacity onPress={() => navigation.navigate('Select Video')}>
       <Text style = {styles.button1} >
       <Text style = {styles.text}> Science </Text>
       </Text>
    </TouchableOpacity>

    <TouchableOpacity   onPress={() => navigation.navigate('Select Video')}>
       <Text style = {styles.button2}>
       <Text style = {styles.text}> Commerce </Text>
       </Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('Select Video')}>
       <Text style = {styles.button3}>
       <Text style = {styles.text}> Mathematics </Text>
       </Text>
   
       
    </TouchableOpacity>

   
    <TouchableOpacity onPress={() => navigation.navigate('Select Video')}>
       <Text style = {styles.button5}>
       <Text style = {styles.text}> English </Text>
       </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Select Video')}>
       <Text style = {styles.button5}>
       <Text style = {styles.text}> Sinhala </Text>
       </Text>
       
    </TouchableOpacity>
   

    <TouchableOpacity   onPress={() => navigation.navigate('Select Video')}>
       <Text style = {styles.button4}>
       <Text style = {styles.text}> Geography </Text>
       </Text>
       </TouchableOpacity>
   
 </View>
  
    
    );
};

export default ShowSubjectScreen;


const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
     
     
   },
   text: {
      borderWidth: 1,
      color:'#f4f4f4',
      fontSize:23,
     // padding:45,
     
  
   },
   button1:{
     paddingVertical:20,
     margin:8,
     paddingHorizontal:120,
     borderColor: 'black',
     borderRadius:8,
     backgroundColor: '#2d7a87'
   },
   button2:{
     paddingVertical:20,
     margin:8,
     paddingHorizontal:103,
     borderColor: 'black',
     borderRadius:8,
     backgroundColor: '#2d7a87'
   },
   button3:{
      paddingVertical:20,
      margin:8,
      paddingHorizontal:94,
      borderColor: 'black',
      borderRadius:8,
      backgroundColor: '#2d7a87'
    },
    button4:{
      paddingVertical:20,
      margin:8,
      paddingHorizontal:110,
      borderColor: 'black',
      borderRadius:8,
      backgroundColor: '#2d7a87'
    },
    button5:{
      paddingVertical:20,
      margin:8,
      paddingHorizontal:125,
      borderColor: 'black',
      borderRadius:8,
      backgroundColor: '#2d7a87'
    }
});