import {wordList} from "./wordData.js"


/*****GENERATE RANDOM WORD******** 
Generates a random integer and returns corresponding word from 
"import {wordList} from "./wordData.js" in variable "wordeWord"*/


function random(max) {
    return Math.floor(Math.random() * max);
  }

  
export function generateWord() {
    const randomNum = random(wordList.length)
    const wordleWord = wordList[randomNum]
    return wordleWord
}



