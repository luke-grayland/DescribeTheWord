import {StyleSheet} from "react-native";
import Fonts from "../../Fonts";
import Colours from "../../Colours";

export const InfoCircleStyles = StyleSheet.create({
    circle: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        margin: 10
    },
    text: {
        fontSize: Fonts.H3_FONT_SIZE,
    },
    infoIcon: {
        height: 45,
        width: 45
    }
})