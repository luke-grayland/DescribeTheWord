import React, {useEffect, useState} from 'react';
import {View, Image, Animated, Easing} from "react-native";
import {LoadingScreenStyles} from "./LoadingScreenStyles";
import {useSetAllWords} from "../../context/WordsContext";
import {useCategory} from "../../context/CategoryContext";
import {HomeScreenStyles} from "../HomeScreen/HomeScreenStyles";
import {useSetRound} from "../../context/RoundContext";
import {getSpin, getWordsByCategory, toggleVisible} from "./LoadingHelper";
import FadeInOut from "react-native-fade-in-out";

const LoadingScreen = ({ navigation }) => {
    const setWords = useSetAllWords()
    const category = useCategory()
    const setRound = useSetRound()
    const [visible, setVisible] = useState(false)
    const [fadeOut, setFadeOut] = useState(true)
    const spin = getSpin()

    useEffect(() => {
        toggleVisible(visible, setVisible)
        getWordsByCategory(category, navigation, setWords, setFadeOut, fadeOut)
        setRound(false)
    }, [])

    useEffect(() => {
        toggleVisible(visible, setVisible)
    }, [fadeOut])

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
                           rotate={false}>
                    
                    <Animated.Image source={require('../../resources/images/loadingIcon.png')}
                                    style={{
                                        height: 120,
                                        width: 120,
                                        transform: [{rotate: spin}]
                                    }} />
                </FadeInOut>
            </View>
        </View>
    )
}
export default LoadingScreen
