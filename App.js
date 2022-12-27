import HomeScreen from "./screens/HomeScreen/HomeScreen";
import InfoScreen from "./screens/InfoScreen/InfoScreen";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from "./screens/CategoryScreen/CategoryScreen";
import LoadingScreen from "./screens/LoadingScreen/LoadingScreen";
import PlayScreen from "./screens/PlayScreen/PlayScreen";
import ResultsScreen from "./screens/ResultsScreen/ResultsScreen";
import React, {useEffect} from "react";
import { CategoryProvider } from "./context/CategoryContext";
import {ScoreProvider} from "./context/ScoreContext";
import {WordsProvider} from "./context/WordsContext";
import {RoundProvider} from "./context/RoundContext";
import { useFonts } from 'expo-font';
import {BackHandler} from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => true);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", () => true);
    }, [])

    const [fontsLoaded] = useFonts({
        'Raleway': require('./resources/fonts/Raleway_Variable.ttf'),
    });

    return (
        <CategoryProvider>
            <ScoreProvider>
                <WordsProvider>
                    <RoundProvider>
                        <NavigationContainer>
                            <Stack.Navigator intialRouteName="Home"
                                             screenOptions={{
                                                 headerTitleAlign: 'center',
                                                 headerShown: false,

                                             }}
                            >
                                <Stack.Screen name="Home" component={HomeScreen}/>
                                <Stack.Screen name="Info" component={InfoScreen}/>
                                <Stack.Screen name="Category"
                                              component={CategoryScreen}
                                />

                                <Stack.Screen name="Loading" component={LoadingScreen}/>
                                <Stack.Screen name="Play"
                                              component={PlayScreen}

                                />
                                <Stack.Screen name="Results"
                                              component={ResultsScreen}/>
                            </Stack.Navigator>
                        </NavigationContainer>
                    </RoundProvider>
                </WordsProvider>
            </ScoreProvider>
        </CategoryProvider>
    )
}
