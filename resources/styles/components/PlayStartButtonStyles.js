import {StyleSheet} from "react-native";
import Fonts from "../../Fonts";
import Colours from "../../Colours";

export const PlayStartButtonStyles = StyleSheet.create({
    button: {
        height: 50,
        width: 150,
        backgroundColor: Colours.PLAY_BUTTON,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 7,


    },
    text: {
        fontSize: Fonts.H2_FONT_SIZE,
        textAlign: 'center'
    }
})