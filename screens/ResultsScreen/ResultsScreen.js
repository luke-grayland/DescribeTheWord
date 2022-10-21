import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";

const ResultsScreen = ({ navigation }) => {
    return (
        <View>
            <Title title={"Results"}/>
            <PlayStartButton label={"Home"} navigation={navigation} target={RouteNames.HOME_SCREEN}/>
            <PlayStartButton label={"Play Again"} navigation={navigation} target={RouteNames.CATEGORY_SCREEN}/>
        </View>
    )
}
export default ResultsScreen

