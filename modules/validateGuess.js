


export function validateGuess(guess, word, count) {
    //console.log(guess, word, count)

    if (count == 7) {
        console.log('Sorry, you are out of guesses!')
        userGuess.value = ''
        return false
    } else if (count > 7) {
        location.reload();
    } else if (guess == word) {
        userGuess.value = ''
        console.log('correct guess!!')
        //clear user guess
        return false        
    }   

    return true

} 