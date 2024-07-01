


export const calculateGuesses = (() => {
    let counter = 0
    console.log('counter from IIFE will always be zero', counter)

    const calcResponse = (num) => {
      if (num > 6) {
    console.log('sorry, you have used all your guesses')
    return false
        } else {
      console.log(`You have ${6 - num} tries left`)}
    }
    return () => { counter++; calcResponse(counter)}    
})()