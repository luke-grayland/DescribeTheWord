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
        alignItems: 'center',
        height: '50%',
        flex: 1,
        marginBottom: '30%'
    },
    titleView: {
        height: '50%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    timer: {
        height: 120,
        width: 120,
    }
})