import {wordList} from "./wordData.js"


//****GENERATE RANDOM WORD********
function generateWord(max) {
    return Math.floor(Math.random() * max);
  }
  

  window.addEventListener('load', () => {
    console.log('wellcome to Wordle-ish!!')
    console.log(generateWord(wordList.length))
})



//console.log("resetBtn", resetBtn)






///GUESS LOGIC
const guess = document.querySelector("#gameForm")
console.log("guess:", guess)


guess.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('ya guessed!!')
})





/*
const resetBtn = document.getElementById('resetBtn')

resetBtn.addEventListener('click', () => {
    generateWord(wordList.length)
})
*/