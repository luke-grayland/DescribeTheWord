import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";

export const SkipButtonStyles = StyleSheet.create({
    activeButton: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: Colours.TEXT,
        justifyContent: 'center'
    },
    disabledButton: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: Colours.DISABLED_BUTTON,
        justifyContent: 'center'
    },
    icon: {
        height: 80,
        width: 80,
        alignSelf: 'center'
    }
})