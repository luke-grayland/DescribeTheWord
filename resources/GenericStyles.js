import {StyleSheet} from "react-native";
import Colours from "./Colours";

export const GenericStyles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    contentBox: {
        height: '15%',
        width: '60%',
        borderRadius: 8,
        margin: 10,
        backgroundColor: Colours.PLAY_BUTTON,
        justifyContent: 'center',
    },
})
