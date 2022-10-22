import React, {useEffect, useState} from 'react';
import {View, Text} from "react-native";
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import RouteNames from "../../resources/RouteNames";
import {PlayScreenStyles} from "./PlayScreenStyles"
import CorrectButton from "../../components/CorrectButton/CorrectButton";
import SkipButton from "../../components/SkipButton/SkipButton";
import {GenericStyles} from "../../resources/GenericStyles";
import Title from "../../components/Title/Title";
import Fonts from "../../resources/Fonts";

const PlayScreen = ({ navigation, scoreCounter, setScoreCounter }) => {
    return (
        <View style={PlayScreenStyles.playScreenView}>
            <View style={PlayScreenStyles.content}>
                <View style={{
                    ...GenericStyles.contentBox,
                    ...GenericStyles.shadow,
                    ...PlayScreenStyles.score
                }}>
                    <Title title={scoreCounter} fontSize={Fonts.H2_FONT_SIZE}/>
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
                    ...GenericStyles.shadow}}>
                    <Title title={'Word'} fontSize={Fonts.H2_FONT_SIZE}/>
                </View>
            </View>
            <View style={PlayScreenStyles.controls}>
                <SkipButton/>
                <CorrectButton setScoreCounter={setScoreCounter} scoreCounter={scoreCounter}/>
            </View>
            <PlayStartButton label={"Temp"} navigation={navigation} target={RouteNames.RESULTS_SCREEN}/>
        </View>
    )
}
export default PlayScreen

