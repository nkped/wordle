


export function filterGuess(guessArr, wordArr, results) {
    for (let i = 0; i < guessArr.length; i++) {              
        if (guessArr[i] == wordArr[i]) {
        guessArr[i] = null
        wordArr[i] = null
        results.push(2)
        } else if (wordArr.includes(guessArr[i])) {     
        guessArr[i] = null
        results.push(1)
        } else if (!guessArr.includes(wordArr[i])) {   
        guessArr[i] = null
        results.push(-1)
        }
    }   return results
}