import { generateWord } from "./modules/generateWord.js"


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
        
        if(guessString.length !== 5) {
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
        }    
    })
})










/*
const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', () => {
    generateWord(wordList.length)
})
//console.log("resetBtn", resetBtn)
*/