const carBrands = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW"];
const Numbers = [10, 23, 45, 12, 34];
const stringWithExtraSpaces = "  Hello,  World!  ";
const decimalNumber = 123.456789;

// PART 1: ARRAYS (Car Brands)
// Task 1: Accessing & Properties
// Write code to:
// 1. Log the **first car brand*
// 2. Log the **last car brand** using a method
// 3. Log how many car brands are in the array
// Explain each output using comments.

console.log(carBrands[0]); // 1. Logs "Toyota", the first element in the carBrands array

console.log(carBrands.at(3)); //2.  using .at() method to log the last car brands

console.log(carBrands.length); // 3. used .length method to Log how many car brands are in the array

// Task 2: Updating Elements
// Write code to:
// 1. Change the **second car brand**
// 2. Change the **last car brand**
// 3. Log the updated array

carBrands[1] = "Kia"; // 1. Changed the second car brand from "Honda" to "Kia"

carBrands[3] = "Lexus"; // 2. Changed the last car brand from "Chevrolet" to "Lexus"

console.log(carBrands); // 3. Log for the updated carBrands array

// Task 3: Mutator Methods
// Write code to:
// 1. Add a new car brand to the **end**
// 2. Remove the **last** car brand
// 3. Add a new car brand to the **beginning**
// 4. Remove the **first** car brand
// 5. Reverse the array
// 6. Sort the array alphabetically
// Log the array **after each step**.

carBrands.push("Hyundai"); // 1. Added "Hyundai" to the end of the array
console.log(carBrands); // Log after adding "Hyundai"

carBrands.pop(); // 2. Removed the last car brand ("Hyundai")
console.log(carBrands); // Log after removing the last car brand

carBrands.unshift("Nissan"); // 3. Added "Nissan" to the beginning of the array
console.log(carBrands); // Log after adding "Nissan"

carBrands.shift(); // 4. Removed the first car brand ("Nissan") in the array
console.log(carBrands); // Log after removing the first car brand

carBrands.reverse(); // 5. Reversed the order of the array
console.log(carBrands); // Log after reversing the array

carBrands.sort(); // 6. Sorted the array alphabetically
console.log(carBrands); // Log after sorting the array

// Task 4: Finder Methods
// Write code to:
// 1. Check if `"Toyota"` exists in the array
// 2. Find the index of `"BMW"`
// 3. Find the last index of a car brand that appears more than once
// Add comments explaining the results.

console.log(carBrands.includes("Toyota")); // 1. checking if `"Toyota"` exists in the array using .includes() method.

console.log(carBrands.indexOf("BMW")); // 2. Finding the index of `"BMW"` using .indexOf() method and output is index 0 because I sorted the array before this.

console.log(carBrands.lastIndexOf("Ford")); // 3. log for Finding the last index of a car brand that appears more than once

// Task 5: Joiners
// Write code to:
// 1. Convert the car brands array into a **single string**
console.log(carBrands.join(", ")); // 1.I used .join() method to convert the car brands array into a **single string**

// 2. Check if the car brands variable is an array
console.log(Array.isArray(carBrands)); // 2.I used Array.isArray() method to check and it returns true

// 3. Convert the word `"ENGINE"` into an array of characters

const str = "ENGINE";
const convertedArray = Array.from(str);
console.log(convertedArray);

// PART 2: STRING MANIPULATION
// Task 6: Clean a String
// Write code to:
// 1. Remove extra spaces from the string
// 2. Log the cleaned string
// 3. Log its length

// const stringWithExtraSpaces = "  Hello,  World!  ";
const cleanedString = stringWithExtraSpaces.trim(", ");
console.log(cleanedString);

console.log(cleanedString.length);

// Task 7: Case & Access
// Write code to:
// 1. Convert the string to **uppercase**
// 2. Convert it to **lowercase**

const myFavouriteFood = "Sushi";
console.log(myFavouriteFood.toUpperCase());
console.log(myFavouriteFood.toLowerCase());

const myFavouriteDrink = "WATER";
console.log(myFavouriteDrink.toLowerCase());

// 3. Log the **first** character
console.log(myFavouriteFood.slice(0, 1));

// 4. Log the **last** character
console.log(myFavouriteFood.slice(4, 5));

// Task 8: Slice & Replace
// Write code to:

// 1. Extract the **first word**
// 2. Extract the **last word**
// 3. Replace one word with another

const myFavouriteNovel = "War and Peace";
console.log(myFavouriteNovel.slice(0, 4));

console.log(myFavouriteNovel.slice(8, 13));

console.log(myFavouriteNovel.replace("War", "No War"));

// Task 9: Search Methods
// Write code to:
// 1. Check if the string includes `"car"`
// 2. Find the position of a word
// 3. Check if the string starts with a specific word
// 4. Check if the string ends with a specific word

