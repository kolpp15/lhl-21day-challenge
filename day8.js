// Your task is to create a function that takes in a roster array, and will calculate the amount of astronauts in the given roster list and return said amount.

// Sometimes things are just simple, code doesn't need to be complicated!


const countActiveAstronauts = (roster) => {
  // Code here!
  return roster.length;
};

const roster = [
  {
    firstName:"Chris",
    lastName: "Hadfield",
    nickname:"Space Oddity",
    prefix:"Astronaut",
    job:"Shuttle DJ"
  }
];

console.log(countActiveAstronauts(roster));
