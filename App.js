import { StyleSheet } from 'react-native';
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import InfoScreen from "./screens/InfoScreen/InfoScreen";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from "./screens/CategoryScreen/CategoryScreen";
import LoadingScreen from "./screens/LoadingScreen/LoadingScreen";
import PlayScreen from "./screens/PlayScreen/PlayScreen";
import ResultsScreen from "./screens/ResultsScreen/ResultsScreen";
import React from "react";
import { CategoryProvider } from "./context/CategoryContext";
import {ScoreProvider} from "./context/ScoreContext";
import {WordsProvider} from "./context/WordsContext";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <CategoryProvider>
            <ScoreProvider>
                <WordsProvider>
                    <NavigationContainer>
                        <Stack.Navigator intialRouteName="Home" screenOptions={{headerTitleAlign: 'center'}}>
                            <Stack.Screen name="Home" component={HomeScreen}/>
                            <Stack.Screen name="Info" component={InfoScreen}/>
                            <Stack.Screen name="Category"
                                          component={CategoryScreen}/>
                            <Stack.Screen name="Loading" component={LoadingScreen}/>
                            <Stack.Screen name="Play"
                                          component={PlayScreen}/>
                            <Stack.Screen name="Results"
                                          component={ResultsScreen}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </WordsProvider>
            </ScoreProvider>
        </CategoryProvider>
    )
}