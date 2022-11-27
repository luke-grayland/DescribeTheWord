import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";
import AppConstants from "../../resources/AppConstants";

export const InfoScreenStyles = StyleSheet.create({
    infoScreenView: {
        flex: 1,
        backgroundColor: Colours.ORANGE,
        alignItems: 'center',
        justifyContent: "center"

    },
    titleView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10%'

    },
    contentView: {
        flex: 3,
        backgroundColor: Colours.YELLOW,
        width: '80%',
        margin: '10%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10%',
        borderRadius: AppConstants.BORDER_RADIUS_LARGE

    },
    text: {
        fontSize: 20,
        margin: 5,
    }
})