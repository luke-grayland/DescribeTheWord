import React from 'react';
import {View, TouchableOpacity, Image} from "react-native";
import {GenericStyles} from "../../resources/GenericStyles";
import {PlayAgainButtonStyles} from "./PlayAgainButtonStyles";

const PlayAgainButton = ({ navigation, target }) => {
    const click = () => {
        navigation.navigate(target)
    }

    return (
        <View>
            <TouchableOpacity
                style={{...PlayAgainButtonStyles.button , ...GenericStyles.shadow}}
                onPress={click}
            >
                <Image source={require('../../resources/images/replayIcon2.png')}
                       style={PlayAgainButtonStyles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default PlayAgainButton