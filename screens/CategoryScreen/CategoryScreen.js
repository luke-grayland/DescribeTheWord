import React, {useEffect, useState} from 'react';
import {View, Text} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";
import AppConstants from "../../resources/AppConstants";
import Fonts from "../../resources/Fonts";
import {TitleStyles} from "../../components/Title/TitleStyles";
import {CategoryScreenStyles} from "./CategoryScreenStyles";
import {GenericStyles} from "../../resources/GenericStyles";

const CategoryScreen = ({navigation}) => {

    let allCategories = {
        1: 'Test Word 1',
        2: 'Test Word 2',
        3: 'Test Word 3'
    }//fetch categories from DB once integrated

    const [category, setCategory] = useState('Object')

    useEffect(() => {
        let randomIndex = Math.floor(Math.random() * Object.keys(allCategories).length) + 1;
        setCategory((allCategories)[randomIndex])
    }, [])






    return (
        <View style={CategoryScreenStyles.categoryScreenView}>
            <View style={{...TitleStyles.titleView, ...CategoryScreenStyles.categoryScreenSection}}>
                <Title title={AppConstants.CATEGORY_SCREEN_HEADER} fontSize={Fonts.H2_FONT_SIZE} style={TitleStyles.title}/>
            </View>
            <View style={{
                ...CategoryScreenStyles.categoryScreenSection,
                ...CategoryScreenStyles.categoryWordResult,
                ...GenericStyles.shadow
            }}>
                <Text style={CategoryScreenStyles.text}>{category}</Text>
            </View>
            <View style={CategoryScreenStyles.categoryScreenSection}>
                <PlayStartButton label={"Start"} navigation={navigation} target={RouteNames.LOADING_SCREEN} style={CategoryScreenStyles.categoryScreenSection}/>
            </View>
        </View>
    )
}
export default CategoryScreen

