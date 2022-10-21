import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";

const PlayScreen = ({ navigation }) => {
    return (
        <View>
            <Title title={"Play"}/>
            <PlayStartButton label={"Temp - press for results"} navigation={navigation} target={RouteNames.RESULTS_SCREEN}/>
        </View>
    )
}
export default PlayScreen

