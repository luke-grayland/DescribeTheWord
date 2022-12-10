import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";
import AppConstants from "../../resources/AppConstants";

export const HomeButtonStyles = StyleSheet.create({
    button: {
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: Colours.LIGHT_BLUE,
        justifyContent: 'center',
        alignSelf: 'center',
        borderStyle: 'solid',
        borderColor: Colours.WHITE,
        borderWidth: AppConstants.BORDER_WIDTH_SMALL

    },
    icon: {
        height: '70%',
        width: '70%',
        alignSelf: 'center',
    }

})