import React, {useEffect, useState} from 'react';
import {View} from "react-native";
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
import {useAllWords, useSetWord, useWord} from "../../context/WordsContext";

const PlayScreen = ({ navigation }) => {

    const score = useScore()
    const resetScore = useResetScore()
    const category = useCategory()
    const word = useWord()
    const setWord = useSetWord()
    const allWords = useAllWords()
    let catIndexArr
    let catLength = allWords[category].length
    const [skipAvailable, setSkipAvailable] = useState(true)

    function nextWord() {
        let randIndex = Math.floor(Math.random() * catLength)
        let poppedWord = allWords[category].splice(randIndex, 1)
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
            <PlayStartButton label={"Temp"} navigation={navigation} target={RouteNames.RESULTS_SCREEN}/>
        </View>
    )
}
export default PlayScreen

