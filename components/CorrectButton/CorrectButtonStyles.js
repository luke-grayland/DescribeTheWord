import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";
import AppConstants from "../../resources/AppConstants";

export const CorrectButtonStyles = StyleSheet.create({
    button: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: Colours.LIGHT_BLUE,
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: AppConstants.BORDER_WIDTH_SMALL,
        borderColor: Colours.WHITE,
        margin: '2%'
    },
    icon: {
        height: '80%',
        width: '80%',
        alignSelf: 'center',
    }
})