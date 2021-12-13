// Now that a crew has been selected, you need to write a new function that will assign a job to each astronaut. Since you’ve had some experience with updating object properties in some of the previous challenges, this should be fairly straightforward. Just keep in mind that you need to return the astronaut after updating the job property.


const addJobToAstronaut = (astronaut, job) => {
  // Code here!

  // Remember to return a value!
  astronaut.job = job;
  return astronaut;
};


const astronaut = {
  firstName:"Chris",
  lastName: "Hadfield",
  nickname:"Space Oddity",
  prefix:"Astronaut"
};

console.log(addJobToAstronaut(astronaut, "Shuttle DJ"));