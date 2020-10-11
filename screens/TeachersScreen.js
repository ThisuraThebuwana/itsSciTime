import React, { useState, Component } from "react";
import {StyleSheet, Text, View, Image, Modal} from "react-native";

import TeacherTable from '../components/TeacherSubjectTable';

const TeachersScreen = ({navigation}) => {

    const [modalOpen, setModalOpen] = useState(false);

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
