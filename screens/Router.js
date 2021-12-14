import React, { useEffect, useState } from "react";
//import { ThemeProvider, Text, Switch, Button, Header, Icon, ListItem, Avatar, withTheme, } from 'react-native-elements';
import { observer } from "mobx-react";
//import {  themeStore } from '../store';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RadioScreen } from "./";
import { darkTheme, lightTheme, theme } from "../styles";
//import { lightTheme, darkTheme } from "../styles";

//import { Loading } from "../_components";
// import { ActivityIndicator, View } from "react-native";


const MainStackNavigator = createStackNavigator();
const Router = ({ isDarkMode }) => {
    const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     const init = async () => {
    //         const theme = await AsyncStorage.getItem('theme');
    //         if (theme !== null) {
    //             //themeStore.setTheme(JSON.parse(theme), JSON.parse(theme) ? darkTheme : lightTheme)
    //         }

    //         setLoading(false)
    //     }
    //     init();
    // }, [])

    //if (loading || authStore.auth_loading) return <View style={{ flex: 1, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator color={'red'} /></View>
    return (

        <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
            <PaperProvider theme={isDarkMode ?  darkTheme : lightTheme}>
                <MainStackNavigator.Navigator
                    initialRouteName="Radio"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <MainStackNavigator.Screen
                        name="Radio"
                        component={RadioScreen}
                    />
                </MainStackNavigator.Navigator>
            </PaperProvider>
        </NavigationContainer>

    )
}

const oRouter = observer(Router)
export { oRouter as Router }