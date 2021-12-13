// Your task is to write a function that will take in an array of objects containing a sender and a message as a parameter. The function will then parse a message from each object, add it to an array then return the built array.

// Each message is built exactly like the first challenge, so you can either use the function you already made, or rebuild it from scratch.

const parseTranscripts = (messages) => {
  let output = [];

  for (let i = 0; i < messages.length; i++) {
    output.push(`${messages[i].origin}: ${messages[i].message}`);
  }
  
  // for...of loop: 
  // for (const arr of messages) {
  //   output.push(`${arr.origin}: ${arr.message}`);
  // }
  
  return output;
};

const messages = [
  {origin:"MC", message:"Hello!"},
  {origin:"Shuttle", message:"Hey!"},
];

console.log(parseTranscripts(messages));