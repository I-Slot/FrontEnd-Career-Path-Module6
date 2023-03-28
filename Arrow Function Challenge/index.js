

// function speedWarning(speed){
    //     return `You are going at ${speed} mph!`
    // }
    
    
    /*
    Challenge
    1. Refactor this function to use an arrow function.
    2. Make sure you write the least code possible.
    */
   
const speedWarning = (speedLimit, actualSpeed) => {
    if (actualSpeed > speedLimit) {
        console.log(`You are going at ${actualSpeed} mph!`);
    }
}
   
   speedWarning(60, 40);

// const speedWarning = (speedLimit, speed) => {
//   if (speed > speedLimit) {
//     return `You are going at ${speech} mph!`;
//   }
// };

// console.log(speedWarning(30, 40));
