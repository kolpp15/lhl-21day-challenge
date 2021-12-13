// Your task is to write a function that will take in two position objects. Calculate the average speed from the two positions and return the average speed rounded to the first decimal point.

// Each object contains the altitude in meters, and a time stamp in seconds.

const getAverageSpeed = (firstPosition, secondPosition) => {
  // code here!
  const altDiff = secondPosition.altitude - firstPosition.altitude;
  const timeDiff = secondPosition.time - firstPosition.time;

  const avgSpeed = Math.round(altDiff / timeDiff * 10) / 10;

  return avgSpeed;
};

const firstPosition = {
  time: 1637074462,
  altitude: 1100
};
const secondPosition = {
  time: 1637074558,
  altitude: 2200
};

console.log(getAverageSpeed(firstPosition, secondPosition));