import React, {Component, useEffect, useState} from 'react';
import {View} from "react-native";
import RouteNames from "../../resources/RouteNames";
import {PlayScreenStyles} from "./PlayScreenStyles"
import CorrectButton from "../../components/CorrectButton/CorrectButton";
import SkipButton from "../../components/SkipButton/SkipButton";
import {GenericStyles} from "../../resources/GenericStyles";
import Title from "../../components/Title/Title";
import Fonts from "../../resources/Fonts";
import {useResetScore, useScore} from "../../context/ScoreContext";
import {useCategory} from "../../context/CategoryContext";
import {useAllWords, useSetWord, useWord} from "../../context/WordsContext";
import Timer from "../../components/Timer/Timer";
import {useRound} from "../../context/RoundContext";

const PlayScreen = ({ navigation }) => {
    const score = useScore()
    const resetScore = useResetScore()
    const category = useCategory()
    const word = useWord()
    const setWord = useSetWord()
    const allWords = useAllWords()
    let catIndexArr
    let catLength = allWords.length
    const [skipAvailable, setSkipAvailable] = useState(true)
    const roundComplete = useRound()

    function nextWord() {
        let randIndex = Math.floor(Math.random() * catLength)
        let poppedWord = allWords.splice(randIndex, 1)
        setWord(poppedWord)
    }

    function createCatIndexArr(){
        let catIndex = []
        for (let i = 0; i < catLength; i++) {
            catIndex[i] = i
        }
        return catIndex
    }

    useEffect(() => {
        resetScore()
        catIndexArr = createCatIndexArr()
        nextWord()
    }, [])

    if (roundComplete)
        navigation.navigate(RouteNames.RESULTS_SCREEN)

    return (
        <View style={PlayScreenStyles.playScreenView}>
            <View style={PlayScreenStyles.content}>
                <View style={{
                    ...GenericStyles.contentBox,
                    ...PlayScreenStyles.score
                }}>
                    <Title title={`Score: ${score}`}
                           fontSize={Fonts.H2_FONT_SIZE}/>
                </View>
                <View style={{
                    ...GenericStyles.contentBox,
                    ...PlayScreenStyles.timer
                }}>
                    <Timer/>
                </View>
                <Title title={category} fontSize={Fonts.H3_FONT_SIZE}/>
                <View style={{
                    ...GenericStyles.contentBox,
                    ...GenericStyles.shadow,
                    ...PlayScreenStyles.word
                }}>
                    <Title title={word} fontSize={Fonts.H1_FONT_SIZE}/>
                </View>
            </View>
            <View style={PlayScreenStyles.controls}>
                <SkipButton nextWord={nextWord}
                            setSkipAvailable={setSkipAvailable}
                            skipAvailable={skipAvailable}
                />
                <CorrectButton nextWord={nextWord}/>
            </View>
        </View>
    )
}
export default PlayScreen