const thingsIneedToUse = "car, phone, clothes";
console.log(thingsIneedToUse.includes("car"));

console.log(thingsIneedToUse.indexOf("h"));

console.log(thingsIneedToUse.startsWith("ar"));

console.log(thingsIneedToUse.endsWith("es"));

// Task 10: Split & Concat
// Write code to:
// 1. Split the sentence into words
// 2. Join two strings using a method (not `+`)

const ToBuyList = "Groceries"; // ("") - Empty string = split every character.//
console.log(ToBuyList.split(""));

const ToDoList = "I need to go to the grocery store.";
const toSplitSentence = ToDoList.split(" "); // split when you found space. //
console.log(toSplitSentence);

console.log(ToBuyList.concat(" ", ToDoList)); // .concat(" ", secondString) //

// Task 11: Template Literals
// Create variables for:
// - car brand
// - car year (has to be in the past)
// - car age (think about how you get the car age)
// Create a sentence using the variables and print the output

const secondHandCarBrand = "Honda";

const secondHandCarYear = 2016;

const secondHandCarAge = 10;

const myCar = `"The brand of my car is ${secondHandCarBrand} and I got it in ${secondHandCarYear}, so my car is ${secondHandCarAge} years old now."`;
console.log(myCar);

// PART 3: NUMBERS
// Task 12: Rounding
// Write code to:
// 1. Round a decimal normally
// 2. Always round down
// 3. Always round up
// 4. Remove the decimal part

const num1 = 5.7;
console.log(Math.round(num1));

const num2 = 5.8;
console.log(Math.floor(num2));

const num3 = 5.3;
console.log(Math.ceil(num3));

const num4 = 5.1233;
console.log(Math.trunc(num4));

// Task 13: Formatting
// Write code to:
// 1. Format a number to **2 decimal places**
// 2. Explain (in comments) why the result is **not a number**

const num5 = 7.12345;
const format = num5.toFixed(2);
console.log(format); // toFixed() is formatting method- Format number to specific decimal places // but returns as a string, not a number //

// Task 14: Conversions
// Write code to:
// 1. Convert a numeric string into a number
// 2. Convert a decimal string into an integer
// 3. Convert a decimal string into a float

const num6 = "3454567";
console.log(Number(num6));

const num7 = "78.3456";
console.log(parseInt(num7));

const num8 = "65.8932";
console.log(parseFloat(num8));

// Task 15: Checking
// Write code to:
// 1. Check if a value is **Not a Number**
// 2. Check if a number is an integer

let checkingNotANumber = "abc";
console.log(isNaN(checkingNotANumber));

let checkingAnInteger = 3.4;
console.log(Number.isInteger(checkingAnInteger));

// Task 16: Math Utilities
// Write code to:
// 1. Find the absolute value of a number

let findingAbsoluteValue = -10;
console.log(Math.abs(findingAbsoluteValue));

// 2. Find the smallest number
let numbers = [5, 6, 8, 3, 4];
let findingSmallestNumber = Math.min(...numbers);

console.log(findingSmallestNumber);

// 3. Find the largest number
let numbersTwo = [3, 5, 9, 6, 2];
let findingLargestNumber = Math.max(...numbersTwo);

console.log(findingLargestNumber);

// 4. Raise a number to a power
let numbersThree = 3;
let raisingPower = Math.pow(numbersThree, 3);

console.log(raisingPower);

// 5. Find the square root of a number
let numbersFour = 81;
let findingSquareRoot = Math.sqrt(numbersFour);

console.log(findingSquareRoot);

// Task 17: Random Numbers
// Write code to:
// 1. Generate a random number between 0 and 1
let randomNumber = Math.random();
console.log(randomNumber); // always changing //

// 2. Generate a random whole number between **1 and 10**

let random1to10 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(random1to10);

// 3. Explain the formula in comments

// Step 1: Math.random() → gives decimal between 0 and 1 // 0 ~ 0.99
// Step 2: multiply by 10 → expands range to 0 ~ 9.999
// Step 3: Math.floor() → removes decimals (0–9)
// Step 4: +1 → shifts range to 1–10

// FINAL MINI CHALLENGE
// Write a program that:
// 1. Takes a sentence about cars
// 2. Cleans it (trim + case change)

const cars = "  This is my car!  ";
// const carstrimmed = cars.trim();
// const cleaned = carstrimmed.toLowerCase();
const cleanedMore = cars.trim().toLowerCase();
console.log(cleanedMore);

// 3. Splits it into words

const splittingIntoArray = cleanedMore.split(" ");
console.log(splittingIntoArray);

// 4. Prints the number of words using a template literal

const PrintingWords = `The number of words in the array is ${splittingIntoArray.length}.`;
console.log(PrintingWords);

console.log(
  `The number of words in the array is ${splittingIntoArray.length}.`,
);
