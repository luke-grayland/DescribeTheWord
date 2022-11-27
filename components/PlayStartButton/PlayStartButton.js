import React from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";
import {PlayStartButtonStyles} from "./PlayStartButtonStyles";
import {GenericStyles} from "../../resources/GenericStyles";

const PlayStartButton = ({ navigation, label, target }) => {

    const handleStartButton = () => {
        navigation.navigate(target)
    }

    return (
        <View>
            <TouchableOpacity style={{
                ...PlayStartButtonStyles.button,
                ...GenericStyles.shadow}} onPress={handleStartButton}>
                <Text style={PlayStartButtonStyles.text}>{label}</Text>
                {/*<Image source={require('../../resources/images/play_icon.png')}*/}
                {/*       style={PlayStartButtonStyles.playIcon}/>*/}
            </TouchableOpacity>
        </View>
    )
}

export default PlayStartButton

