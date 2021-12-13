// Your task is to create a function that will take in an array representing the roster of astronauts, and return an array containing the jobs of each astronaut as a string.

// In other terms, for each astronaut of the roster, you want to take the job and add it to a list, then return said list.


const listAstronautJobs = (roster) => {
  // Code here!
  const jobs = roster.map(item => item.job);
  
  return jobs;
};

const roster = [
  {
    job:"Shuttle DJ"
  },
  {
    job:"Space Cook"
  }
];

console.log(listAstronautJobs(roster));