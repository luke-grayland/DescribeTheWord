import {StyleSheet} from "react-native";
import Fonts from "../../resources/Fonts";
import Colours from "../../resources/Colours";
import AppConstants from "../../resources/AppConstants";

export const PlayStartButtonStyles = StyleSheet.create({
    button: {
        height: 50,
        width: 150,
        backgroundColor: Colours.PLAY_BUTTON,
        justifyContent: 'space-evenly',
        alignContent: 'center',
        margin: 20,
        borderRadius: AppConstants.BORDER_RADIUS_SMALL,
        flexDirection: 'row',
        alignSelf: 'center'


    },
    text: {
        fontSize: Fonts.H2_FONT_SIZE,
        textAlign: 'center',
        alignSelf: 'center'
    },
    playIcon: {
        height: 25,
        width: 25,
        alignSelf: 'center'
    }
})