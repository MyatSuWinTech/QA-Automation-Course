// 1. Identify the Data Type
// Write the data type of each value:

// "Hello World" // Data Type = String.

// 42   // Data Type = Number.

// true  // Data Type = Boolean.

// null  // Data Type = Null.

// undefined   // Data Type = Undefined.

//  [1, 2, 3]  // Data Type = Array.

// { name: "Alex", age: 20 }   // Data Type = Object.

// 2. Create Variables
// Create variables for each of the following and assign appropriate values:

// A string for your favorite movie
const myFavouriteMovie = "Erin Brokovich";
console.log(myFavouriteMovie);

// A number for your age
let myAge = 33;
console.log(myAge);

// A boolean for whether you like JavaScript
// I do not like JS when I start learning.
let isItCorrectYouLikeJavaScript = false;
console.log(
  "is it correct you like Java Script?",
  isItCorrectYouLikeJavaScript,
);

// I like JS now after I learnt a lot.
isItCorrectYouLikeJavaScript = true;
console.log(
  "is it correct you like Java Script?",
  isItCorrectYouLikeJavaScript,
);

// A variable with undefined value
// Nobody wins the jackpot-lottery yet.
let lotteryWinnner;
console.log("lotterywinnner?", lotteryWinnner);

// after somebody wins the jackpot prize
lotteryWinnner = "James";
console.log("lotteryWinnner?", lotteryWinnner);

// A variable with null value
// Nobody is in the room in the afternoon.
let roomOwner = null;
console.log("roomStatus", roomOwner);

// In the evening, somebody came into the room and sleep.
roomOwner = "John";
console.log("roomStatus", roomOwner);

// 3. Primitive vs Non-Primitive
//Answer the following questions:
//a) Which of the following are **primitive** and which are **non-primitive**?

// let a = "JS";               // primitive data type
// let b = [10,20];            // non-primitive data type
// let c = 100;                // primitive data type
// let d = { city:"Paris" };   // non-primitive data type

//b) Explain in 1–2 sentences why arrays and objects are called non-primitive.
// Arrays and objects are called non-primitive data type because
// non-primitive data types are mutable and has lego structure, meaning the values are changable and we can store multiple values in non-primitive data type.

// 4. Modify the Value
// Look at the code below and answer the questions:

// let x ="Hello";
// let y = x;
// y ="Hi";

// a) What is the value of `x`?
// The value of `x` is "Hello".

// b) Is this an example of primitive or non-primitive behavior? Why?
// This is an example of primitive behavior because firstly, I declared variable name as 'x' with value "Hello".And then I declared variable name 'y' with the value of 'x', and then I reassigned variable name 'y' with the new vaue "Hi".

// 5. Array
// Create 3 different arrays that contains 5 elements each.
// Tasks:
// Use different data types for each array.
// Log (console.log) the entire array

const fruits = ["orange", "apple", "grapes", "watermelon", "papaya"];
console.log(fruits);

const tennisScore = [11, 15, 17, 19, 20];
console.log(tennisScore);

const appointsmentInWeekDays = [true, false, true, false, true];
console.log(appointsmentInWeekDays);

console.log(fruits, tennisScore, appointsmentInWeekDays);

// 6. Object
// Create 3 different objects representing **something real** (example: phone, car, book, student, game etc).
// Requirements for each object:
// At least 5 properties
// At least 1 property must be an array
// Tasks:
// Log (console.log) the entire object
// Access **two properties (keys)** using dot notation and print the value of those properties.

let phone = {
  name: "iPhone",
  modelName: "iPhone 17 Pro Max",
  modelNumber: "MFXG123",
  serialNumber: "LDE3P2TUR1OOK",
  iosVersion: 26.1,
  colors: ["green", "red", "pink", "blue"],
};
console.log(phone);
console.log(phone.name);
console.log(phone.iosVersion);

let book = {
  name: "Pollyanna",
  publishedYear: 1913,
  publisher: "L.C. Page",
  genres: ["Novel", "Children's Literature", "Fiction"],
  centralTheme: "gladGame",
};
console.log(book);
console.log(book.name);
console.log(book.centralTheme);

let car = {
  modelName: "2025HondaCR-V",
  driveTrain: "All-WheelDrive",
  horsePower: 145,
  parkingSensor: true,
  colors: ["black", "grey", "white"],
};
console.log(car);
console.log(car.modelName);
console.log(car.parkingSensor);

