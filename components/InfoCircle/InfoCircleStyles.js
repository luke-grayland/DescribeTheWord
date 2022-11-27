import {StyleSheet} from "react-native";
import Fonts from "../../resources/Fonts";
import Colours from "../../resources/Colours";
import AppConstants from "../../resources/AppConstants";

export const InfoCircleStyles = StyleSheet.create({
    circle: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        margin: 10,
        backgroundColor: Colours.YELLOW,
        borderStyle: "solid",
        borderWidth: AppConstants.BORDER_WIDTH_SMALL,
        borderColor: 'white'

    },
    text: {
        fontSize: Fonts.H2_FONT_SIZE,
    },
    infoIcon: {
        height: '60%',
        width: '60%',
        opacity: 1
    }
})