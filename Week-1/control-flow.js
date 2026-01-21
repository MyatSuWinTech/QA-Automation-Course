// 1. Example when the condition is true

// 'if' is keyword provided by JS
// Inside parenthesis (), we need to give a condition.
// Inside curly braces {}, we have provide the code that we want to run if the condition is true.

let age = 34;

// Condition becomes true behind the scene.
if (age > 18) {
  console.log("Hey, you are at an age that you can go to college!!!");
}

// 2. If - Example when the condition is false.

age = 13;

if (age > 18) {
  console.log("Hey, you are at an age that you can go to college!!!");
}

console.log(age);

// 3. Else if

let studentScore = 75;

if (studentScore > 90) {
  console.log("Grade A");
} else if (studentScore > 75) {
  console.log("Grade B");
}

// 4. Else

let isRaining = false;

if (isRaining) {
  console.log("Take your umbrella with you, you are going to wet!");
} else {
  console.log("You don't need umbrella, it's sunny outside!");
}

// 5. If, Else if, Else

// '=' is used for assignment
// '===' is used for comparison

let goalScore = 1;

if (goalScore > 6) {
  console.log("You are winning!");
} else if (goalScore === 5) {
  console.log("It is a time game!");
} else if (goalScore > 4) {
  console.log("You should try harder!");
} else if (goalScore < 2) {
  console.log("You are loosing!");
}

// 6. Switch statement

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("I was waiting for this day");
}

// Test 1

let A = "Hi";
A = B;
