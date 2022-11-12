import {StyleSheet} from "react-native";
import Colours from "./Colours";
import AppConstants from "./AppConstants";

export const GenericStyles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    contentBox: {
        marginTop: '10%',
        marginBottom: '10%',
        width: '80%',
        height: '20%',
        borderRadius: AppConstants.BORDER_RADIUS_LARGE,
        margin: 10,
        backgroundColor: Colours.TEXT,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },

})
