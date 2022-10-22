import React from 'react';
import {View, TouchableOpacity, Image} from "react-native";
import {GenericStyles} from "../../resources/GenericStyles";
import RouteNames from "../../resources/RouteNames";
import {PlayAgainButtonStyles} from "./PlayAgainButtonStyles";


const PlayAgainButton = ({ navigation }) => {

    const click = () => {
        navigation.navigate(RouteNames.CATEGORY_SCREEN)
    }

    return (
        <View>
            <TouchableOpacity
                style={{...PlayAgainButtonStyles.button , ...GenericStyles.shadow}}
                onPress={click}
            >
                <Image source={require('../../resources/images/repeat_icon.png')} style={PlayAgainButtonStyles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default PlayAgainButton

