import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";
import AppConstants from "../../resources/AppConstants";

export const InfoScreenStyles = StyleSheet.create({
    infoScreenView: {
        flex: 1,
        backgroundColor: Colours.PINK,
        alignItems: 'center',
        justifyContent: "center",
    },
    titleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '15%',
    },
    contentView: {
        flex: 3,
        backgroundColor: Colours.LIGHT_BLUE,
        width: '80%',
        margin: '10%',
        marginBottom: '20%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10%',
        borderRadius: AppConstants.BORDER_RADIUS_LARGE,
        borderStyle: "solid",
        borderColor: Colours.WHITE,
        borderWidth: AppConstants.BORDER_WIDTH_LARGE

    },
    text: {
        fontSize: 20,
        margin: 5,
    }
})