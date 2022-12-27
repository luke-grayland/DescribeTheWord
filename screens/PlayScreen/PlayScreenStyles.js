import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";
import AppConstants from "../../resources/AppConstants";

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
        margin: '10%',
    },
    content: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '5%',
        marginTop: '15%',

    },
    topOfContent: {
        justifyContent: 'center',
    },
    score: {
        textAlign: 'center',
    },
    word: {
        height: '50%',
        width: '95%',
        padding: '5%',
        backgroundColor: Colours.LIGHT_BLUE,
        borderStyle: 'solid',
        borderWidth: AppConstants.BORDER_WIDTH_LARGE,
        borderColor: Colours.WHITE,

    },
    category: {
        width: '50%'
    }
})