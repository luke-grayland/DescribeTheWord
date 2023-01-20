import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";
import AppConstants from "../../resources/AppConstants";

export const ExitButtonStyles = StyleSheet.create({
    circle: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: Colours.WHITE,
        borderStyle: "solid",
        borderWidth: AppConstants.BORDER_WIDTH_SMALL,
        borderColor: 'white',
    },
    exitIcon: {
        height: '100%',
        width: '100%',
        opacity: 1
    }
})