import {StyleSheet} from "react-native";
import Fonts from "../../resources/Fonts";
import Colours from "../../resources/Colours";

export const TitleStyles = StyleSheet.create({
    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        minHeight: '25%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: Fonts.H1_FONT_SIZE,
        color: 'white',
        textAlign: 'center',
        width: '100%',
    }
});
