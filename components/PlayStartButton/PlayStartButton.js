import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";

const PlayStartButton = ({ navigation, label, target }) => {

    const handleStartButton = () => {
        navigation.navigate(target)
    }

    return (
        <View>
            <Button title={label}
                    style={styles.button}
                    onPress={handleStartButton}
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {

    }
})

export default PlayStartButton

