import Config from "../../config/config";
import RouteNames from "../../resources/RouteNames";
import AppConstants from "../../resources/AppConstants";

export const getWordsByCategory = (
    category,
    navigation,
    setWords) => {
    fetch(`${Config.API_ADDRESS}/words/${category}`)
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

export const toggleVisible = (visible, setVisible) => {
    setVisible(!visible)
}