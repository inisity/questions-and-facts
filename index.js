// Greet Message
console.log('Thanks for using questions-and-facts Questions Bundle!')

// Importing files
// Fact Files
const wyr = require('./directory/would-you-rather.json')
const carFacts = require('./directory/car-facts.json')
const foodFacts = require('./directory/food-facts.json')

// Code starts

function question () {
  
  let allQuestions = [
    wyr[Math.floor(Math.random() * wyr.length)], carFacts[Math.floor(Math.random() * spaceFacts.length)], foodFacts[Math.floor(Math.random() * foodFacts.length)]
  ]

  return{
    all: allQuestions[Math.floor(Math.random() * allFacts.length)],
    wyr: animalFacts[Math.floor(Math.random() * wyr.length)],
    car: carFacts[Math.floor(Math.random() * carFacts.length)],
    food: foodFacts[Math.floor(Math.random() * foodFacts.length)]
  }
}

// 5. Export all Modules
module.exports = {
  version: require('./package.json').version,
  question: question
}
