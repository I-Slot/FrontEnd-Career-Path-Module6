const guestList = ['Tom', 'Mary', 'Clare', 'John', 'Liz']

/*
Challenge
1. Refactor the code below to use .map() instead of 
   the for loop.
2. Don't worry about the commas for now.
*/

// const guestsHtml = [] 

// for (let i = 0; i < guestList.length; i++){
//     guestsHtml.push(`<div class="box">${guestList[i]}</div>`)
// }

// document.getElementById('list').innerHTML = guestsHtml

const guestsHtml = guestList.map(function (lists) {
    return `<div class="box">${lists}</div>`;
})

// console.log(lists);

document.getElementById('list').innerHTML = guestsHtml.join("")
