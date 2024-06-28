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
            let search = []
            
            for (let i = 0; i < guessArr.length; i++) {
            
                if (guessArr[i] == wordArr[i]) {
                    search.push(-1)
                    results.push(2)
                    } else if (guessArr.includes(wordArr[i])) {
                    search.push(-1)
                    results.push(1)      
                    } else if (guessArr[i] != wordArr[i]) {
                    search.push(-1)
                    results.push(-1)
                    }                               
            }            
            console.log('search: ', search)
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