import React from 'react';
import {View, Text} from "react-native";
import {WordStyles} from "./WordStyles";
import Fonts from "../../resources/Fonts";

const Word = ({ word }) => {
    return (
        <View style={WordStyles.wordView}>
            <Text style={[WordStyles.title, {fontSize: Fonts.H1_FONT_SIZE}]}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}
                  minimumFontScale={0.5}
            >
                {word}
            </Text>
        </View>
    )
}

export default Word