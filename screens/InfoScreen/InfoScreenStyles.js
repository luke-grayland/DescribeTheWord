import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";
import AppConstants from "../../resources/AppConstants";

export const InfoScreenStyles = StyleSheet.create({
    infoScreenView: {
        backgroundColor: Colours.PINK,
        alignItems: 'center',
        height: '100%',
    },
    titleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10%',
    },
    contentView: {
        flex: 4,
        backgroundColor: Colours.LIGHT_BLUE,
        width: '80%',
        marginBottom: '10%',
        flexDirection: 'column',
        padding: '8%',
        borderRadius: AppConstants.BORDER_RADIUS_LARGE,
        borderStyle: "solid",
        borderColor: Colours.WHITE,
        borderWidth: AppConstants.BORDER_WIDTH_LARGE,
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        color: Colours.WHITE
    },
    exitButtonView: {
        flex: 0.1,
        width: '80%',
        margin: '8%',
        justifyContent: 'flex-end',
    },
})