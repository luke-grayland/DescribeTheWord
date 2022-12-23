import React from 'react';
import {View, TouchableOpacity, Image, Vibration} from "react-native";
import {GenericStyles} from "../../resources/GenericStyles";
import {SkipButtonStyles} from "./SkipButtonStyles";
import AppConstants from "../../resources/AppConstants";

const SkipButton = ({nextWord,
                        setSkipAvailable,
                        skipAvailable,
                        allWords,
                        setWord,
                        catLength,
                        skipsLeft,
                        setSkipsLeft
                    }) => {
    const click = () => {
        if (skipAvailable) {
            Vibration.vibrate(AppConstants.VIBRATION_TIME)
            nextWord(catLength, allWords, setWord)
            setSkipsLeft(skipsLeft - 1)

            if (skipsLeft == 1)
                setSkipAvailable(false)
        }
    }

    return (
        <View>
            {skipAvailable &&
                <TouchableOpacity
                    style={{...SkipButtonStyles.activeButton, ...GenericStyles.shadow}}
                    onPress={click}
                >
                    <Image source={require('../../resources/images/skipIcon2.png')}
                           style={SkipButtonStyles.icon}/>
                </TouchableOpacity>
            }
            {!skipAvailable &&
                <TouchableOpacity
                    style={{...SkipButtonStyles.disabledButton, ...GenericStyles.shadow}}
                    activeOpacity={1}
                >
                    <Image source={require('../../resources/images/skipIcon2.png')}
                           style={SkipButtonStyles.icon}/>
                </TouchableOpacity>
            }

        </View>
    )
}

export default SkipButton

