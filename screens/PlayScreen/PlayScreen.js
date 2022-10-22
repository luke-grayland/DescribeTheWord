import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";
import {PlayScreenStyles} from "../../resources/styles/screens/PlayScreenStyles"
import CorrectButton from "../../components/CorrectButton/CorrectButton";
import SkipButton from "../../components/SkipButton/SkipButton";

const PlayScreen = ({ navigation }) => {
    return (
        <View style={PlayScreenStyles.playScreenView}>
            <View style={PlayScreenStyles.content}>
                <Text>Score</Text>
                <Text>Timer</Text>
                <Text>Word</Text>
            </View>
            <View style={PlayScreenStyles.controls}>
                <CorrectButton/>
                <SkipButton/>
            </View>
            <PlayStartButton label={"Temp - press for results"} navigation={navigation} target={RouteNames.RESULTS_SCREEN}/>
        </View>
    )
}
export default PlayScreen

