import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";

const ResultsScreen = ({ navigation }) => {
    return (
        <View>
            <Title title={"Results"}/>
            <PlayStartButton label={"Home"} navigation={navigation} target={"Home"}/>
            <PlayStartButton label={"Play Again"} navigation={navigation} target={"Category"}/>
        </View>
    )
}
export default ResultsScreen

