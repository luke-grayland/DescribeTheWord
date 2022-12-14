import React from 'react';
import {View, TouchableOpacity, Image, Vibration} from "react-native";
import {CorrectButtonStyles} from "./CorrectButtonStyles";
import {GenericStyles} from "../../resources/GenericStyles";
import AppConstants from "../../resources/AppConstants";
import {useSetScore} from "../../context/ScoreContext";

const CorrectButton = ({ nextWord, catLength, allWords, setWord }) => {
    const updateScore = useSetScore()

    const handlePress = () => {
        Vibration.vibrate(AppConstants.VIBRATION_TIME)
        updateScore()
        nextWord(catLength, allWords, setWord)
    }

    return (
        <View>
            <TouchableOpacity
                style={{...CorrectButtonStyles.button , ...GenericStyles.shadow}}
                onPress={handlePress}
            >
                <Image source={require('../../resources/images/tickIcon5.png')}
                       style={CorrectButtonStyles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default CorrectButton