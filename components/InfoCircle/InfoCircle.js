import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Image} from "react-native";
import {InfoCircleStyles} from "./InfoCircleStyles";
import {GenericStyles} from "../../resources/GenericStyles";
import Title from "../Title/Title";
import AppConstants from "../../resources/AppConstants";
import Fonts from "../../resources/Fonts";

const InfoCircle = ({ navigation }) => {

    const click = () => {
        navigation.navigate("Info")
}

    return (
        <View>
            <TouchableOpacity
                style={{
                    ...InfoCircleStyles.circle,
                    ...GenericStyles.shadow
                    }}
                onPress={click}>
                <Image source={require("../../resources/images/infoIconWhite.png")}
                       style={InfoCircleStyles.infoIcon}
                ></Image>
            </TouchableOpacity>
        </View>
    )
}

export default InfoCircle

