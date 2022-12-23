import React from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";
import {PlayStartButtonStyles} from "./PlayStartButtonStyles";
import {GenericStyles} from "../../resources/GenericStyles";
import {useFonts} from "expo-font";

const PlayStartButton = ({ navigation, label, target }) => {
    const handleStartButton = () => {
        navigation.navigate(target)
    }

    // const [fontsLoaded] = useFonts({
    //     'Raleway': require('../../resources/fonts/Raleway_Variable.ttf'),
    // });

    return (
        <View>
            <TouchableOpacity style={{
                ...PlayStartButtonStyles.button,
                ...GenericStyles.shadow}} onPress={handleStartButton}>
                {/*<Text style={[PlayStartButtonStyles.text, {fontFamily: fontsLoaded}]}>{label}</Text>*/}
                <Text style={PlayStartButtonStyles.text}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PlayStartButton