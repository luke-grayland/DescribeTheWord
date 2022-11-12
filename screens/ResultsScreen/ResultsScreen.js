import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";
import {ResultsScreenStyles} from "./ResultsScreenStyles";
import {GenericStyles} from "../../resources/GenericStyles";
import Fonts from "../../resources/Fonts";
import AppConstants from "../../resources/AppConstants";
import {TitleStyles} from "../../components/Title/TitleStyles";
import HomeButton from "../../components/HomeButton/HomeButton";
import PlayAgainButton from "../../components/PlayAgainButton/PlayAgainButton";
import {useScore} from "../../context/ScoreContext";

const ResultsScreen = ({ navigation, scoreCounter }) => {

    const score = useScore()

    return (
        <View style={ResultsScreenStyles.resultsScreenView}>
            <View style={{...ResultsScreenStyles.content, ...GenericStyles.shadow}}>
                <View style={{...TitleStyles.titleView, ...ResultsScreenStyles.subContent}}>
                    <Title title={AppConstants.RESULTS_TITLE} style={TitleStyles.title} fontSize={Fonts.H2_FONT_SIZE}/>
                </View>
                <View style={{
                    ...GenericStyles.contentBox,
                    ...ResultsScreenStyles.subContent,
                    ...GenericStyles.shadow
                }}>
                    <View style={{
                        ...TitleStyles.titleView,
                        ...ResultsScreenStyles.subContent,
                        ...ResultsScreenStyles.pointsContent
                    }}>
                        <Title title={score} style={TitleStyles.title} fontSize={Fonts.H1_FONT_SIZE}/>
                        <Title title={"Points"} style={TitleStyles.title} fontSize={Fonts.H2_FONT_SIZE}/>
                    </View>
                </View>
                <View style={{...ResultsScreenStyles.subContent, ...ResultsScreenStyles.controls}}>
                    <PlayAgainButton navigation={navigation}/>
                    <HomeButton navigation={navigation}/>
                </View>
            </View>
        </View>
    )
}
export default ResultsScreen

