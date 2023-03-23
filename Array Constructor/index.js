//Aim: create an array of length ten. The elements should be undefined.

// const endOfLevelBosses = [
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   undefined,
// ];

// for (let i = 0; i < 10; i++) {
//   endOfLevelBosses.push(Math.floor(Math.random()*10));
// }

// console.log(endOfLevelBosses);


// for (let i=0; i<10; i++){
//     endOfLevelBosses.push(undefined)
// }

// const endOfLevelBosses = new Array(10)

// console.log(endOfLevelBosses)

// const goldCoins = (new Array(1000).fill("🪙")).join("");
// console.log(goldCoins);

const poisonMushrooms = new Array(10)
  .fill("🍄")
  .map(function (mushroom) {
    return `<div class="box">${mushroom}</div>`;
  })
  .join("");

document.getElementById("mushrooms").innerHTML = poisonMushrooms;