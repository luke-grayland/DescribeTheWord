import React, {useEffect} from 'react';
import {Text, View} from "react-native";
import Title from '../../components/Title/Title'
import RouteNames from "../../resources/RouteNames";
import {ResultsScreenStyles} from "./ResultsScreenStyles";
import {GenericStyles} from "../../resources/GenericStyles";
import Fonts from "../../resources/Fonts";
import AppConstants from "../../resources/AppConstants";
import {TitleStyles} from "../../components/Title/TitleStyles";
import HomeButton from "../../components/HomeButton/HomeButton";
import PlayAgainButton from "../../components/PlayAgainButton/PlayAgainButton";
import {useScore} from "../../context/ScoreContext";
import {useSetRound} from "../../context/RoundContext";

const ResultsScreen = ({ navigation }) => {
    const score = useScore()
    const setRound = useSetRound()

    useEffect(() => {
        setRound(false)
    }, [])

    return (
        <View style={ResultsScreenStyles.resultsScreenView}>
            <View style={{...ResultsScreenStyles.content, ...GenericStyles.shadow}}>
                <View style={{...TitleStyles.titleView}}>
                    <Title title={AppConstants.RESULTS_TITLE}
                           style={TitleStyles.title}
                           fontSize={Fonts.H2_FONT_SIZE}/>
                </View>
                <View style={{
                    ...GenericStyles.contentBox,
                    ...GenericStyles.shadow,
                    ...ResultsScreenStyles.pointsView
                }}>
                    <View style={{
                        ...TitleStyles.titleView,
                        ...ResultsScreenStyles.pointsContent
                    }}>
                        <Title title={score} style={TitleStyles.title} fontSize={Fonts.H1_FONT_SIZE}/>
                        <Title title={"Points"} style={TitleStyles.title} fontSize={Fonts.H2_FONT_SIZE}/>
                    </View>
                </View>
                <View style={{...ResultsScreenStyles.controls}}>
                    <Text style={ResultsScreenStyles.nextRoundText}>Next Round</Text>
                    <PlayAgainButton navigation={navigation} target={RouteNames.CATEGORY_SCREEN}/>
                    <HomeButton navigation={navigation} target={RouteNames.HOME_SCREEN}/>
                </View>
            </View>
        </View>
    )
}
export default ResultsScreen

