import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";

export const PlayScreenStyles = StyleSheet.create({
    playScreenView: {
        flex: 1,
        backgroundColor: Colours.BACKGROUND_PRIMARY,
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
    },
    score: {
        textAlign: 'center',
        width: '25%',
    },
    word: {
        textAlign: 'center',
    },
    timer: {
        textAlign: 'center',
        width: '50%'
    }
})