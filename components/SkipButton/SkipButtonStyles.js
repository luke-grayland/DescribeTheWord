import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";

export const SkipButtonStyles = StyleSheet.create({
    button: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: Colours.TEXT,
        justifyContent: 'center'
    },
    icon: {
        height: 80,
        width: 80,
        alignSelf: 'center'
    }
})