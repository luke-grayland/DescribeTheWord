import React, {useEffect, useState} from 'react';
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
import {nextWord} from "./PlayHelper";
import AppConstants from "../../resources/AppConstants";

const PlayScreen = ({ navigation }) => {
    const score = useScore()
    const resetScore = useResetScore()
    const category = useCategory()
    const word = useWord()
    const setWord = useSetWord()
    const allWords = useAllWords()
    let catLength = allWords.length
    const [skipAvailable, setSkipAvailable] = useState(true)
    const [skipsLeft, setSkipsLeft] = useState()

    const roundComplete = useRound()

    useEffect(() => {
        resetScore()
        setSkipsLeft(AppConstants.SKIPS_PER_ROUND)
        nextWord(catLength, allWords, setWord)
    }, [])

    if (roundComplete)
        navigation.navigate(RouteNames.RESULTS_SCREEN)

    return (
        <View style={PlayScreenStyles.playScreenView}>
            <View style={PlayScreenStyles.content}>
                <View style={PlayScreenStyles.topOfContent}>
                    <View style={{
                        ...GenericStyles.contentBox,
                        ...PlayScreenStyles.score
                    }}>
                        <Title title={`Score: ${score}`}
                               fontSize={Fonts.H2_FONT_SIZE}/>
                    </View>
                    <View style={{
                        ...GenericStyles.contentBox
                    }}>
                        <Timer/>
                    </View>
                </View>
                <Title title={category} fontSize={Fonts.H3_FONT_SIZE}/>
                <View style={{
                    ...GenericStyles.contentBox,
                    ...GenericStyles.shadow,
                    ...PlayScreenStyles.word
                }}>
                    <Title title={word} fontSize={Fonts.H1_FONT_SIZE}/>
                </View>
                <Title title={`${AppConstants.SKIPS_LEFT}: ${skipsLeft}`} fontSize={Fonts.H3_FONT_SIZE}/>
            </View>
            <View style={PlayScreenStyles.controls}>
                <SkipButton nextWord={nextWord}
                            catLength={catLength}
                            allWords={allWords}
                            setWord={setWord}
                            setSkipAvailable={setSkipAvailable}
                            skipAvailable={skipAvailable}
                            skipsLeft={skipsLeft}
                            setSkipsLeft={setSkipsLeft}
                />
                <CorrectButton nextWord={nextWord}
                               catLength={catLength}
                               allWords={allWords}
                               setWord={setWord}
                />
            </View>
        </View>
    )
}
export default PlayScreen

