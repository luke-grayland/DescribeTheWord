import Config from "../../config/config";
import RouteNames from "../../resources/RouteNames";
import AppConstants from "../../resources/AppConstants";
import {Animated, Easing} from "react-native";

export const getWordsByCategory = (
    ipAddress,
    port,
    category,
    navigation,
    setWords) => {
    fetch(`${Config.IP_ADDRESS}:${Config.PORT}/words/${category}`)
        .then(response => {
            if (response.ok)
                return response.json()
            throw response;
        })
        .then(async words => {
            setWords(words.data)
            setTimeout( () => {
                navigation.navigate(RouteNames.PLAY_SCREEN)
            }, AppConstants.LOADING_SCREEN_TIME)
        })
        .catch(error => {
            console.error("Error fetching words data: ", error)
        })
}

export const createSpin = (spinValue) => {
    return spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
}