// Part B: Control Flow
// 7. If Statement
// Write a program that:
// Checks if a number is **positive**
// Prints `"Positive number"` if true

let totalpens = 40;

if (totalpens > 30) {
  console.log("Hey, I can borrow you my pens!!");
}

// 8. If–Else
// Create a **boolean variable** (your choice of meaning).
// Tasks:
// Use `if / else` to log different messages depending on the boolean value
// Change the value and run the code again

let isDarkOutside = true;

if (isDarkOutside) {
  console.log("Please come back home, I'll be waiting for dinner");
} else {
  console.log("Can you go to supermarket for shopping?");
}

isDarkOutside = false;

if (isDarkOutside) {
  console.log("Please come back home, I'll be waiting for dinner");
} else {
  console.log("Can you go to supermarket for shopping?");
}

// 9. Else If
// Write a program that:
// Takes a student’s score
// Prints:
// `"Grade A"` if score > 90
// `"Grade B"` if score > 80
// `"Grade C"` if score ≥ 70
// `"Fail"` otherwise

let studentScore = 95;

if (studentScore > 90) {
  console.log("Grade A");
} else if (studentScore > 80) {
  console.log("Grade B");
} else if (studentScore >= 70) {
  console.log("Grade C");
} else if (studentScore < 60) {
  console.log("Fail");
}

studentScore = 82;

if (studentScore > 90) {
  console.log("Grade A");
} else if (studentScore > 80) {
  console.log("Grade B");
} else if (studentScore >= 70) {
  console.log("Grade C");
} else if (studentScore < 60) {
  console.log("Fail");
}

studentScore = 70;

if (studentScore > 90) {
  console.log("Grade A");
} else if (studentScore > 80) {
  console.log("Grade B");
} else if (studentScore >= 70) {
  console.log("Grade C");
} else if (studentScore < 60) {
  console.log("Fail");
}

studentScore = 59;

if (studentScore > 90) {
  console.log("Grade A");
} else if (studentScore > 80) {
  console.log("Grade B");
} else if (studentScore >= 70) {
  console.log("Grade C");
} else if (studentScore < 60) {
  console.log("Fail");
}

// 10. Switch Statement
// Create a variable with **multiple possible values** (string or number - your choice).
// Tasks: Use a `switch` statement
// Include **at least 3 cases** and a `default`
// Log different messages for each case
// Do two examples one with `break` and one without and see the difference.

let weather = 2;

switch (weather) {
  case 1:
    console.log("Summer");
    break;
  case 2:
    console.log("RainySeason");
    break;
  case 3:
    console.log("Winter");
    break;
  default:
    console.log("Myanmar has three seasons.");
}

weather = 1;

switch (weather) {
  case 1:
    console.log("Summer");
    break;
  case 2:
    console.log("RainySeason");
    break;
  case 3:
    console.log("Winter");
    break;
  default:
    console.log("Myanmar has three seasons.");
}

weather = 4;

switch (weather) {
  case 1:
    console.log("Summer");
    break;
  case 2:
    console.log("RainySeason");
    break;
  case 3:
    console.log("Winter");
    break;
  default:
    console.log("Myanmar has three seasons.");
}

weather = 3;

switch (weather) {
  case 1:
    console.log("Summer");
    break;
  case 2:
    console.log("RainySeason");
    break;
  case 3:
    console.log("Winter");
    break;
  default:
    console.log("Myanmar has three seasons.");
}

// without break for two examples

weather = 2;

switch (weather) {
  case 1:
    console.log("Summer");
  case 2:
    console.log("RainySeason");
  case 3:
    console.log("Winter");
  default:
    console.log("Myanmar has three seasons.");
}

weather = 1;

switch (weather) {
  case 1:
    console.log("Summer");
    break;
  case 2:
    console.log("RainySeason");
    break;
  case 3:
    console.log("Winter");
    break;
  default:
    console.log("Myanmar has three seasons.");
}
// the difference between with break and without break = print is looping after one of the conditions is matched.

// 11. Challenge
let CashInBank = 500;

CashInBank = 300;

if (CashInBank < 500) {
  console.log(-12);
}

CashInBank = 400;

switch (CashInBank) {
  case 1:
    console.log(-2);
  case 2:
    console.log(3);
  case 3:
    console.log(35);
  default:
    console.log(345);
}
