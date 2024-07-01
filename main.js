import { generateWord } from "./modules/generateWord.js"
import { guessResult } from "./modules/guessResult.js"

const guessForm = document.querySelector("#gameForm")
const userGuess = document.querySelector("#userGuess")


//LOAD WORD OF THE DAY
window.addEventListener('load', () => {
   //GET THE WORD 
    let wordStr = generateWord()
    console.log('Word of the Day:', wordStr)
    
    ///GET THE GUESS
    guessForm.addEventListener('submit', (e) => {
      e.preventDefault()
      let guessStr = userGuess.value      
      console.log('Your Guess:', guessStr)
      
      //GET THE GUESS RESPONSE
      guessResult(guessStr, wordStr)
    })
})










/*
const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', () => {
    generateWord(wordList.length)
})
//console.log("resetBtn", resetBtn)
*/