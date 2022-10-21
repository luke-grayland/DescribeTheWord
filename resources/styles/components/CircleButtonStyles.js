import {StyleSheet} from "react-native";
import Fonts from "../../Fonts";
import Colours from "../../Colours";

export const CircleButtonStyles = StyleSheet.create({
    circle: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: Colours.INFO_BUTTON,
    },
    text: {
        fontSize: Fonts.H3_FONT_SIZE,
    }
})