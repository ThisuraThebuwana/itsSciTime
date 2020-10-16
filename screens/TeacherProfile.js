import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";

import TeacherSubjectTable from '../components/TeacherSubjectTable';
import { TouchableOpacity } from "react-native-gesture-handler";

import { globalStyles } from "../styles/global";

const TeachersScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/profile-picture-placeholder.png')} style={globalStyles.image} />
                
                <View>
                    <Text style={{marginVertical: 5, alignSelf: 'center'}}>Thilina Sandaruwan</Text>
                    <Text style={{marginVertical: 5, alignSelf: 'center'}}>thilina.s@sliit.lk</Text>
                    <Text style={{marginVertical: 5, alignSelf: 'center'}}>Subject : Mathematics</Text>
                </View>

                <TouchableOpacity>
                    <Text style={globalStyles.editProfileButton} title='Edit Profile'>Edit Profile</Text>    
                </TouchableOpacity>
            </View>
            <TeacherSubjectTable />
        </View>
    );
};

export default TeachersScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff'
    },
});
