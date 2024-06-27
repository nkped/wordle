import {wordList} from "./wordData.js"


//console.log("wordList", wordList)


/* 
const resetBtn = document.getElementById('resetBtn')

function generateWord(max) {
    return Math.floor(Math.random() * max);
  }

resetBtn.addEventListener('click', () => {
    generateWord(wordList.length)
})
 */

//console.log("resetBtn", resetBtn)







const guess = document.querySelector("#gameForm")
console.log("guess:", guess)


guess.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('ya guessed!!')
})




////////GENERATE RANDOM WORD


