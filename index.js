// Greet Message
console.log('Thanks for using questions-and-facts Fact Bundle!')

// Importing files
// Fact Files
const animalFacts = require('./directory/animal-facts.json')
const carFacts = require('./directory/car-facts.json')
const foodFacts = require('./directory/food-facts.json')

// Code starts

function fact () {
  
  let allFacts = [
    animalFacts[Math.floor(Math.random() * animalFacts.length)], carFacts[Math.floor(Math.random() * carFacts.length)], foodFacts[Math.floor(Math.random() * foodFacts.length)]
  ]

  return{
    all: allFacts[Math.floor(Math.random() * allFacts.length)],
    animal: animalFacts[Math.floor(Math.random() * animalFacts.length)],
    car: carFacts[Math.floor(Math.random() * carFacts.length)],
    food: foodFacts[Math.floor(Math.random() * foodFacts.length)]
  }
}

// 5. Export all Modules
module.exports = {
  version: require('./package.json').version,
  fact: fact
}

