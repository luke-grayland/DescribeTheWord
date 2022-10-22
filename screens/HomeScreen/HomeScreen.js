import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from "react-native";
import Title from '/Users/lukegrayland/Projects/DescribeTheWord/components/Title/Title.js';
import PlayStartButton from "../../components/PlayStartButton/PlayStartButton";
import Strings from "../../resources/Strings";
import Fonts from "../../resources/Fonts";
import {HomeScreenStyles} from "./HomeScreenStyles";
import RouteNames from "../../resources/RouteNames";
import {TitleStyles} from "../../components/Title/TitleStyles";
import InfoCircle from "../../components/InfoCircle/InfoCircle";

const HomeScreen = ({navigation}) => {
    return (
        <View style={HomeScreenStyles.homeScreenView}>
            <View style={TitleStyles.titleView}>
                <Title title={Strings.GAME_TITLE} fontSize={Fonts.H1_FONT_SIZE} />
            </View>
            <View style={HomeScreenStyles.controlsView}>
                <PlayStartButton label={Strings.PLAY_BUTTON} navigation={navigation} target={RouteNames.CATEGORY_SCREEN}/>
                <InfoCircle navigation={navigation} />
                {/*<Title title={Strings.INFO} fontSize={Fonts.H3_FONT_SIZE}/>*/}
            </View>
        </View>

    )}

export default HomeScreen

