// Your task is to write a function that will take in an array of objects containing a gauge reading (min, max, current). The function will then check if the gauge current value is within spec (between min and max) and check the next gauge. If one of the values is outside the spec, return false, if they are all ok, return true.

// The method the evaluate the gauge is the same as the third challenge. You may take your function, get inspired by it, or start from scratch in this challenge.

const checkAllGauges = (gaugeList) => {
  // Code here!
  let check = true;
  
  for (const list of gaugeList) {
    // console.log(list);
    if (list.current < list.min || list.current > list.max) {
      check = false;
    }
  }
  return check;
};


const gaugeList = [
  {
    current:0.4,
    min:0.1,
    max:0.9
  },
  {
    current:1.2,
    min:0.1,
    max:0.6
  }
];

console.log(checkAllGauges(gaugeList));