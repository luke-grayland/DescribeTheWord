import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";

export const LoadingScreenStyles = StyleSheet.create({
    loadingScreenView: {
        flex: 1,
        backgroundColor: Colours.PINK,
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timer: {
        height: 120,
        width: 120,
    }
})