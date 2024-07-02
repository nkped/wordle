


export function transformResults(results, guess) {

    console.log('transformed results: ', results, guess)


    const response = []

    for (let i = 0; i < results.length + 1; i++) {

        if (results[i] == -1) {
           response.push(`The letter - ${guess[i]} - is not included in Word of the Day.`)
        }
        if (results[i] == 1) {
            response.push(`The Letter ${guess[i]} is included, but in incorrect position.`)}
        if (results[i] == 2) {
            response.push(`The Letter ${guess[i]} is included and in correct position (no).`)
        }
            console.log(response[i])
        }


}