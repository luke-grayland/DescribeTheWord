import React, {useEffect} from 'react';
import {View, Image, Animated, Easing} from "react-native";
import {LoadingScreenStyles} from "./LoadingScreenStyles";
import {TitleStyles} from "../../components/Title/TitleStyles";
import {useSetAllWords} from "../../context/WordsContext";
import {useCategory} from "../../context/CategoryContext";
import {HomeScreenStyles} from "../HomeScreen/HomeScreenStyles";
import {useSetRound} from "../../context/RoundContext";
import Config from "../../config/config";
import {createSpin, getWordsByCategory, startAnimationLoop} from "./LoadingHelper";

const LoadingScreen = ({ navigation }) => {
    const setWords = useSetAllWords()
    const category = useCategory()
    const setRound = useSetRound()
    const spinValue = new Animated.Value(0);
    const spin = createSpin(spinValue)

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start();

    useEffect(() => {
        getWordsByCategory(
            Config.IP_ADDRESS,
            Config.PORT,
            category,
            navigation,
            setWords)
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
                <Animated.Image
                    style={{transform: [{rotate: spin}], height: 120, width: 120}}
                    source={require('../../resources/images/sandtimer3.png')} />
            </View>
        </View>
    )
}
export default LoadingScreen
