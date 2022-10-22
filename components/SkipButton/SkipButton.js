import React from 'react';
import {View, TouchableOpacity, Image} from "react-native";
import {GenericStyles} from "../../resources/styles/components/GenericStyles";
import {SkipButtonStyles} from "../../resources/styles/components/SkipButtonStyles";

const SkipButton = () => {

    const click = () => {
        console.log('Correct')
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

