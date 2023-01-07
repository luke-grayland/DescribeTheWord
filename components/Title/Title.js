import React from 'react';
import {View, Text} from "react-native";
import {TitleStyles} from "./TitleStyles";

const Title = ({title, fontSize}) => {
    return (
        <View style={TitleStyles.titleView}>
            <Text style={{
                ...TitleStyles.title,
                ...fontSize={fontSize}
            }}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}
            >
                {title}
            </Text>
        </View>
    )
}

export default Title