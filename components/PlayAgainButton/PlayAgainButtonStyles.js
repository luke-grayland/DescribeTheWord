import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";

export const PlayAgainButtonStyles = StyleSheet.create({
    button: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: Colours.LIGHT_BLUE,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    icon: {
        height: '70%',
        width: '70%',
        alignSelf: 'center',
    }

})