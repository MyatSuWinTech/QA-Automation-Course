// Part 1: Arithmetic Operators
// 1. Create two numbers and:
// Add them
// Subtract them
// Multiply them
// Divide them
// Print each result.

let number1 = 4;
let number2 = 2;

console.log(number1 + number2); // Add

console.log(number1 - number2); // Subtract

console.log(number1 * number2); // Multiply

console.log(number1 / number2); // Divide

// 2. Create a number and:
// Increase it by 1 using an operator
// Decrease it by 1 using an operator
// Print the value after each change.

let num = 5;
num++; // Increase by 1
console.log(num);

num = 7;
num--; // Decrease by 1
console.log(num);

// 3. Create two numbers and print:
// The remainder when the first is divided by the second

let a = 10;
let b = 3;
console.log(a % b); // Remainder

// 4. Create a number and raise it to the power of 3.

let c = 2;
console.log(c ** 3); // Power of 3

// Part 2: Comparison Operators
// 1. Create two variables:
// One number
// One string with a number inside
// Compare them using `===` and print the result.

let grasshopper = 5;
let ant = "5";
console.log(grasshopper === ant); // Strict equal

// 2. Create two different numbers and:
// Check if the first is greater than the second
// Check if the first is less than the second

let D = 8;
let E = 3;
console.log(D > E); // Greater than
console.log(D < E); // Less than

// 3. Create two values and check if they are **not equal** using `!==`.

let F = 10;
let G = 12;

console.log(F !== G); // Not equal

// Part 3: Logical Operators
// 1. Create two comparison expressions and combine them using `&&`.
// Print the result.

let H = 7 > 4;
let I = 2 < 5;

if (H && I) {
  console.log("Both conditions are true.");
}

// 2. Create two comparison expressions and combine them using `||`.
// Print the result.

let J = 6 > 9;
let K = 3 < 8;

if (J || K) {
  console.log("One of the conditions is true.");
}

// 3. Create a boolean variable and:
// Reverse its value using `!`
// Print the result

let isTomorrowFriday = false;
isTomorrowFriday != false;

console.log("is Tomorrow Friday?", isTomorrowFriday);

// Part 4: Truthy vs Falsy

// 1. Create a variable with a value that is **falsy**.
// Use it in an `if` statement
// Print `"Falsy value detected"` if it runs

let myFavouriteBook = "";

if (myFavouriteBook) {
  console.log("Falsy value detected");
}

// 2. Create a variable with a value that is **truthy**.
// Use it in an `if` statement
// Print `"Truthy value detected"` if it runs

let myFavouriteNumber = 7;
if (myFavouriteNumber) {
  console.log("Truthy value detected");
}

// 3. Create a variable and use `||` to give it a **default value**.
// Print the final value.
// Since I have used number use a different data type.
// **Example:**
// let number = 0 || 5;
// console.log(number);

let playingStatus = null || "Yes, I am playing";
console.log(playingStatus);

// Challenge (Optional)
// 1. Create a variable called `username`.
// If it exists (truthy), print `"Welcome back"`
// Otherwise, print `"Please sign up"`
// Use **logical** operators only.
let username = "Su";

if (username) {
  console.log("Welcome back");
} else if (!username) {
  console.log("Please sign up");
}
