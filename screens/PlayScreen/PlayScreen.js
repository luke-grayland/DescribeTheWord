import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";
import {PlayScreenStyles} from "./PlayScreenStyles"
import CorrectButton from "../../components/CorrectButton/CorrectButton";
import SkipButton from "../../components/SkipButton/SkipButton";
import {GenericStyles} from "../../resources/GenericStyles";

const PlayScreen = ({ navigation }) => {
    return (
        <View style={PlayScreenStyles.playScreenView}>
            <View style={PlayScreenStyles.content}>
                <View style={{...GenericStyles.contentBox, ...GenericStyles.shadow}}>
                    <Text style={PlayScreenStyles.score}>Score</Text>
                </View>
                <View style={{...GenericStyles.contentBox, ...GenericStyles.shadow}}>
                    <Text style={PlayScreenStyles.timer}>Timer</Text>
                </View>
                <View style={{...GenericStyles.contentBox, ...GenericStyles.shadow}}>
                    <Text style={PlayScreenStyles.word}>Word</Text>
                </View>
            </View>
            <View style={PlayScreenStyles.controls}>
                <SkipButton/>
                <CorrectButton/>
            </View>
            <PlayStartButton label={"Temp"} navigation={navigation} target={RouteNames.RESULTS_SCREEN}/>
        </View>
    )
}
export default PlayScreen

