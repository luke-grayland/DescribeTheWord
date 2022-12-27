import React, {createContext, useContext, useEffect, useState} from 'react'

const RoundContext = createContext()
const SetRoundContext = createContext()

export function useRound() {
    return useContext(RoundContext)
}

export function useSetRound() {
    return useContext(SetRoundContext)
}

export function RoundProvider({ children }) {

    const [roundComplete, setRoundComplete] = useState(false)

    function setRound(roundComplete) {



            setRoundComplete(roundComplete)


    }

    return (
        <RoundContext.Provider value={roundComplete}>
            <SetRoundContext.Provider value={setRound}>
                {children}
            </SetRoundContext.Provider>
        </RoundContext.Provider>
    )
}