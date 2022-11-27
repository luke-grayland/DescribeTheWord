import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";

export const HomeScreenStyles = StyleSheet.create({
    homeScreenView: {
        flex: 1,
        backgroundColor: Colours.ORANGE,
    },
    controlsView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '90%',
        resizeMode: 'contain',
        justifyContent: 'center'
    }

})

