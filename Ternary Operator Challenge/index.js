const playerGuess = 4
const correctAnswer = 4

/*
Challenge 
1. Refactor the if else statement to use a ternary operator.
*/

// let message = '' 
// if(playerGuess === correctAnswer){
//     message = 'Correct!'
// }
// else{
//     message = 'Wrong!'
// }

const message = playerGuess === correctAnswer ? "Correct!"
    : playerGuess >= correctAnswer * 2 ? "Too High"
    : "Too low";

console.log(message)