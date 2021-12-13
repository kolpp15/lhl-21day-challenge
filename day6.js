// Create a function that takes in a roster array and an astronaut object. The function will add the astronaut to the roster and return the updated roster.


const addAstronautToRoster = (roster, astronaut) => {
  // Code here!

  roster.push(astronaut);
  return roster;
};

const roster = [];
const astronaut = {
  firstName:"Chris",
  lastName: "Hadfield",
  nickname:"Space Oddity",
  prefix:"Astronaut"
};

console.log(addAstronautToRoster(roster, astronaut));

