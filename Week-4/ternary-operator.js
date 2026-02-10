// Example with ternary

let isLoggedIn = true;
let statuses = isLoggedIn ? "Welcome back!" : "Please log in.";

console.log(statuses);

let age = 20;
let message = age >= 18 ? "You are an adult." : "You are a minor.";

console.log(message);

// Example with else if

let ageTwo = 15;
if (ageTwo >= 18) {
  console.log("You are and adult.");
} else {
  console.log("You are a minor.");
}

//

// isLoggedIn - variable
// message - I have to conditionally assign a value to it.

function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(2));
console.log(checkEvenOdd(5));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(12));

// Assigning Variables

let temperature = 20;
temperature = 30;
let weather = temperature > 25 ? "Hot" : "Cool";

console.log(weather);
