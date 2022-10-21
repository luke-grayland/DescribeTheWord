import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import {CircleButtonStyles} from "../../resources/styles/components/CircleButtonStyles";

const CircleButton = ({ label, navigation }) => {

    const click = () => {
        console.log("Test")
        navigation.navigate("Info")
}

    return (
        <View>
            <TouchableOpacity
                style={CircleButtonStyles.circle}
                onPress={click}
            >
                <Text style={CircleButtonStyles.text}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CircleButton

