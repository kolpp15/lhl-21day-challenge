// Your task is to write a function that will take in a list of platforms and a date as a string. That function will update the date property on the first platform with an empty date and then return the platform list.

// In other terms, for each platform of the platform list array, update the date of the first free one and then return the updated platform list.

const bookFreePlatform = (platformList, missionDate) => {
  // Code here!
  for (let i = 0; i < platformList.length; i++) {
    if (platformList[i].bookDate === undefined) {
      platformList[i].bookDate = missionDate;
      break;
    }
  }
  return platformList;
};

const missionDate = "2021-12-12";
const platformList = [
  {
    name:"Platform A",
    bookDate:"2021-12-11"
  },
  {
    name:"Platform B",
    bookDate:undefined
  },
  {
    name:"Platform C",
    bookDate:undefined
  },
];

console.log(bookFreePlatform(platformList, missionDate));