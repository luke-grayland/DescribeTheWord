import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {TitleStyles} from "./TitleStyles";

const Title = ({title, fontSize}) => {

    return (
        <View style={TitleStyles.titleView}>
            <Text style={{...TitleStyles.title, ...fontSize={fontSize}}}>{title}</Text>
        </View>
    )
}

export default Title

