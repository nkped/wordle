import { validateGuess } from "./validateGuess.js"
import { filterGuess } from "./filterGuess.js"

//CLOSURE FUNCTION

const outerFunction = () => {
    let count = 0

    const innerFunction = (guess, word) => {
        count++
        //console.log('guess, word', guess, word)
        console.log(`You have ${6 - count} turns left!`)

        const valideGuess = validateGuess(guess, word, count)
        //console.log(valideGuess)

          if (valideGuess) {
            let guessArr = guess.split('')
            let wordArr = word.split('')
            let results = []
            //console.log('guessArr, wordArr', guessArr, wordArr)

            filterGuess(guessArr, wordArr, results)
        }   
    }
    return innerFunction
}

export const guessResult = outerFunction()
