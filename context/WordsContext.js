import React, {createContext, useContext, useState} from 'react'

const WordsContext = createContext()
const SetWordsContext = createContext()
const WordContext = createContext()

export function useWords() {
    return useContext(WordsContext)
}

export function useSetWords() {
    return useContext(SetWordsContext)
}

export function useWord() {
    return useContext(WordContext)
}

export function WordsProvider({ children }) {

    const [allWords, setAllWords] = useState()
    const [word, setWord] = useState()
    const [wordIndex, setWordIndex] = useState(0)

    function loadWords(allWords) {
        setAllWords(allWords)
    }

    function nextWord(category){
        setWord(allWords[category][wordIndex])
        console.log("Index: ", wordIndex, ", Word: ", word)
        return word
    }

    return(
    <WordsContext.Provider value={allWords}>
        <SetWordsContext.Provider value={loadWords}>
            <WordContext.Provider value={nextWord}>
                {children}
            </WordContext.Provider>
        </SetWordsContext.Provider>
    </WordsContext.Provider>
    )
}