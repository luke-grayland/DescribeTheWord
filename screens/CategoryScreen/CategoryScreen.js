import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";

const CategoryScreen = ({navigation}) => {
    return (
        <View>
            <Title title={"Category"}/>
            <PlayStartButton label={"Start"} navigation={navigation} target={RouteNames.LOADING_SCREEN}/>
        </View>
    )
}
export default CategoryScreen

