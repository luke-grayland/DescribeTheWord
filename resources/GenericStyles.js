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
        marginTop: '5%',
        marginBottom: '5%',
        width: '80%',
        height: '20%',
        borderRadius: AppConstants.BORDER_RADIUS_LARGE,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

})
