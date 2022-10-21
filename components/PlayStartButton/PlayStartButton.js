import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Image} from "react-native";
import {PlayStartButtonStyles} from "../../resources/styles/components/PlayStartButtonStyles";
import {GenericStyles} from "../../resources/styles/components/GenericStyles";

const PlayStartButton = ({ navigation, label, target }) => {

    const handleStartButton = () => {
        navigation.navigate(target)
    }

    return (
        <View>
            <TouchableOpacity style={{...PlayStartButtonStyles.button, ...GenericStyles.shadow}} onPress={handleStartButton}>
                <Text style={PlayStartButtonStyles.text}>{label}</Text>
                <Image source={require('../../resources/images/play_icon.png')} style={PlayStartButtonStyles.playIcon}/>
            </TouchableOpacity>
        </View>
    )
}


export default PlayStartButton

