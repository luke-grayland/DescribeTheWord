import React, {useEffect, useRef, useState} from 'react';
import {View, Image} from "react-native";
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";
import {LoadingScreenStyles} from "./LoadingScreenStyles";
import {TitleStyles} from "../../components/Title/TitleStyles";
import {useAllWords, useSetAllWords} from "../../context/WordsContext";
import {useCategory} from "../../context/CategoryContext";
import {HomeScreenStyles} from "../HomeScreen/HomeScreenStyles";
import {useSetRound} from "../../context/RoundContext";
import Config from "../../config/config";

const LoadingScreen = ({ navigation }) => {

    const [error, setError] = useState()
    const setWords = useSetAllWords()
    const category = useCategory()
    const setRound = useSetRound()

    useEffect(() => {
        fetch(`${Config.IP_ADDRESS}:${Config.PORT}/words/${category}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(async words => {
                setWords(words.data)

                setTimeout( () => {
                    navigation.navigate(RouteNames.PLAY_SCREEN)
                }, 3000)

            })
            .catch(error => {
                console.error("Error fetching words data: ", error)
                setError(error)
            })

        setRound(false)

    }, [])



    return (
        <View style={LoadingScreenStyles.loadingScreenView}>
            <View style={TitleStyles.titleView}>
                <Image style={HomeScreenStyles.logo}
                       source={require('../../resources/images/dtw_logo.png')}>
                </Image>
            </View>
            <View style={LoadingScreenStyles.content}>
                <Image source={require('../../resources/images/sand_timer.png')}
                       style={LoadingScreenStyles.timer}/>
                <PlayStartButton label={"Temp"} navigation={navigation} target={RouteNames.PLAY_SCREEN}/>
            </View>
        </View>
    )
}
export default LoadingScreen

