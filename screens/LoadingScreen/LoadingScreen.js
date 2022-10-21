import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";
import {LoadingScreenStyles} from "../../resources/styles/screens/LoadingScreenStyles";
import StringLiterals from "../../resources/Strings";
import Fonts from "../../resources/Fonts";
import {TitleStyles} from "../../resources/styles/components/TitleStyles";

const LoadingScreen = ({ navigation }) => {
    return (
        <View style={LoadingScreenStyles.loadingScreenView}>
            <View style={TitleStyles.titleView}>
                <Title title={StringLiterals.GAME_TITLE} fontSize={Fonts.H1_FONT_SIZE} style={TitleStyles.title}/>
            </View>
            <View style={LoadingScreenStyles.content}>
                <Image source={require('../../resources/images/sand_timer.png')} style={LoadingScreenStyles.timer}/>
                <PlayStartButton label={"Temp"} navigation={navigation} target={RouteNames.PLAY_SCREEN}/>
            </View>
        </View>
    )
}
export default LoadingScreen

