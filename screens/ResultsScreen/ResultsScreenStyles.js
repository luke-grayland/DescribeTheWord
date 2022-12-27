import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";
import AppConstants from "../../resources/AppConstants";
import Fonts from "../../resources/Fonts";

export const ResultsScreenStyles = StyleSheet.create({
    resultsScreenView: {
        flex: 1,
        backgroundColor: Colours.PINK,
    },
    content: {
        marginTop: '20%',
        marginBottom: '10%',
        width: '80%',
        flex: 1,
        backgroundColor: Colours.LIGHT_BLUE,
        alignSelf: 'center',
        borderRadius: AppConstants.BORDER_RADIUS_LARGE,
        borderStyle: 'solid',
        borderColor: Colours.WHITE,
        borderWidth: AppConstants.BORDER_WIDTH_LARGE
    },
    pointsContent: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingTop: '5%',
        paddingBottom: '5%',
    },
    controls: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: "space-evenly",
    },
    pointsView: {
        backgroundColor: Colours.PINK,
        borderStyle: 'solid',
        borderWidth: AppConstants.BORDER_WIDTH_LARGE,
        borderColor: Colours.WHITE,
        flex: 1,
        minHeight: '5%'
    },
    nextRoundText: {
        color: Colours.WHITE,
        textAlign: 'center',
        fontSize: Fonts.H3_FONT_SIZE,
        fontWeight: 'bold',
    }
})