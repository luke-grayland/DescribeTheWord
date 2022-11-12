import React, {createContext, useContext, useState} from 'react'

const AllWordsContext = createContext()
const SetAllWordsContext = createContext()
const WordContext = createContext()
const SetWordContext = createContext()

export function useAllWords() {
    return useContext(AllWordsContext)
}

export function useSetAllWords() {
    return useContext(SetAllWordsContext)
}

export function useWord() {
    return useContext(WordContext)
}

export function useSetWord() {
    return useContext(SetWordContext)
}

export function WordsProvider({ children }) {

    const [allWords, setAllWords] = useState()
    const [word, setWord] = useState()

    function loadWords(allWords) {
        setAllWords(allWords)
    }

    return(
    <AllWordsContext.Provider value={allWords}>
        <SetAllWordsContext.Provider value={loadWords}>
            <WordContext.Provider value={word}>
                <SetWordContext.Provider value={setWord}>
                    {children}
                </SetWordContext.Provider>
            </WordContext.Provider>
        </SetAllWordsContext.Provider>
    </AllWordsContext.Provider>
    )
}