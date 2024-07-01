import { generateWord } from "./modules/generateWord.js"
import { guessResult } from "./modules/guessResult.js"

const guessForm = document.querySelector("#gameForm")
const userGuess = document.querySelector("#userGuess")


//LOADS (INIT) WORDOFTHEDAY
window.addEventListener('load', () => {
    
    let wordString = generateWord()
    console.log(wordString)

    ///GUESS LOGIC
    guessForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let guessString = userGuess.value
        //GUESSRESULT
        guessResult(guessString, wordString)       
    })
})










/*
const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', () => {
    generateWord(wordList.length)
})
//console.log("resetBtn", resetBtn)
*/