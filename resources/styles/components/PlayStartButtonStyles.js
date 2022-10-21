import {StyleSheet} from "react-native";
import Fonts from "../../Fonts";
import Colours from "../../Colours";

export const PlayStartButtonStyles = StyleSheet.create({
    button: {
        height: 50,
        width: 150,
        backgroundColor: Colours.PLAY_BUTTON,
        justifyContent: 'space-evenly',
        alignContent: 'center',
        margin: 20,
        borderRadius: 7,
        flexDirection: 'row',


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