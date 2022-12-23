import React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import {InfoScreenStyles} from "./InfoScreenStyles";
import Fonts from "../../resources/Fonts";
import {InfoCircleStyles} from "../../components/InfoCircle/InfoCircleStyles";
import AppConstants from "../../resources/AppConstants";
import {GenericStyles} from "../../resources/GenericStyles";
import InfoCircle from "../../components/InfoCircle/InfoCircle";
import ExitButton from "../../components/ExitButton/ExitButton";

const InfoScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={InfoScreenStyles.infoScreenView}>
            <View style={InfoScreenStyles.exitButtonView}>
                <ExitButton navigation={navigation}/>
            </View>
            <View style={InfoScreenStyles.titleView}>
                <Title
                    title={AppConstants.INFO_SCREEN_HEADER}
                    fontSize={Fonts.H1_FONT_SIZE}
                />
            </View>
            <ScrollView style={{
                ...InfoScreenStyles.contentView,
                ...GenericStyles.shadow}}
                        showsVerticalScrollIndicator={false}
            >
                <Text style={InfoScreenStyles.text}>
                    {`Each round you have 60 seconds to describe as many words as possible, without saying the word itself. You can play solo or split into teams.\n\nThree skips are allowed per round. When the timer runs out, your turn is finished. Take note of your score, and pass the phone to the next player.\n\nIt is suggested that after each player has had 5 rounds, the player/team with the highest total score wins.\n\nYou can gesticulate, mime, or act.\n\nYou cannot say "sounds like" or "rhymes with", say part of the word, or say how many letters it has.\n\n`}
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}
export default InfoScreen

