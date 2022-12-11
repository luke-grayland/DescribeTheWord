import React from 'react';
import {View, TouchableOpacity, Image} from "react-native";
import {GenericStyles} from "../../resources/GenericStyles";
import {HomeButtonStyles} from "./HomeButtonStyles";

const HomeButton = ({ navigation, target}) => {
    const click = () => {
        navigation.navigate(target)
    }

    return (
        <View>
            <TouchableOpacity
                style={{...HomeButtonStyles.button , ...GenericStyles.shadow}}
                onPress={click}
            >
                <Image source={require('../../resources/images/home_icon.png')}
                       style={HomeButtonStyles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default HomeButton

