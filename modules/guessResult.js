import { generateWord } from "./generateWord.js"

//CLOSURE FUNCTION    

const outerFunction = () => {
    let count = 0

    const innerFunction = (guess, word) => {
        count++
        //console.log('guess, word', guess, word)

        console.log(`You have ${6 - count} turns left!`)

        if (count == 7) {
            console.log('Sorry, you are out of guesses!')
            userGuess.value = ''
            return
        } else if (count > 7) {
            location.reload();
        } else if (guess.length !== 5) {
            alert('Sorry, guess must be 5 characters')
            return //should not count as turn
        } else if (guess == word) {
            userGuess.value = ''
            console.log('correct guess!!')
            return        
        }   else {
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
