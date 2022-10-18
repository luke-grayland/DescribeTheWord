import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";

const PlayScreen = ({ navigation }) => {
    return (
        <View>
            <Title title={"Play"}/>
            <PlayStartButton label={"Temp - press for results"} navigation={navigation} target={"Results"}/>
        </View>
    )
}
export default PlayScreen

