import React from 'react';
import {View, TouchableOpacity, Image} from "react-native";
import {InfoCircleStyles} from "./InfoCircleStyles";
import {GenericStyles} from "../../resources/GenericStyles";
import RouteNames from "../../resources/RouteNames";

const InfoCircle = ({ navigation }) => {
    const click = () => {
        navigation.navigate(RouteNames.INFO_SCREEN)
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