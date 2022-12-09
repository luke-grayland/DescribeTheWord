import React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import {InfoScreenStyles} from "./InfoScreenStyles";
import Fonts from "../../resources/Fonts";
import {InfoCircleStyles} from "../../components/InfoCircle/InfoCircleStyles";
import AppConstants from "../../resources/AppConstants";
import {GenericStyles} from "../../resources/GenericStyles";

const InfoScreen = () => {
    return (
        <SafeAreaView style={InfoScreenStyles.infoScreenView}>
            <View style={InfoScreenStyles.titleView}>
                <Title
                    title={AppConstants.INFO_SCREEN_HEADER}
                    fontSize={Fonts.H1_FONT_SIZE}
                    style={InfoScreenStyles.title}
                />
            </View>
            <ScrollView style={{...InfoScreenStyles.contentView, ...GenericStyles.shadow}}>
                <Text style={InfoScreenStyles.text}>
                    {`Your round begins once the timer starts counting down. Your objective is to convey the word in front of you without saying the word itself (if your word is “elephant”, you might have “a large grey animal with a trunk”). Please see can/can not rules below for more detail.\n\nYou can either play solo (all other plays tries to guess the word) or split into teams (just your team try to guess the word). Once your word has been correctly guessed, move onto the next word. One skip is allowed per round. \n\nWhen the timer runs out, your turn is finished. Take note of your score, and pass the phone to the next player. \n\nIt is suggested that after each player has had 5 rounds, the player/team with the highest total score wins.\n\n\n\n`}
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}
export default InfoScreen

