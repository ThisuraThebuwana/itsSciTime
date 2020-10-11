import React from "react";
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground,Modal} from "react-native";

const PlayVideoScreen1 = ({navigation}) => {

    
    return (
     
        <View style={styles.container}>

      

       
         <View style={styles.videoList}>
       
       <View style={styles.description}>
      
              
               
        
               <View>

                  <Text style={{fontSize:24}}>Unit 01</Text>
                  <ImageBackground source={{ uri: "https://thumbs.dreamstime.com/t/video-player-flat-design-template-web-mobile-apps-vector-illustration-61871735.jpg" }} style={{width:300,height:200}}>

</ImageBackground>
                </View>
                </View>

     
        </View>

        <View style={styles.videoList1}>
       
       <View style={styles.description}>
      
              
               <ImageBackground source={{ uri: "https://tandsgo.com/wp-content/uploads/2018/01/portfolio-icon-onlinevideos.png" }} style={{width:80,height:90}}>

               </ImageBackground>
        
               <View style={{paddingLeft:40}}>

                  <Text style={{fontSize:24}}>Unit 02</Text>
               
                </View>
                </View>

       <View style={styles.description}>
      
               <View style={{paddingLeft:120,paddingTop:20}}>

                <Text style={{fontSize:18}}>RS.100</Text>
                 </View>
                  <Text style={{paddingLeft:30}}></Text>
                     <TouchableOpacity style={{ backgroundColor: '#E53535',  margin:15,paddingHorizontal:30, paddingVertical:10}}  onPress={() => navigation.navigate('Buy Video')}>
                       <Text style={{color:'#fff'}}>Pay</Text>
                   </TouchableOpacity>
        </View>
        </View>
       
       
       
    
    </View>
  
    
    );
};

export default  PlayVideoScreen1;



const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    description:{
        
        height:75,
        width:300,
      
        flexDirection: 'row',
       
    


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
    videoList: {
        height:350,
        width:350,
       
        backgroundColor:'#44a6b7',
        borderRadius: 15,
        padding: 20,
        margin:10,

    },
    videoList1: {
        height:200,
        width:350,
       
        backgroundColor:'#44a6b7',
        borderRadius: 15,
        padding: 20,
        margin:10,

    },
    btn1: {
        backgroundColor: '#E53535',
        alignItems: 'flex-end',
        borderRadius: 10,
        fontSize:24,
        padding: 10,
        margin:15,
        paddingHorizontal:30,
        
        
    },
    modal: {  
        justifyContent: 'center',  
        alignItems: 'center',   
        backgroundColor : "#00BCD4",   
        height: 300 ,  
        width: '80%',  
        borderRadius:10,  
        borderWidth: 1,  
        borderColor: '#fff',    
        marginTop: 80,  
        marginLeft: 40,  
         
         },  
         text: {  
            color: '#3f2949',  
            marginTop: 10  
         }  
});
