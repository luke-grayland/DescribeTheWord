import React, {useEffect, useState} from 'react';
import {View, Image} from "react-native";
import {LoadingScreenStyles} from "./LoadingScreenStyles";
import {useSetAllWords} from "../../context/WordsContext";
import {useCategory} from "../../context/CategoryContext";
import {HomeScreenStyles} from "../HomeScreen/HomeScreenStyles";
import {useSetRound} from "../../context/RoundContext";
import {getWordsByCategory, toggleVisible} from "./LoadingHelper";
import AppConstants from "../../resources/AppConstants";
import FadeInOut from "react-native-fade-in-out";

const LoadingScreen = ({ navigation }) => {
    const setWords = useSetAllWords()
    const category = useCategory()
    const setRound = useSetRound()
    const [visible, setVisible] = useState(false)
    const [fadeOut, setFadeOut] = useState(true)

    useEffect(() => {
        toggleVisible(visible, setVisible)
    }, [fadeOut])

    useEffect(() => {
        toggleVisible(visible, setVisible)
        getWordsByCategory(category, navigation, setWords)
        setRound(false)

        setTimeout(() => {
            setFadeOut(!fadeOut)
        }, (AppConstants.LOADING_SCREEN_TIME))
    }, [])

    return (
        <View style={LoadingScreenStyles.loadingScreenView}>
            <View style={LoadingScreenStyles.titleView}>
                <Image style={HomeScreenStyles.logo}
                       source={require('../../resources/images/dtw_logo.png')}>
                </Image>
            </View>
            <View style={LoadingScreenStyles.content}>
                <FadeInOut visible={visible}
                           duration={500}
                           scale={true}
                           rotate={true}>
                    <Image
                        style={{
                            height: 120,
                            width: 120,
                        }}
                        source={require('../../resources/images/sandtimer3.png')} />
                </FadeInOut>
            </View>
        </View>
    )
}
export default LoadingScreen
