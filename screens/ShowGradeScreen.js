import React from "react";
import { StyleSheet, Text, View,TouchableOpacity} from "react-native";

const ShowGradeScreen = ({navigation}) => {
    return (
     
      <View style = {styles.container}>
      
    <TouchableOpacity onPress={() => navigation.navigate('Select Subject')}>
       <Text style = {styles.button1}>
       <Text style = {styles.text}> Grade 6 </Text>
       </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Select Subject')}>
       <Text style = {styles.button1}>
       <Text style = {styles.text}> Grade 7 </Text>
       </Text>
       
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Select Subject')}>
       <Text style = {styles.button1}>
       <Text style = {styles.text}> Grade 8 </Text>
       </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Select Subject')}>
       <Text style = {styles.button1}>
       <Text style = {styles.text}> Grade 9 </Text>
       </Text>
       
    </TouchableOpacity>
    <TouchableOpacity   onPress={() => navigation.navigate('Select Subject')}>
       <Text style = {styles.button2}>
       <Text style = {styles.text}> Grade 10 </Text>
       </Text>
       
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Select Subject')}>
       <Text style = {styles.button2}>
       <Text style = {styles.text}> Grade 11 </Text>
       </Text>
       
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Select Subject')}>
       <Text style = {styles.button2}>
       <Text style = {styles.text}> Grade 12 </Text>
       </Text>
       
    </TouchableOpacity>
 </View>
  
    
    );
};

export default  ShowGradeScreen;


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
     paddingVertical:15,
     margin:8,
     paddingHorizontal:120,
     borderColor: 'black',
     borderRadius:8,
     backgroundColor: '#44a6b7'
   },
   button2:{
     paddingVertical:15,
     margin:8,
     paddingHorizontal:115,
     borderColor: 'black',
     borderRadius:8,
     backgroundColor: '#44a6b7'
   }
});