import React from 'react';
import {View, TouchableOpacity, Image} from "react-native";
import {GenericStyles} from "../../resources/GenericStyles";
import RouteNames from "../../resources/RouteNames";
import {ExitButtonStyles} from "./ExitButtonStyles";

const ExitButton = ({ navigation }) => {
    const click = () => {
        navigation.navigate(RouteNames.HOME_SCREEN)
    }

    return (
        <View>
            <TouchableOpacity
                style={{
                    ...ExitButtonStyles.circle,
                    ...GenericStyles.shadow
                }}
                onPress={click}>
                <Image source={require("../../resources/images/exit_icon.png")}
                       style={ExitButtonStyles.exitIcon}
                ></Image>
            </TouchableOpacity>
        </View>
    )
}

export default ExitButton