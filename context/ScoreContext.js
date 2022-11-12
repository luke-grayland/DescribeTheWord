import React, {createContext, useContext, useState} from 'react'

const ScoreContext = createContext()
const SetScoreContext = createContext()
const ResetScoreContext = createContext()

export function useScore() {
    return useContext(ScoreContext)
}

export function useSetScore() {
    return useContext(SetScoreContext)
}

export function useResetScore() {
    return useContext(ResetScoreContext)
}

export function ScoreProvider({ children }) {

    const [score, setScore] = useState(0)

    function updateScore() {
        setScore(score + 1)
    }

    function resetScore() {
        setScore(0)
    }

    return (
        <ScoreContext.Provider value={score}>
            <SetScoreContext.Provider value={updateScore}>
                <ResetScoreContext.Provider value={resetScore}>
                    {children}
                </ResetScoreContext.Provider>
            </SetScoreContext.Provider>
        </ScoreContext.Provider>
    )
}