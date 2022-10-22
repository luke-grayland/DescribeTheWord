import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";

export const HomeButtonStyles = StyleSheet.create({
    button: {
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: Colours.PLAY_BUTTON,
        justifyContent: 'center',
        alignSelf: 'center'

    },
    icon: {
        height: '70%',
        width: '70%',
        alignSelf: 'center',
    }

})