import { Formik, yupToFormErrors } from "formik";
import React, { Component, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput,  } from "react-native-paper";
import { globalStyles } from "../styles/global";
import * as yup from 'yup';

const teacherSchema = yup.object({
    firstname: yup.string()
                .required()
                .min(1),
    
    lastname:  yup.string()
                .required()
                .min(1),

    email:  yup.string()
                .required()
                .email(),

    password: yup.string()
                .required()
                .min(4),

    confirmpassword: yup.string()
                .oneOf([yup.ref('password'), null], "Passwords don't Match!")
                .required()
});

export default function TeacherSignupForm(){

    return(
        <View>
                <Formik
                    initialValues={{firstname: '', lastname: '', email: '', password: '', confirmpassword: ''}}
                    validationSchema={teacherSchema}
                    onSubmit={(values, actions)=>{
                        actions.resetForm();
                        console.log(values);
                        //add success message
                        //navigate to profile page
                    }}
                >
                    {(props)=>(
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='First Name'
                                onChangeText={props.handleChange('firstname')}
                                value={props.values.firstname}
                                onBlur={props.handleBlur('firstname')}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.firstname && props.errors.firstname}</Text>

                            <TextInput
                                style={globalStyles.input}
                                placeholder='Last Name'
                                onChangeText={props.handleChange('lastname')}
                                value={props.values.lastname}
                                onBlur={props.handleBlur('lastname')}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.lastname && props.errors.lastname}</Text>

                            <TextInput
                                style={globalStyles.input}
                                placeholder='Email'
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                                onBlur={props.handleBlur('email')}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>

                            <TextInput
                                style={globalStyles.input}
                                placeholder='Password'
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                                onBlur={props.handleBlur('password')}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>

                            <TextInput
                                style={globalStyles.input}
                                placeholder='Confirm Password'
                                onChangeText={props.handleChange('confirmpassword')}
                                value={props.values.confirmpassword}
                                onBlur={props.handleBlur('confirmpassword')}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.confirmpassword && props.errors.confirmpassword}</Text>

                            <TouchableOpacity>
                                <Text style={globalStyles.registerButton} title='Register' onPress={props.handleSubmit}>Register</Text>    
                            </TouchableOpacity>

                            <Text style={globalStyles.tinyText}>By Registering you agree to our <Text style={globalStyles.linkText}>Terms and Conditions</Text></Text>
                            <Text style={styles.mediumText}>Already Rregistered?</Text>
                        
                        </View>
                    )}
                </Formik>
        </View>
    )

}

const styles = StyleSheet.create({
    mediumText: {
        marginVertical: 20,
        fontSize: 15,
        flexDirection: 'row',
        alignSelf: 'center'
    }
});