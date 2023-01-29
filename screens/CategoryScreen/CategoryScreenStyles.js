import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";
import Fonts from "../../resources/Fonts";
import AppConstants from "../../resources/AppConstants";

export const CategoryScreenStyles = StyleSheet.create({
    categoryScreenView: {
        flex: 1,
        backgroundColor: Colours.PINK,
        justifyContent: 'center',
    },
    categoryScreenTop: {
        flexDirection: 'column',
        marginTop: '10%',
    },
    categoryScreenBottom : {
        height: '33%',
        justifyContent: 'center',
    },
    categoryScreenMiddle: {
        backgroundColor: Colours.LIGHT_BLUE,
        margin: 20,
        borderRadius: AppConstants.BORDER_RADIUS_SMALL,
        borderWidth: AppConstants.BORDER_WIDTH_LARGE,
        borderColor: Colours.WHITE,
        borderStyle: "solid",
        minHeight: '30%',
        justifyContent: 'center',
        maxWidth: 650,
        alignSelf: 'center',
    },
    text: {
        fontSize: Fonts.H2_FONT_SIZE,
        color: Colours.WHITE,
        fontWeight: 'bold',
    }
})

