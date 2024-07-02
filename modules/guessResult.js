import { validateGuess } from "./validateGuess.js"
import { filterGuess } from "./filterGuess.js"
import { transformResults } from "./transformResults.js"

//CLOSURE FUNCTION

const outerFunction = () => {
    let count = 0
//NB*inner function accepts params
    const innerFunction = (guess, word) => {
        count++
        console.log(`You have ${6 - count} turns left!`)
        //console.log('guess, word', guess, word)

        const valideGuess = validateGuess(guess, word, count)
        //console.log(valideGuess)

          if (valideGuess) {
            let guessArr = guess.split('')
            let wordArr = word.split('')
            //console.log('guessArr, wordArr', guessArr, wordArr)
            
            /*Below returns array of users input to transformResult() before final response in DOM*/
            const filterResults = filterGuess(guessArr, wordArr)
            //console.log('filterResults: ',filterResults)

            transformResults(filterResults, guess.split(''))
        }   
    }
    return innerFunction
}

export const guessResult = outerFunction()
