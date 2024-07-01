import { generateWord } from "./modules/generateWord.js"
import { guessResult } from "./modules/guessResult.js"

const guessForm = document.querySelector("#gameForm")
const userGuess = document.querySelector("#userGuess")


//LOADS (INIT) WORDOFTHEDAY
window.addEventListener('load', () => {
   //GET THE WORD 
    let wordString = generateWord()
    console.log(wordString)

    ///GET THE GUESS
    guessForm.addEventListener('submit', (e) => {
      e.preventDefault()
      let guessString = userGuess.value
      
      
      //GET THE GUESS RESULT
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