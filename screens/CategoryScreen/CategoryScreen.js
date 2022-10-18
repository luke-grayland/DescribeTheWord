import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";

const CategoryScreen = ({navigation}) => {
    return (
        <View>
            <Title title={"Category"}/>
            <PlayStartButton label={"Start"} navigation={navigation} target={"Loading"}/>
        </View>
    )
}
export default CategoryScreen

