import React from "react";
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

import ShowSubjectScreen from "./ShowSubjectScreen";
import ShowGradeScreen from "./ShowGradeScreen";
import ShowVideoScreen from "./ShowVideoScreen";
import BuyVideoScreen from "./BuyVideoScreen";
import PlayVideoScreen from "./PlayVideoScreen";
import PlayVideoScreen1 from "./PlayVideoScreen1";

const Stack = createStackNavigator();

const LessonScreen = ({}) => {
    return (
                <Stack.Navigator>
                    <Stack.Screen name="Select Grade" component={ShowGradeScreen} options={{ headerShown: false}}/>
                    <Stack.Screen name="Select Subject" component={ShowSubjectScreen} options={{ headerShown: false}}/>
                    <Stack.Screen name="Select Video" component={ShowVideoScreen} options={{ headerShown: false}}/>
                    <Stack.Screen name="Buy Video" component={BuyVideoScreen} options={{ headerShown: false}}/>
                    <Stack.Screen name="Play Video" component={PlayVideoScreen} options={{ headerShown: false}}/>
                    <Stack.Screen name="Play Video1" component={PlayVideoScreen1} options={{ headerShown: false}}/>
                </Stack.Navigator>
    );
};

export default LessonScreen;


