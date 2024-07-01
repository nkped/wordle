import { calculateGuesses } from "./calculateGuesses.js"

//CHECK NUMBER OF GUESSES     
export function guessResult(guessString, wordString) {
    //console.log("guessString, wordString from guessResult: ", guessString, wordString)



    if (calculateGuesses()) {

        console.log('its true')
    }


    
   if (guessString.length !== 5) {
            alert('Sorry, guess must be 5 characters')
            return
    } else if (guessString == wordString) {
        userGuess.value = ''
        console.log('correct guess!!')
        return        
    } else {
        let guessArr = guessString.split('')
        let wordArr = wordString.split('')
        let results = []

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
        console.log('wordString: ', wordString)
        console.log('guessString: ', guessString)
        console.log('result: ' ,results)
        //console.log('you have guessed', count)
    }}
