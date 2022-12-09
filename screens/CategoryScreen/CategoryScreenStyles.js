import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";
import Fonts from "../../resources/Fonts";
import AppConstants from "../../resources/AppConstants";

export const CategoryScreenStyles = StyleSheet.create({
    categoryScreenView: {
        flex: 1,
        backgroundColor: Colours.PINK
    },
    categoryScreenSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryWordResult: {
        backgroundColor: Colours.LIGHT_BLUE,
        margin: 20,
        borderRadius: AppConstants.BORDER_RADIUS_SMALL,
        borderWidth: AppConstants.BORDER_WIDTH_LARGE,
        borderColor: Colours.WHITE,
        borderStyle: "solid"
    },
    text: {
        fontSize: Fonts.H2_FONT_SIZE,
        color: Colours.WHITE,
        fontWeight: 'bold'
    },
    headerText: {
        color: Colours.GREEN,
    }

})

