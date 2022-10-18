import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import CircleButton from "../../components/CircleButton/CircleButton";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Title title={"Guess the Word!"}/>
            <PlayStartButton label={"Play"} navigation={navigation} target={"Category"}/>
            <CircleButton label={"?"} navigation={navigation}/>
        </View>
    )
}
export default HomeScreen

