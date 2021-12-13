// Your task is to write a function that will take in speed (number), missionData (object) and checks (object) as parameters. The goal is to make sure that the speed is within the limits and that the amount of entries per type matches with the checks. If one of the values is a mismatch, return false, if everything is fine, return true.

// Speed will be compared against maxSpeed and minSpeed inclusively and the length of each array inside missionData will be compared to the values inside the dataEntries object values.


const confirmReentryPlans = (speed, missionData, checks) => {
  // Code here!
  if (speed > checks.maxSpeed || speed < checks.minSpeed) {
    return false;
  }
  for (const key in missionData) {
    console.log(missionData[key].length);

    if (missionData[key].length !== checks.dataEntries[key]) {
      return false;
    }
  }
  return true;
};

const speed = 40;

const missionData = {
  astro: ["...", "..."],
  bio: ["..."],
  physics: ["..."]
};

const checks = {
  maxSpeed:50,
  minSpeed:20,
  dataEntries:{
    astro:3,
    bio:1,
    physics:1
  }
};

console.log(confirmReentryPlans(speed, missionData, checks));