import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";
import Fonts from "../../resources/Fonts";
import AppConstants from "../../resources/AppConstants";

export const CategoryScreenStyles = StyleSheet.create({
    categoryScreenView: {
        flex: 1,
        backgroundColor: Colours.BACKGROUND_PRIMARY
    },
    categoryScreenSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryWordResult: {
        backgroundColor: Colours.BACKGROUND_SECONDARY,
        margin: 20,
        borderRadius: AppConstants.BORDER_RADIUS_SMALL
    },
    text: {
        fontSize: Fonts.H2_FONT_SIZE
    }

})

