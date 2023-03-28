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

  const endMessage =
    wizard.health === 0 && orc.health === 0 ?
        "No victors - all creatures are dead" :
        wizard.health > 0
        ? "The Wizard Wins" : "The Orc is Victorious";
  const endEmoji = wizard > 0 ? "🔮" : "☠️";

  document.body.innerHTML = 
    `<div class="end-game">
          <h2>Game Over</h2>
          <h3>${endMessage} </h3>
          <p class="end-emoji">${endEmoji}</p>
      </div>`;
}



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
