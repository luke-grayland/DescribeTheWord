import React, {useEffect, useState} from 'react';
import {View, Image} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";
import {LoadingScreenStyles} from "./LoadingScreenStyles";
import StringLiterals from "../../resources/AppConstants";
import Fonts from "../../resources/Fonts";
import {TitleStyles} from "../../components/Title/TitleStyles";
import {useAllWords, useSetAllWords} from "../../context/WordsContext";
import {useCategory} from "../../context/CategoryContext";

const LoadingScreen = ({ navigation }) => {

    const [error, setError] = useState()
    const setWords = useSetAllWords()
    const words = useAllWords()
    const category = useCategory()

    useEffect(() => {
        fetch(`http://192.168.43.109:5001/words/${category}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(words => {
                setWords(words.data)
                // automatically navigate to next page
            })
            .catch(error => {
                console.error("Error fetching words data: ", error)
                setError(error)
                // still need to display the error to user if it occurs
            })
    }, [])

    return (
        <View style={LoadingScreenStyles.loadingScreenView}>
            <View style={TitleStyles.titleView}>
                <Title title={StringLiterals.GAME_TITLE} fontSize={Fonts.H1_FONT_SIZE} style={TitleStyles.title}/>
            </View>
            <View style={LoadingScreenStyles.content}>
                <Image source={require('../../resources/images/sand_timer.png')} style={LoadingScreenStyles.timer}/>
                <PlayStartButton label={"Temp"} navigation={navigation} target={RouteNames.PLAY_SCREEN}/>
            </View>
        </View>
    )
}
export default LoadingScreen

