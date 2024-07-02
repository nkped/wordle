


export function filterGuess(guessArr, wordArr) {
    const results = []

   for (let i = 0; i < guessArr.length; i++) {              
       if (guessArr[i] == wordArr[i]) {
         guessArr[i] = null
         wordArr[i] = null
         results.push(2)
       } else {          
         results.push(null)  
       }
   } //console.log('results from first loop', results, guessArr, wordArr)
   
   for (let i = 0; i < guessArr.length; i++) {
     //console.log('results from top of second loop', results)
     
   if (guessArr[i] != null && wordArr.includes(guessArr[i])) {
       guessArr[i] = null
       results[i] = 1       
     } 
     
     else if (results[i] == null) {        
       results[i] = -1
     }      
   
       
   }   //console.log('results from second loop', results, guessArr)
      return results
}