import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import AppConstants from "../../resources/AppConstants";
import Fonts from "../../resources/Fonts";
import {HomeScreenStyles} from "../../resources/styles/screens/HomeScreenStyles";
import RouteNames from "../../resources/RouteNames";
import {TitleStyles} from "../../resources/styles/components/TitleStyles";
import InfoCircle from "../../components/InfoCircle/InfoCircle";

const HomeScreen = ({navigation}) => {
    return (
        <View style={HomeScreenStyles.homeScreenView}>
            <View style={HomeScreenStyles.titleView}>
                <Title title={AppConstants.GAME_TITLE} fontSize={Fonts.H1_FONT_SIZE} style={TitleStyles.titleView}/>
            </View>
            <View style={HomeScreenStyles.controlsView}>
                <PlayStartButton label={AppConstants.PLAY_BUTTON} navigation={navigation} target={RouteNames.CATEGORY_SCREEN}/>
                <InfoCircle navigation={navigation} />
                {/*<Title title={AppConstants.INFO} fontSize={Fonts.H3_FONT_SIZE}/>*/}
            </View>
        </View>

    )}

export default HomeScreen

