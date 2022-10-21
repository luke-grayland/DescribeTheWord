import {StyleSheet} from "react-native";
import Fonts from "../../Fonts";
import Colours from "../../Colours";

export const TitleStyles = StyleSheet.create({

    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        height: '50%',

    },
    title: {
        fontFamily: 'notoserif',
        fontSize: Fonts.H1_FONT_SIZE,
        color: 'white',
        textAlign: 'center',

    }
});
