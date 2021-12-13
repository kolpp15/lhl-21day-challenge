// Your task is to write a function that will take in a list of data entries in the shape of an array of objects. The function will then organize and return the entries by type and store each bit of data (string) in each list, in the shape of an object containing arrays.


const organizeData = (receivedData) => {

  let result = {
    astro: [],
    bio: [],
    physics: []
  };

  for (let i = 0; i < receivedData.length; i++) {
    let type = receivedData[i].type;
    let data = receivedData[i].data;
    result[type].push(data);
  }
  return result;
};

const listOfReceivedData = [
  {type: "astro", data: "Saturn Data"},
  {type: "bio", data: "Space Potatoes"},
  {type: "physics", data: "Lagrange Points"},
  {type: "bio", data: "OMG Tardigrades"},
  {type: "physics", data: "Material reflectivity"},
  {type: "astro", data: "Mercury is not the hottest"},
];

console.log(organizeData(listOfReceivedData));
