import React from 'react';
import {View, TouchableOpacity, Image, Vibration} from "react-native";
import {GenericStyles} from "../../resources/GenericStyles";
import {SkipButtonStyles} from "./SkipButtonStyles";
import AppConstants from "../../resources/AppConstants";

const SkipButton = () => {

    const click = () => {
        Vibration.vibrate(AppConstants.VIBRATION_TIME)
        console.log('Word Skipped')
    }

    return (
        <View>
            <TouchableOpacity
                style={{...SkipButtonStyles.button , ...GenericStyles.shadow}}
                onPress={click}
            >
                <Image source={require('../../resources/images/skip_icon.png')} style={SkipButtonStyles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default SkipButton

