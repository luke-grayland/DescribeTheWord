import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";
import AppConstants from "../../resources/AppConstants";

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
        borderRadius: AppConstants.BORDER_RADIUS_LARGE
    },
    subContent: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    pointsContent: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: '5%',
        marginBottom: '5%',
    },
    controls: {
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: "space-evenly"
    },
    pointsView: {
        backgroundColor: Colours.PINK,
        borderStyle: 'solid',
        borderWidth: AppConstants.BORDER_WIDTH_LARGE,
        borderColor: Colours.WHITE
    }
})