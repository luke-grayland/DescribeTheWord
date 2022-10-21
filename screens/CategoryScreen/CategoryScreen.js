import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";
import {HomeScreenStyles} from "../../resources/styles/screens/HomeScreenStyles";
import Strings from "../../resources/Strings";
import Fonts from "../../resources/Fonts";
import {TitleStyles} from "../../resources/styles/components/TitleStyles";
import {CategoryScreenStyles} from "../../resources/styles/screens/CategoryScreenStyles";
import {GenericStyles} from "../../resources/styles/components/GenericStyles";

const CategoryScreen = ({navigation}) => {
    return (
        <View style={CategoryScreenStyles.categoryScreenView}>
            <View style={{...TitleStyles.titleView, ...CategoryScreenStyles.categoryScreenSection}}>
                <Title title={Strings.CATEGORY_SCREEN_HEADER} fontSize={Fonts.H2_FONT_SIZE} style={TitleStyles.title}/>
            </View>
            <View style={{
                ...CategoryScreenStyles.categoryScreenSection,
                ...CategoryScreenStyles.categoryWordResult,
                ...GenericStyles.shadow
            }}>
                <Text style={CategoryScreenStyles.text}>Word</Text>
            </View>
            <View style={CategoryScreenStyles.categoryScreenSection}>
                <PlayStartButton label={"Start"} navigation={navigation} target={RouteNames.LOADING_SCREEN} style={CategoryScreenStyles.categoryScreenSection}/>
            </View>
        </View>
    )
}
export default CategoryScreen

