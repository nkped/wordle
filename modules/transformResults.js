//import { createTiles } from "./createTiles.js"


export function transformResults(results, guess) {    
    
    //console.log(`recieved in transformedResults: results: ${results} guess: ${guess}`)


    const response = []

    for (let i = 0; i < results.length; i++) {

        if (results[i] == -1) {
           response.push(`The letter - ${guess[i]} - is not included in Word of the Day.`)
        }
        if (results[i] == 1) {
            response.push(`The Letter ${guess[i]} is included, but in incorrect position.`)}
        if (results[i] == 2) {
            response.push(`The Letter ${guess[i]} is included and in correct position.`)
        }
            console.log(response[i])
        }

        //Currently, results are transformed into response in temp literal, and logged. Response should be suitably to call createTiles(). 


}