import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Image} from "react-native";
import {InfoCircleStyles} from "./InfoCircleStyles";
import {GenericStyles} from "../../resources/GenericStyles";

const InfoCircle = ({ navigation }) => {

    const click = () => {
        navigation.navigate("Info")
}

    return (
        <View>
            <TouchableOpacity
                style={{...InfoCircleStyles.circle, ...GenericStyles.shadow}}
                onPress={click}
            >
                <Image source={require('../../resources/images/info_icon.png')} style={InfoCircleStyles.infoIcon}/>
            </TouchableOpacity>
        </View>
    )
}

export default InfoCircle

