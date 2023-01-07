import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from "react-native";
import Title from '../../components/Title/Title'
import {InfoScreenStyles} from "./InfoScreenStyles";
import Fonts from "../../resources/Fonts";
import AppConstants from "../../resources/AppConstants";
import {GenericStyles} from "../../resources/GenericStyles";
import ExitButton from "../../components/ExitButton/ExitButton";

const InfoScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={InfoScreenStyles.infoScreenView}>
            <View style={InfoScreenStyles.exitButtonView}>
                <ExitButton navigation={navigation}/>
            </View>

            <ScrollView style={{
                ...InfoScreenStyles.contentView,
                ...GenericStyles.shadow
            }}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1, minHeight: '55%' }}>
                <View style={InfoScreenStyles.titleView}>
                    <Title
                        title={AppConstants.INFO_SCREEN_HEADER}
                        fontSize={Fonts.H1_FONT_SIZE}
                    />
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={InfoScreenStyles.text}>
                        {`Press Play to begin. Each round you will be given a random category. Once your round starts, you have 60 seconds to describe as many words as possible, without saying the word itself.\n`}
                    </Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={InfoScreenStyles.text}>
                        {`You can: gesticulate, mime, or act. You cannot: say "sounds like" or "rhymes with"; say part of the word; or say how many letters the word has.\n`}
                    </Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={InfoScreenStyles.text}>
                        {`The game can be played solo (everyone tries to guess your word) or in teams (split into 2 groups, each group has 1 describer, the remaining members are guessers, teams play alternating rounds).\n`}
                    </Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={InfoScreenStyles.text}>
                        {`Three skips are allowed per round. When the timer runs out, your turn is finished. Take note of your score, and pass the phone to the next player/team.\n`}
                    </Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={InfoScreenStyles.text}>
                        {`It is suggested that after each player/team has played 5 rounds, the player/team with the highest total score wins.\n\n\n\n`}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default InfoScreen

