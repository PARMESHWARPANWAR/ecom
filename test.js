const readline = require("readline");

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

setInterval(() => {
  console.log("This is testing as discussed with Vipin");
}, 1000);

// Ask for user input
rl.question("Enter your input: ", (userInput) => {
  console.log("User input:", userInput);
  // Close the readline interface
  rl.close();
});
