let N1 = 2;
let N2 = 5;

console.log(N1 + N2);

let myName = "SU";
console.log(myName);
console.log("Hello, " + myName);

let city = "New York";
console.log(city);
console.log("Hi, " + city);

let a = 10;
let b = 3;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("b is greater than a");
}

let c = 6;

if (c > 10) {
  console.log("Big Number");
} else {
  console.log("Small Number");
}

let d = 7;

if (d % 2) {
  console.log("Odd Number");
} else {
  console.log("Even Number");
}

let day = 5;

switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

let myCousin = {
  name: "Anna",
  age: 10,
  city: "Los Angeles",
};

console.log(myCousin.name);
console.log(myCousin.age);

let username = "user123";
let password = "pass456";

if (username === "user123" && password === "pass456") {
  console.log("Login successful");
} else {
  console.log("Login failed");
}
