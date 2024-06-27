import {wordList} from "./wordData.js"


//****GENERATE RANDOM WORD********
function random(max) {
    return Math.floor(Math.random() * max);
  }
  
function generateWord() {
    let randomNum = random(wordList.length)

    let wordleWord = wordList[randomNum]

    return wordleWord
}

  window.addEventListener('load', () => {
    console.log('wellcome to Wordle-ish!!')

    console.log(generateWord())

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