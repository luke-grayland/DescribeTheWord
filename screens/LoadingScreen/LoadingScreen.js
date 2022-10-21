import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";

const LoadingScreen = ({ navigation }) => {
    return (
        <View>
            <Title title={"Loading"}/>
            <PlayStartButton label={"Temp - press for play"} navigation={navigation} target={RouteNames.PLAY_SCREEN}/>
        </View>
    )
}
export default LoadingScreen

