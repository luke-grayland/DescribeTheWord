import React, {useEffect} from 'react';
import {Image, View} from "react-native";
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import AppConstants from "../../resources/AppConstants";
import {HomeScreenStyles} from "./HomeScreenStyles";
import RouteNames from "../../resources/RouteNames";
import {TitleStyles} from "../../components/Title/TitleStyles";
import InfoCircle from "../../components/InfoCircle/InfoCircle";
import {useSetAllCategories} from "../../context/CategoryContext";

const HomeScreen = ({navigation}) => {

    const setAllCategories = useSetAllCategories()

    useEffect( () => {
        fetch("http://192.168.86.162:5001/categories")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(response => {
                let categories = []

                for (let i = 0; i < Object.keys(response.data).length; i++)
                    categories[i] = response.data[i]

                setAllCategories(categories)
            })
            .catch(error => {
                console.error("Error fetching categories data: ", error)
            })
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

