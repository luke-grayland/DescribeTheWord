import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const Title = (props) => {
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'notoserif',
        fontSize: 30
    }
})

export default Title

