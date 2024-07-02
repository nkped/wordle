


export function validateGuess(guess, word, count) {

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
    }   

} 