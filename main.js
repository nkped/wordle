import { generateWord } from "./modules/generateWord.js"
import { preClosureValidation } from "./modules/preClosureValidation.js"


const guessForm = document.querySelector("#gameForm")
const userGuess = document.querySelector("#userGuess")


//LOAD WORD OF THE DAY
window.addEventListener('load', () => {
   //GET THE WORD 
    let wordStr = generateWord()
    console.log('Word of the Day:', wordStr)
    
    ///SUBMIT GUESS AND GET RESPONSE
    guessForm.addEventListener('submit', (e) => {
      e.preventDefault()
      let guessStr = userGuess.value      
      console.log('Your Guess:', guessStr)

      preClosureValidation(guessStr, wordStr)
    })
})
