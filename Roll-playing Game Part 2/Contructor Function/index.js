// const animalForRelease1 = {
//     name: 'Tilly',
//     species: 'tiger',
//     weightKg: 56,
//     age: 2,
//     dateOfRelease: '03-02-2022'
// }
// const animalForRelease2 = {
//     name: 'Nelly',
//     species: 'elephant',
//     weightKg: 320,
//     age: 16,
//     dateOfRelease: '03-02-2022'
// }

// function Animal(data){
//     this.name = data.name
//     this.species = data.species
//     this.weightKg = data.weightKg
//     this.age = data.age
//     this.dateOfRelease = data.dateOfRelease  
// }


// const manDiscript = {
//     name: "shefiu",
//     age: 20,
//     complexion: "Black"

// }

// function Man(self) {
//     this.name = self.name;
//     this.age = self.age;
//     this.complexion= self.complexion
// }

// const manDiscrip = new Man(manDiscript)
// console.log(manDiscrip);


// const tillyTheTiger = new Animal(animalForRelease1)
// const nellyTheElephant = new Animal(animalForRelease2)
// console.log(tillyTheTiger)
// console.log(nellyTheElephant)

const hotel1 = {
  name: "Safari View",
  rooms: 30,
  stars: "⭐⭐⭐⭐⭐",
  costPerNightAdult: "240",
  costPerNightChild: 180,
};

const hotel2 = {
  name: "Leopard Mansion",
  rooms: 96,
  stars: "⭐⭐⭐",
  costPerNightAdult: "120",
  costPerNightChild: 180,
};
/*
Challenge:
1. Create a constructor function called NationalParkHotels.
2. Have it take in "data" as a parameter
3. Assign the data to "this"
4. Log out the result of creating an instance of 
   NationalParkHotels for each hotel.
*/

function NationalParkHotels(data) {
    this.name = data.name;
    this.rooms = data.rooms;
    this.stars = data.stars;
	this.costPerNightAdult = data.costPerNightAdult;
	this.costPerNightChild = data.costPerNightChild
	this.summarizeHotel = function () {
		console.log(`A one night stay 
   at the ${this.name} for two adults and two children costs a 
   total of ${((this.costPerNightChild)*2) +  ((this.costPerNightAdult)*2)}`)
	}

}

const SafariView = new NationalParkHotels(hotel1)
const LeopardMansion = new NationalParkHotels(hotel2)

console.log(SafariView);
console.log(LeopardMansion);
SafariView.summarizeHotel();
LeopardMansion.summarizeHotel();





