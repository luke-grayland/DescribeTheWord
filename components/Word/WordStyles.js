import {StyleSheet} from "react-native";
import Fonts from "../../resources/Fonts";
import Colours from "../../resources/Colours";

export const WordStyles = StyleSheet.create({
    wordView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        minHeight: '25%',
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
});
