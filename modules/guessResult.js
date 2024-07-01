const increment = (() => {

    let counter = 0
    console.log('counter from IIFE', counter)
    const triesLeft = (num) => console.log(`You have ${6 - num} tries left`)
    return () => { counter++; triesLeft(counter)}

})()

//CHECK NUMBER OF GUESSES     
export function guessResult(guessString, wordString) {
    console.log("guessString, wordString from iife: ", guessString, wordString)

    let count = increment()

    if (count = 6) {
        console.log('last try, make it count!')
    }
    else if (count >= 6) {
        console.log('sorry, you have used all your guesses')
        return
    } else if(guessString.length !== 5) {
            alert('Sorry, guess must be 5 characters')
            return
    } else if (guessString == wordString) {
        userGuess.value = ''
        console.log('correct guess!!')
        return        
    } else {
        count++  
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
        console.log('you have guessed', count)
    }}
