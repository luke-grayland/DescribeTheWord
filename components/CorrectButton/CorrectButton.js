import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Image} from "react-native";
import {CorrectButtonStyles} from "./CorrectButtonStyles";
import {GenericStyles} from "../../resources/GenericStyles";

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
                <Image source={require('../../resources/images/tick_icon_2.png')} style={CorrectButtonStyles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default CorrectButton

