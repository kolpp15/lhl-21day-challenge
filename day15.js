// Your task is to write a function that will take in a launch date and a mission name as strings. Calculate the difference between two dates in days and return an object containing the name of the mission and a rounded day difference.

// A part of the code has been written for you, and it is important that it stays the same for the tests to work out.


const timeRemaining = (launchDate, missionName, fakeToday) => {
  const fake = new Date(fakeToday);
  const launch = new Date(launchDate);

  const diffTime = launch.getTime() - fake.getTime();
  const diffDays = diffTime / (1000 * 3600 * 24);
  
  const output = {
    missionName: missionName,
    daysRemaining: diffDays
  };
  
  return output;
};

const launchDate = "2021-12-12";
const fakeToday = "2021-12-01";
const missionName = "Moon visit";

console.log(timeRemaining(launchDate, missionName, fakeToday));