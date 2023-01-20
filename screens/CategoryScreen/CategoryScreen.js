import React, {useEffect} from 'react';
import {View} from "react-native";
import Title from '../../components/Title/Title'
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";
import AppConstants from "../../resources/AppConstants";
import Fonts from "../../resources/Fonts";
import {TitleStyles} from "../../components/Title/TitleStyles";
import {CategoryScreenStyles} from "./CategoryScreenStyles";
import {GenericStyles} from "../../resources/GenericStyles";
import {useAllCategories, useCategory, useSetCategory} from "../../context/CategoryContext";
import {useIsFocused} from "@react-navigation/native";
import {setRandomCategory} from "./CategoryHelper";
import {useAuthToken} from "../../context/AuthContext";

const CategoryScreen = ({ navigation }) => {
    const category = useCategory()
    const updateCategory = useSetCategory()
    const allCategories = useAllCategories()
    const isFocused = useIsFocused()

    useEffect( () => {
        if (isFocused)
            setRandomCategory(allCategories, updateCategory)
    }, [isFocused])

    return (
        <View style={CategoryScreenStyles.categoryScreenView}>
            <View style={{
                ...TitleStyles.titleView,
                ...CategoryScreenStyles.categoryScreenTop
            }}>
                <Title title={AppConstants.CATEGORY_SCREEN_HEADER}
                       fontSize={Fonts.H2_FONT_SIZE}>
                </Title>
            </View>
            <View style={{
                ...CategoryScreenStyles.categoryScreenMiddle,
                ...GenericStyles.shadow
            }}>
                <Title title={category} fontSize={Fonts.H1_FONT_SIZE}></Title>
            </View>
            <View style={CategoryScreenStyles.categoryScreenBottom}>
                <PlayStartButton label={"Start"}
                                 navigation={navigation}
                                 target={RouteNames.LOADING_SCREEN}
                                 />
            </View>
        </View>
    )
}
export default CategoryScreen

