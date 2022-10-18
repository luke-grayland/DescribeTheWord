import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";

const CircleButton = ({ label, navigation }) => {

    const click = () => {
        console.log("Test")
        navigation.navigate("Info")
}

    return (
        <View>
            <TouchableOpacity
                style={styles.circle}
                onPress={click}
            >
                <Text>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'orange',
    }
})

export default CircleButton

