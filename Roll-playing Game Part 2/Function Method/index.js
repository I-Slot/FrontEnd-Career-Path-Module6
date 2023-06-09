const animalForRelease1 = {
  name: "Tilly",
  species: "tiger",
  weightKg: 56,
  age: 2,
  dateOfRelease: "03-02-2022",
};
const animalForRelease2 = {
  name: "Nelly",
  species: "elephant",
  weightKg: 320,
  age: 16,
  dateOfRelease: "03-02-2022",
};

function Animal(data) {
  this.name = data.name;
  this.species = data.species;
  this.weightKg = data.weightKg;
  this.age = data.age;
  this.dateOfRelease = data.dateOfRelease;
  this.summarizeAnimal = function () {
      console.log(`${this.name} is a ${this.age} year old
       ${this.species} which weighs ${this.weightKg}kg and
       was released into the wild on ${this.dateOfRelease}`)
  };
}

const tillyTheTiger = new Animal(animalForRelease1);
const nellyTheElephant = new Animal(animalForRelease2);

tillyTheTiger.summarizeAnimal();
nellyTheElephant.summarizeAnimal();
console.log(nellyTheElephant.name);
