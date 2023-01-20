import React, {useEffect} from 'react';
import {Image, View} from "react-native";
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import AppConstants from "../../resources/AppConstants";
import {HomeScreenStyles} from "./HomeScreenStyles";
import RouteNames from "../../resources/RouteNames";
import {TitleStyles} from "../../components/Title/TitleStyles";
import InfoCircle from "../../components/InfoCircle/InfoCircle";
import {useSetAllCategories} from "../../context/CategoryContext";
import {fetchCategories} from "./HomeHelper";
import {firebaseConfig} from "../../firebase";
import {initializeApp, getApps, getApp} from "firebase/app";
import {getAuth, signInAnonymously, initializeAuth} from "firebase/auth";
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSetAuthToken} from "../../context/AuthContext";

const HomeScreen = ({navigation}) => {
    const setAllCategories = useSetAllCategories()
    const setAuthToken = useSetAuthToken()
    const config = firebaseConfig
    let firebaseApp;
    let auth
    let token

    useEffect( () => {
        if (!getApps().length) {
            firebaseApp = initializeApp(config);
            auth = initializeAuth(firebaseApp, {
                persistence: getReactNativePersistence(AsyncStorage)
            })
        } else {
            firebaseApp = getApp();
            auth = getAuth()
        }

        signInAnonymously(auth)
            .then((credential) => {
                token = credential.user.getIdToken()
                token.then(token => {
                    config.token = {
                        token: token
                    }
                    fetchCategories(setAllCategories, token)
                    setAuthToken(token)
                })
            })
            .catch((error) => {
                console.log(`${error.code}: ${error.message()}`)
            });
    }, [])

    return (
        <View style={HomeScreenStyles.homeScreenView}>
            <View style={{
                ...TitleStyles.titleView,
                ...HomeScreenStyles.logoView
            }}>
                <Image style={HomeScreenStyles.logo}
                    source={require('../../resources/images/dtw_logo.png')}>
                </Image>

            </View>
            <View style={HomeScreenStyles.controlsView}>
                <PlayStartButton label={AppConstants.PLAY_BUTTON}
                                 navigation={navigation}
                                 target={RouteNames.CATEGORY_SCREEN}
                />
                <InfoCircle navigation={navigation}/>
            </View>
        </View>
    )}

export default HomeScreen

