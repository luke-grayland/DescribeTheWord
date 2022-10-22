import React from 'react';
import {View, Text, Image} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import {InfoScreenStyles} from "./InfoScreenStyles";
import Fonts from "../../resources/Fonts";
import {InfoCircleStyles} from "../../components/InfoCircle/InfoCircleStyles";
import Strings from "../../resources/Strings";
import {GenericStyles} from "../../resources/GenericStyles";

const InfoScreen = () => {
    return (
        <View style={InfoScreenStyles.infoScreenView}>
            <View style={InfoScreenStyles.titleView}>
                <Image source={require('../../resources/images/info_icon.png')} style={InfoCircleStyles.infoIcon}/>
                <Title title={Strings.INFO_SCREEN_HEADER} fontSize={Fonts.H1_FONT_SIZE}/>
            </View>
            <View style={{...InfoScreenStyles.contentView, ...GenericStyles.shadow}}>
                <Text style={InfoScreenStyles.text}>Rule 1</Text>
                <Text style={InfoScreenStyles.text}>Rule 2</Text>
                <Text style={InfoScreenStyles.text}>Rule 3</Text>
                <Text style={InfoScreenStyles.text}>Rule 4</Text>
                <Text style={InfoScreenStyles.text}>Rule 5</Text>
            </View>
        </View>
    )
}
export default InfoScreen

