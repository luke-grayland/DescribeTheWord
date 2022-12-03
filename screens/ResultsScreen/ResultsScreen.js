import React, {useEffect} from 'react';
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
import {useRound, useSetRound} from "../../context/RoundContext";

const ResultsScreen = ({ navigation }) => {

    const score = useScore()
    const setRound = useSetRound()

    useEffect(() => {
        setRound(false)
    }, [])

    return (
        <View style={ResultsScreenStyles.resultsScreenView}>
            <View style={{...ResultsScreenStyles.content, ...GenericStyles.shadow}}>
                <View style={{...TitleStyles.titleView, ...ResultsScreenStyles.subContent}}>
                    <Title title={AppConstants.RESULTS_TITLE}
                           style={TitleStyles.title}
                           fontSize={Fonts.H2_FONT_SIZE}/>
                </View>
                <View style={{
                    ...GenericStyles.contentBox,
                    ...ResultsScreenStyles.subContent,
                    ...GenericStyles.shadow,
                    ...ResultsScreenStyles.pointsView
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
                    <PlayAgainButton navigation={navigation} target={RouteNames.CATEGORY_SCREEN}/>
                    <HomeButton navigation={navigation} target={RouteNames.HOME_SCREEN}/>
                </View>
            </View>
        </View>
    )
}
export default ResultsScreen

