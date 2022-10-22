import React from 'react';
import {View, TouchableOpacity, Image} from "react-native";
import {GenericStyles} from "../../resources/GenericStyles";
import {SkipButtonStyles} from "./SkipButtonStyles";

const SkipButton = () => {

    const click = () => {
        console.log('Skip')
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

