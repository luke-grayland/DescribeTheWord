export const nextWord = (catLength, allWords, setWord) => {
    let randIndex = Math.floor(Math.random() * catLength)
    let poppedWord = allWords.splice(randIndex, 1)
    setWord(poppedWord)
}

export const getLongestWordLength = (word) => {
    let longestWord = ''
    const arr = word[0].trim().split(/\s+/)

    arr.forEach(x => {
        if (x.length > longestWord.length)
            longestWord = x
    })

    return longestWord.length
}