import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";

export const PlayScreenStyles = StyleSheet.create({
    playScreenView: {
        flex: 1,
        backgroundColor: Colours.PINK,
    },
    controls: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    content: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '5%'
    },
    score: {
        textAlign: 'center',
        width: '50%',
        height: '30%'
    },
    word: {
        height: '50%',
        width: '90%',
        padding: '5%',
        backgroundColor: Colours.LIGHT_BLUE
    },
    timer: {
        width: '50%',
        height: '30%'
    },
    category: {
        width: '50%'
    }
})