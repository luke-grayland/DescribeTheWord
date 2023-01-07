import RouteNames from "../../resources/RouteNames";
import AppConstants from "../../resources/AppConstants";

export const getWordsByCategory = (category, navigation, setWords) => {
    fetch(`https://us-central1-describetheword-808.cloudfunctions.net/app/words/${category.toLowerCase()}`)
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