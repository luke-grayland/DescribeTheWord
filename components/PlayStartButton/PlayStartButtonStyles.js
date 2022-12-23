import {StyleSheet} from "react-native";
import Fonts from "../../resources/Fonts";
import Colours from "../../resources/Colours";
import AppConstants from "../../resources/AppConstants";

export const PlayStartButtonStyles = StyleSheet.create({

    button: {
        height: 60,
        width: 190,
        backgroundColor: Colours.LIGHT_BLUE,
        justifyContent: 'space-evenly',
        alignContent: 'center',
        margin: 20,
        borderRadius: AppConstants.BORDER_RADIUS_LARGE,
        flexDirection: 'row',
        alignSelf: 'center',
        borderStyle: 'solid',
        borderWidth: AppConstants.BORDER_WIDTH_SMALL,
        borderColor: Colours.WHITE,

    },
    text: {
        fontSize: Fonts.H2_FONT_SIZE,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: "bold",
        color: Colours.WHITE
    },
})