import RouteNames from "../../resources/RouteNames";
import {Animated, Easing} from "react-native";

export const getWordsByCategory = (category, navigation, setWords, setFadeOut, fadeOut) => {
    fetch(`https://us-central1-describetheword-808.cloudfunctions.net/app/words/${category.toLowerCase()}`)
        .then(response => {
            if (response.ok)
                return response.json()
            throw response;
        })
        .then(async words => {
            setWords(words.data)
            setFadeOut(!fadeOut)
            navigation.navigate(RouteNames.PLAY_SCREEN)
        })
        .catch(error => {
            console.error("Error fetching words data: ", error)
        })
}

export const toggleVisible = (visible, setVisible) => {
    setVisible(!visible)
}

export const getSpin = () => {
    const spinValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 2500,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start();

    return spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
}