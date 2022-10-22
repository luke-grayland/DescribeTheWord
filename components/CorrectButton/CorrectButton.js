import React from 'react';
import {View, TouchableOpacity, Image, Vibration} from "react-native";
import {CorrectButtonStyles} from "./CorrectButtonStyles";
import {GenericStyles} from "../../resources/GenericStyles";
import AppConstants from "../../resources/AppConstants";

const CorrectButton = ({ scoreCounter, setScoreCounter }) => {

    const click = () => {
        Vibration.vibrate(AppConstants.VIBRATION_TIME)
        setScoreCounter(scoreCounter + 1)
    }

    return (
        <View>
            <TouchableOpacity
                style={{...CorrectButtonStyles.button , ...GenericStyles.shadow}}
                onPress={click}
            >
                <Image source={require('../../resources/images/tick_icon_2.png')} style={CorrectButtonStyles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default CorrectButton

