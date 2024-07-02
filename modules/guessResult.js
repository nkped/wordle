import { validateGuess } from "./validateGuess.js"

//CLOSURE FUNCTION

const outerFunction = () => {
    let count = 0

    const innerFunction = (guess, word) => {
        count++
        //console.log('guess, word', guess, word)
        console.log(`You have ${6 - count} turns left!`)

        const valideGuess = validateGuess(guess, word, count)

          if (valideGuess) {
            let guessArr = guess.split('')
            let wordArr = word.split('')
            let results = []
            //console.log('guessArr, wordArr', guessArr, wordArr)

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
            }
            console.log('results: ' ,results)
        }   
    }
    return innerFunction
}

export const guessResult = outerFunction()
