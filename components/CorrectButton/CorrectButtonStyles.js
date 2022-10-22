import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";

export const CorrectButtonStyles = StyleSheet.create({
    button: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: Colours.PLAY_BUTTON,
        justifyContent: 'center',
    },
    icon: {
        height: 80,
        width: 80,
        alignSelf: 'center',

    }

})