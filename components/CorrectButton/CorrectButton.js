import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Image} from "react-native";
import {CorrectButtonStyles} from "../../resources/styles/components/CorrectButtonStyles";
import {GenericStyles} from "../../resources/styles/components/GenericStyles";

const CorrectButton = () => {

    const click = () => {
        console.log('Correct')
    }

    return (
        <View>
            <TouchableOpacity
                style={{...CorrectButtonStyles.button , ...GenericStyles.shadow}}
                onPress={click}
            >
                <Image source={require('../../resources/images/tick_icon.png')} style={CorrectButtonStyles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default CorrectButton

