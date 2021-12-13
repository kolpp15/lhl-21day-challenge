// Your task is to create a function that will take in an array of weather objects and will return a rounded average of the wind speed.

// Since we work with an unknown amount of entries, you will need to calculate the average wind speed using loops.

const averageWindSpeed = (weatherEntries) => {
  let sumSpeed = 0;

  for (let i = 0; i < weatherEntries.length; i++) {
    sumSpeed += weatherEntries[i].windSpeed;
  }
  return Math.round(sumSpeed / weatherEntries.length);
};

const weatherEntries = [
  {
    temperature:0,
    weather:"sunny",
    windDirection: "NNE",
    windSpeed:24
  },
  {
    temperature:10,
    weather:"cloudy",
    windDirection: "NNE",
    windSpeed:9
  }
];

console.log(averageWindSpeed(weatherEntries));