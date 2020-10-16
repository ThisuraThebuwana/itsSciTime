import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";

import TeacherTable from '../components/TeacherTable';

const TeachersScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TeacherTable />
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
