export const nextWord = (catLength, allWords, setWord) => {
    let randIndex = Math.floor(Math.random() * catLength)
    let poppedWord = allWords.splice(randIndex, 1)
    setWord(poppedWord)
}