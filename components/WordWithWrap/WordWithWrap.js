import React from 'react';
import {View, Text} from "react-native";
import {WordWithWrapStyles} from "./WordWithWrapStyles";
import Fonts from "../../resources/Fonts";

const WordWithWrap = ({ word }) => {
    return (
        <View style={WordWithWrapStyles.wordView}>
            <Text style={[WordWithWrapStyles.title, {fontSize: Fonts.H1_FONT_SIZE}]}
                  adjustsFontSizeToFit={true}
                  numberOfLines={3}
                  minimumFontScale={0.5}
            >
                {word}
            </Text>
        </View>
    )
}

export default WordWithWrap