import React, {useState} from 'react';
import Fonts from "../../resources/Fonts";
import Title from "../Title/Title";
import AppConstants from "../../resources/AppConstants";
import {useSetRound} from "../../context/RoundContext";

const Timer = () => {
    const [timer, setTimer] = useState(AppConstants.SECONDS_PER_ROUND)
    const setRoundComplete = useSetRound()

    if (timer > 0)
    {
        setTimeout(() => {
            setTimer(timer - 1)
        }, 1000)
    }

    if (timer < 1)
        setRoundComplete(true)

    return(
        <Title title={timer + "s"} fontSize={Fonts.H1_FONT_SIZE}/>
    )
}

export default Timer