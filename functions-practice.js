const carBrands = ["Honda", "Kia", "Nissan", "Lexus", "Toyota"];

const Numbers = [5, 2, 8, 32, 23];

let sentence = " I love truck cars !";

let decimal = 5.74321;

// PART 1: STRING + FUNCTIONS
// Task 1: Clean & Format Text
// Write a function that:
// 1. Takes a string
// 2. Removes extra spaces at the start and end
// 3. Converts the string to lowercase
// 4. Returns the cleaned string

function cleanString(sentence) {
  let cleaned = sentence.trim().toLowerCase();
  console.log(cleaned);
  return cleaned;
}

cleanString(sentence);

// Task 2: First & Last Character
// Write a function that:
// 1. Takes a string
// 2. Returns:
//     - The first character
//     - The last character
// // Must handle strings with spaces.

function name1(firstCharacter, lastCharacter) {
  let str1 = "  I love to read books!  ";
  let trimmed = str1.trim(); // "I love to read books!" - trimmed value //
  return {
    firstCharacter: trimmed.slice(0, 1),
    lastCharacter: trimmed.slice(19, 20),
  };
}

// name1();    // cannot print because
const functionResult = name1();
console.log(functionResult);

// Task 3: Word Counter
// Write a function that:
// 1. Takes a sentence
// 2. Splits it into words
// 3. Returns the number of words
// Use string and array methods only.

function countWords(sentence = "This is a game!") {
  let words = sentence.trim().split(" ");
  console.log(words);
  return words.length;
}

const functionResult1 = countWords();
console.log(functionResult1);

// PART 2: ARRAY + FUNCTIONS
//  Task 4: Brand Checker
// Write a function that:
// 1. Takes an array of car brands
// 2. Takes a brand name
// 3. Returns:
//     - "Brand exists" if found
//     - "Brand not found" otherwise
//  Case-insensitive comparison required.

function brandChecker(carBrands, carBrand) {
  const lowerCaseCarBrands = carBrands.map((element) => element.toLowerCase()); // have to normalize for lowercase for both - all elements inside array and parameter
  if (lowerCaseCarBrands.includes(carBrand.toLowerCase())) {
    // I use arrow function to lowerCase the elements inside the array, map() create new array and return modify value
    return "Brand exists";
  } else {
    return "Brand not found";
  }
}
console.log(brandChecker(carBrands, "HONDA"));

// function brandChecker2(carBrands, carbrand) {
//   if (carBrands.includes(carBrands.toLowerCase())) {
//     console.log("Brand exists");
//   } else {
//     console.log("Brand not found");
//   }
// }
// brandChecker2(carBrands, "HONDA");

// Task 5: Get Last Brand
// Write a function that:
// 1. Takes an array of car brands
// 2. Returns the **last brand** using an array method

function arrayForLastBrand(carArray = carBrands) {
  return carBrands.at(0);
}
const functionResult2 = arrayForLastBrand();
console.log(functionResult2);

//  Task 6: Format Brands List
// Write a function that:
// 1. Takes an array of car brands
// 2. Returns a **single string** of brands separated by commas

function commasForArrayOfCarBrand(carArray = carBrands) {
  return carBrands.join(", ");
}
const functionResult3 = commasForArrayOfCarBrand();
console.log(functionResult3);

// PART 3: NUMBER + FUNCTIONS
// Task 7: Safe Rounding
// Write a function that:
// 1. Takes a number
// 2. If the value is not a number → return `"Invalid number"`
// 3. Otherwise:
//     - Round it normally
//     - Return the result

function safeRound(Num1 = 5.7) {
  if (Num1 === "") {
    console.log("Invalid number");
  } else {
    console.log(Math.round(Num1));
  }
}

safeRound();

// Task 8: Price Comparison
// Write a function that:
// 1. Takes two prices
// 2. Returns:
//     - `"Prices are equal"`
//     - `"First is higher"`
//     - `"Second is higher"`

function priceComparison(price1, price2) {
  if (price1 === price2) {
    console.log("Prices are equal");
  } else if (price1 > price2) {
    console.log("First is higher");
  } else if (price1 < price2) {
    console.log("Second is higher");
  }
}
priceComparison(50, 70);

// Task 9: Random Whole Number
// Write a function that:
// 1. Returns a random **whole number between 1 and 10**
// 2. Explain the formula in comments

function randomWholeNumber() {
  // Math.random() gives a decimal between 0 (inclusive) and 1 (exclusive) // max 0.99 //
  // Multiply by 10 to get a number between 0 and 9.999...
  // Math.trun() removes the decimal and gives a whole number (0–9)
  // Add 1 to shift the range to 1–10  // inclusive 10 //
  return Math.trunc(Math.random() * 10) + 1;
}
const returnResult = randomWholeNumber();
console.log(returnResult);

// PART 4: CONDITIONAL THINKING
// Task 10: Budget Check
// Write a function that:
// 1. Takes:
//     - car price
//     - user budget
// 2. Returns:
//     - `"Within budget"`
//     - `"Over budget"`
//     - `"Invalid input"`

function budgetCheck(carPrice = 50000, userBudget = -200) {
  if (
    typeof carPrice !== "number" ||
    typeof userBudget !== "number" ||
    carPrice < 0 ||
    userBudget < 0
  ) {
    return "Invalid input";
  }
  if (carPrice <= userBudget) {
    return "Within budget";
  } else {
    return "Within budget";
  }
}

const result = budgetCheck();
console.log(result);

// FINAL MINI-CHALLENGE
// Task 11: Simple Car Deal Summary
// Write a function that:
// 1. Takes:
//     - car brand
//     - car price
//     - user budget
// 2. Cleans the brand name
// 3. Rounds the price
// 4. Checks if the car is affordable
// 5. Returns a sentence using **template literals**
// Sentence example (do not copy):
// Toyota costs 25000 and is within your budget.

function simpleCarDeal(carBrand = "KIA", carPrice = 20000, userBudget = 30000) {
  Math.round(carPrice);
  if (carPrice <= userBudget) {
    console.log("Within budget");
  }
  return `The price of ${carBrand} brand car that you want to buy is ${carPrice} and it's within your budget.`;
}

const resultForAffordable = simpleCarDeal();
console.log(resultForAffordable);
