import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";

const LoadingScreen = ({ navigation }) => {
    return (
        <View>
            <Title title={"Loading"}/>
            <PlayStartButton label={"Temp - press for play"} navigation={navigation} target={"Play"}/>
        </View>
    )
}
export default LoadingScreen

