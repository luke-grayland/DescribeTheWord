import React, {useEffect} from 'react';
import {View} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import AppConstants from "../../resources/AppConstants";
import Fonts from "../../resources/Fonts";
import {HomeScreenStyles} from "./HomeScreenStyles";
import RouteNames from "../../resources/RouteNames";
import {TitleStyles} from "../../components/Title/TitleStyles";
import InfoCircle from "../../components/InfoCircle/InfoCircle";
import {useSetAllCategories} from "../../context/CategoryContext";

const HomeScreen = ({navigation}) => {

    const setAllCategories = useSetAllCategories()

    useEffect( () => {
        fetch("http://192.168.43.109:5001/categories")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                let categories = []

                for (let i = 0; i < Object.keys(data).length; i++)
                    categories[i] = data[i]

                setAllCategories(categories)
            })
            .catch(error => {
                console.error("Error fetching categories data: ", error)
            })
    }, [])

    return (
        <View style={HomeScreenStyles.homeScreenView}>
            <View style={TitleStyles.titleView}>
                <Title title={AppConstants.GAME_TITLE} fontSize={Fonts.H1_FONT_SIZE}/>
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

