import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";

export const HomeScreenStyles = StyleSheet.create({
    homeScreenView: {
        flex: 1,
        backgroundColor: Colours.PINK,
    },
    controlsView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '15%'
    },
    logo: {
        width: '90%',
        resizeMode: 'contain',
        justifyContent: 'center'
    },
    logoView: {
        flex: 1,
        paddingTop: '15%'
    }

})

