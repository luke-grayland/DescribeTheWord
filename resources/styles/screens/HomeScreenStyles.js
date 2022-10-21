import {StyleSheet} from "react-native";
import Colours from "../../Colours";

export const HomeScreenStyles = StyleSheet.create({
    homeScreenView: {
        flex: 1,
        backgroundColor: Colours.BACKGROUND
    },
    titleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    controlsView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

