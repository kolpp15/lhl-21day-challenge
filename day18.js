// Your task is to write a function that will take in an array of lunch choices (strings) and return the choice as a string with the most votes.

// There is always two lunch choices, and always an odd number of astronauts!

const chooseLunchWinner = (listOfChoices) => {
  let mf = 1;
  let m = 0;
  let item;
  for (let i = 0; i < listOfChoices.length; i++) {
    for (let j = i; j < listOfChoices.length; j++) {
      if (listOfChoices[i] === listOfChoices[j]) {
        m++;
      }
      if (mf < m) {
        mf = m;
        item = listOfChoices[i];
      }
    }
    m = 0;
  }
  return item;
};

const listOfChoices = [
  "Ceasar Salad",
  "Ceasar Salad",
  "Ceasar Salad",
  "Stale Bread",
  "Stale Bread",
  "Stale Bread",
  "Stale Bread"
];

console.log(chooseLunchWinner(listOfChoices));