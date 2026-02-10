// looping over project //
const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

for (const Su in person) {
  console.log(Su + ": " + person[Su]); // can't use dot notation inside the loop//
} // just use the [] bracket notation  //

// 2. "in" keyword - check if a key exists. // and print boolean value //

console.log("name" in person);
console.log("weight" in person);

// 3. Accessing object properties (keys) //

console.log(person.name); // dot notation //
console.log(person.age);
console.log(person.isStudent);

// or //

console.log(person["name"]); // bracket notation //
console.log(person["age"]);

// 4. Adding and updating properties //

console.log(person);

// Adding - if a key does not exist, then it adds it to the object. //

person.height = 170;
console.log(person);

// Updating - if a key already exists, then it updates the value of the specific key inside the object. //

person.age = 30;
console.log(person);

// 5.  Removing properties //

delete person.height;
console.log(person);

// 6. Object method //
// function inside Object //
const personTwo = {
  name: "Su",
  age: 19,
  isStudent: true,
  greet: function () {
    // two ways to write function inside obj// also known as "method' because it is inside object. //
    console.log("Hello, my name is Myat");
  },
  bye() {
    // short and simple //
    console.log(`"I am ${this.name}, bye"`);
  },
};

personTwo.greet(); // calling or invoking method //
personTwo.bye(); // calling method //

// 7.  Using "this" keyword - can access key inside object //

const car = {
  brand: "Tesla",
  speed: 120,
  info(number1, number2) {
    //number1, number2 are parameters // I did not use these parameters in this obj - just showing how it is //
    console.log(`${this.brand} is going at ${this.speed} km/h`);
  },
};

car.info();

// 8.  Built-in Object method // Object.keys, Object.values, Object.entries for both //

const soccerPlayer = {
  name: "Ronaldo",
  age: 41,
  country: "Portugal",
};

const keys = Object.keys(soccerPlayer);
console.log(keys.includes("age")); // print boolean value //

console.log(Object.keys(soccerPlayer));
console.log(Object.values(soccerPlayer));
console.log(Object.entries(soccerPlayer)); // output is nested array //
