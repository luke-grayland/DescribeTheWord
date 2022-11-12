import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Vibration} from "react-native";
import {CorrectButtonStyles} from "./CorrectButtonStyles";
import {GenericStyles} from "../../resources/GenericStyles";
import AppConstants from "../../resources/AppConstants";
import {useSetScore} from "../../context/ScoreContext";
import {useCategory} from "../../context/CategoryContext";
import {useWord} from "../../context/WordsContext";

const CorrectButton = () => {

    const nextWord = useWord()
    const category = useCategory()

    const updateScore = useSetScore()

    const handlePress = () => {
        Vibration.vibrate(AppConstants.VIBRATION_TIME)
        updateScore()
        nextWord(category)
    }

    return (
        <View>
            <TouchableOpacity
                style={{...CorrectButtonStyles.button , ...GenericStyles.shadow}}
                onPress={handlePress}
            >
                <Image source={require('../../resources/images/tick_icon_2.png')} style={CorrectButtonStyles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default CorrectButton

