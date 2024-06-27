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


            

           /*  for (let i of guessArr) {
                for (let j of wordArr ) {
                    if (i == j) {
                        console.log('match')
                    } else {
                        console.log('no match')
                    }
                }
            } */
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