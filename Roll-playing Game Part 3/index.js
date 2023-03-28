import  characterData  from "./data.js";
import Character from "./Character.js";




function attack() {
   wizard.getDiceHtml();
  orc.getDiceHtml();
  wizard.takeDamage(orc.currentDiceScore);
  orc.takeDamage(wizard.currentDiceScore);
  render();
  if (wizard.dead || orc.dead) {
    endGame()
  }
}

function endGame() {
  console.log("The game is over");
}


console.log();




function render() {
  document.getElementById("hero").innerHTML =wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}


document.getElementById("attack-button").addEventListener("click", attack);

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

render();

// console.log(summary);
// console.log(summary2);

// function renderCharacter(data) {
//     const { elementId, name, avatar, health, diceCount } = data;
//     const diceHtml = getDiceHtml(diceCount)

//     document.getElementById(elementId).innerHTML =
//         `<div class="character-card">
//             <h4 class="name"> ${name} </h4>
//             <img class="avatar" src="${avatar}" />
//             <div class="health">health: <b> ${health} </b></div>
//             <div class="dice-container">
//                 ${diceHtml}
//             </div>
//         </div>`;
// }

// renderCharacter(hero);
// renderCharacter(monster);
