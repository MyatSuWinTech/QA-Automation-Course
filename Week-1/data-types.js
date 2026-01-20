// 1. String

const name = "Su";
const myname = "Myat"; // single code but getting converted to double quotes on save.
const studentName = "Tun";

console.log(name); // reserved keywords in JS
console.log(myname);
console.log(studentName);

// 2. Number

const birthYear = 1985;
const carModel = 2025;
const studentScore = 90.5;

console.log(birthYear);
console.log(carModel);
console.log(studentScore);

// 3. Boolean (data type)

// The light is off when you enter the room
let isLightOn = false;
console.log("Is the light on?", isLightOn);

// Later, someone came in and turned on the light
isLightOn = true;
console.log("Is the light on?", isLightOn);

// Try to start boolean variables names with "is" -----//

// let isStudentPresent;
// let isGameStarted;
// let isMovieGood;

// 4. Null (Intentional absence of any value)

// In the assigned seats in a party, it is 4 pm, nobody has arrived so it is null.
let seatOwner = null;
console.log("Seat status", seatOwner);

// Party starts at 5 pm, the seat has an owner now.
seatOwner = "MyatSuWin";
console.log("Seat status", seatOwner);

// 5. Undefined (declared but not assigned)

// Before teacher checking attendance
let studentPresent;
console.log("studentPresent?", studentPresent);

// later, after teacher checking attendance
studentPresent = "Yes";
console.log("studentPresent?", studentPresent);

// 6. Arrays (Non-primitive ~ Mutable) >> square brackets
// Empty arrays
// const colors = [];

// recommended array // Make your variables name descriptive, try to use same data type //
const colors = ["red", "green", "blue"];
console.log(colors);

const studentScores = [70, 85, 88, 95];
console.log(studentScores);

// Not Recommened for arrays!!! - Array that has all kind of data types
const array = ["Johnathan", 30, true];
console.log(array);

// 7. Object (Non-primitive  ~ Mutable) >> curly braces

// Left side inside curly braces is "keys" and the right side is "values"
let personOne = {
  name: "Alex",
  age: 42,
  isStudent: false,
  isInNYC: true,
  favouriteFruits: ["banana", "apple", "mango"],
};

console.log(personOne);

let soccerPlayer = {
  name: "Cristiano",
  age: 40,
  isSoccerPlayer: true,
  country: {
    countryName: "Saudi Arabia",
    city: "Riyadh",
    zipCode: "567890",
  },
};

console.log(soccerPlayer);
console.log(soccerPlayer.age);
// Accessing a key in an object
console.log(soccerPlayer.country);
console.log(soccerPlayer.countryName); // undefined - cannot print //
