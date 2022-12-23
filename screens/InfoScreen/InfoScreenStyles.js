import {StyleSheet} from "react-native";
import Colours from "../../resources/Colours";
import AppConstants from "../../resources/AppConstants";

export const InfoScreenStyles = StyleSheet.create({
    infoScreenView: {
        backgroundColor: Colours.PINK,
        alignItems: 'center',
        justifyContent: "center",
        height: '100%'
    },
    titleView: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentView: {
        flex: 4,
        backgroundColor: Colours.LIGHT_BLUE,
        width: '80%',
        margin: '2%',
        marginBottom: '10%',
        paddingBottom: '50%',
        flexDirection: 'column',
        padding: '8%',
        borderRadius: AppConstants.BORDER_RADIUS_LARGE,
        borderStyle: "solid",
        borderColor: Colours.WHITE,
        borderWidth: AppConstants.BORDER_WIDTH_LARGE,
    },
    text: {
        fontSize: 15,
        textAlign: "center",
        color: Colours.WHITE
    },
    exitButtonView: {
        flex: 0.2,
        width: '80%',
        justifyContent: "flex-end",
        alignItems: 'flex-start',
        marginTop: '15%',
    },
})