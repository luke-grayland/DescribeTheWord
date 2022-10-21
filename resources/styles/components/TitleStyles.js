import {StyleSheet} from "react-native";
import Fonts from "../../Fonts";
import Colours from "../../Colours";

export const TitleStyles = StyleSheet.create({

    titleView: {
        width: '60%',
        alignItems: 'center',


    },
    title: {
        fontFamily: 'notoserif',
        fontSize: Fonts.H1_FONT_SIZE,
        color: 'white'
    }
});
