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
    animalFacts[Math.floor(Math.random() * emojiFacts.length)], carFacts[Math.floor(Math.random() * spaceFacts.length)], foodFacts[Math.floor(Math.random() * foodFacts.length)]
  ]

  return{
    all: allFacts[Math.floor(Math.random() * allFacts.length)],
    emoji: animalFacts[Math.floor(Math.random() * emojiFacts.length)],
    space: carFacts[Math.floor(Math.random() * spaceFacts.length)],
    food: foodFacts[Math.floor(Math.random() * foodFacts.length)]
  }
}

// 5. Export all Modules
module.exports = {
  version: require('./package.json').version,
  fact: fact
}

