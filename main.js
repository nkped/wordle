import {wordList} from "./wordData.js"


//console.log("wordList", wordList)



const resetBtn = document.getElementById('resetBtn')

function generateWord(max) {
    return Math.floor(Math.random() * max);
  }

resetBtn.addEventListener('click', () => {
    generateWord(wordList.length)
})


//console.log("resetBtn", resetBtn)






/* 
let btn = document.querySelector("#guessSubmit")
console.log("btn:", btn)


btn.addEventListener('click', () => {
    console.log('ya clicked')
})
 */



////////GENERATE RANDOM WORD


