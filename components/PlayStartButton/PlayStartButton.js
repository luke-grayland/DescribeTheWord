import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import {PlayStartButtonStyles} from "../../resources/styles/components/PlayStartButtonStyles";

const PlayStartButton = ({ navigation, label, target }) => {

    const handleStartButton = () => {
        navigation.navigate(target)
    }

    return (
        <View>
            <TouchableOpacity style={PlayStartButtonStyles.button} onPress={handleStartButton}>
                <Text style={PlayStartButtonStyles.text}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default PlayStartButton

