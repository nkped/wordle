import { guessResult } from "./guessResult.js"
import { wordList } from "./wordData.js"


export function preClosureValidation(guess, word) {

    //console.log('wordList: ', wordList)
    //console.log('guess, word: ', guess, word)

    if (!wordList.includes(guess)) {
        alert(`Sorry, but ${guess} is not a real word..`)
        return 
    }  else if (guess.length !== 5) {
        alert('Sorry, guess must be 5 characters')
        return
    } else {
    guessResult(guess, word)
}

}