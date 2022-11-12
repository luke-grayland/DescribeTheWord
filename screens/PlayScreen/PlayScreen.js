import React, {useEffect, useState} from 'react';
import {View, Text, Button} from "react-native";
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";
import {PlayScreenStyles} from "./PlayScreenStyles"
import CorrectButton from "../../components/CorrectButton/CorrectButton";
import SkipButton from "../../components/SkipButton/SkipButton";
import {GenericStyles} from "../../resources/GenericStyles";
import Title from "../../components/Title/Title";
import Fonts from "../../resources/Fonts";
import {useResetScore, useScore} from "../../context/ScoreContext";
import {useCategory} from "../../context/CategoryContext";
import {useWord} from "../../context/WordsContext";

const PlayScreen = ({ navigation }) => {

    const score = useScore()
    const resetScore = useResetScore()
    const category = useCategory()
    const word = useWord()


    useEffect(() => {
        resetScore()
    }, [])

    return (
        <View style={PlayScreenStyles.playScreenView}>
            <View style={PlayScreenStyles.content}>
                <View style={{
                    ...GenericStyles.contentBox,
                    ...GenericStyles.shadow,
                    ...PlayScreenStyles.score
                }}>
                    <Title title={score} fontSize={Fonts.H2_FONT_SIZE}/>
                </View>
                <View style={{
                    ...GenericStyles.contentBox,
                    ...GenericStyles.shadow,
                    ...PlayScreenStyles.timer
                }}>
                    <Title title={'10s'} fontSize={Fonts.H2_FONT_SIZE}/>
                </View>
                <View style={{
                    ...GenericStyles.contentBox,
                    ...GenericStyles.shadow,
                    ...PlayScreenStyles.word
                }}>
                    <Title title={category} fontSize={Fonts.H3_FONT_SIZE}/>
                    <Title title={word(category)} fontSize={Fonts.H1_FONT_SIZE}/>
                </View>
            </View>
            <View style={PlayScreenStyles.controls}>
                <SkipButton/>
                <CorrectButton/>
            </View>
            <PlayStartButton label={"Temp"} navigation={navigation} target={RouteNames.RESULTS_SCREEN}/>
        </View>
    )
}
export default PlayScreen

