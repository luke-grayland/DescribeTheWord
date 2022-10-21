import {StyleSheet} from "react-native";
import Colours from "../../Colours";

export const InfoScreenStyles = StyleSheet.create({
    infoScreenView: {
        flex: 1,
        backgroundColor: Colours.BACKGROUND,
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
        backgroundColor: Colours.BACKGROUND_SECONDARY,
        width: '80%',
        margin: '10%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10%',
        borderRadius: 15

    },
    text: {
        fontSize: 20,
        margin: 5,
    }
})