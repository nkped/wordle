import { generateWord } from "./modules/generateWord.js"


const guessForm = document.querySelector("#gameForm")
const userGuess = document.querySelector("#userGuess")


guessForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let guess = userGuess.value

    console.log('guess.length is: ', guess.length)
    
    if(guess.length !== 6) {
        alert('Sorry, guess must be 6 characters')
        return
    } else {
        userGuess.value = ''
    }

    //console.log('ya guessed: ', guess)
})







//LOADS (INIT) WORDOFTHEDAY
window.addEventListener('load', () => {
    console.log('wellcome to Wordle-ish!!')
    /* let wordOfTheDay = generateWord()
    console.log(wordOfTheDay) */

    ///GUESS LOGIC
    //console.log("guess:", guess)


})










/*
const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', () => {
    generateWord(wordList.length)
})
//console.log("resetBtn", resetBtn)
*/