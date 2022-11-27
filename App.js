import { Linking, Platform } from 'react-native';
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import InfoScreen from "./screens/InfoScreen/InfoScreen";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from "./screens/CategoryScreen/CategoryScreen";
import LoadingScreen from "./screens/LoadingScreen/LoadingScreen";
import PlayScreen from "./screens/PlayScreen/PlayScreen";
import ResultsScreen from "./screens/ResultsScreen/ResultsScreen";
import React, {useCallback} from "react";
import { CategoryProvider } from "./context/CategoryContext";
import {ScoreProvider} from "./context/ScoreContext";
import {WordsProvider} from "./context/WordsContext";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
// const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

export default function App() {
    // const [isReady, setIsReady] = React.useState(false);
    // const [initialState, setInitialState] = React.useState();

    // React.useEffect(() => {
    //     const restoreState = async () => {
    //         try {
    //             const initialUrl = await Linking.getInitialURL();
    //
    //             if (Platform.OS !== 'web' && initialUrl == null) {
    //                 // Only restore state if there's no deep link and we're not on web
    //                 const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
    //                 const state = savedStateString ? JSON.parse(savedStateString) : undefined;
    //
    //                 if (state !== undefined) {
    //                     setInitialState(state);
    //                 }
    //             }
    //         } finally {
    //             setIsReady(true);
    //         }
    //     };
    //
    //     if (!isReady) {
    //         restoreState();
    //     }
    // }, [isReady]);
    //
    // if (!isReady) {
    //     return null;
    // }

    const [fontsLoaded] = useFonts({
        'Inter-Black': require('./resources/fonts/Raleway-Black.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <CategoryProvider>
            <ScoreProvider>
                <WordsProvider>
                    <NavigationContainer
                        // initialState={initialState}
                        // onStateChange={(state) =>
                        //     AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
                        // }
                    >
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