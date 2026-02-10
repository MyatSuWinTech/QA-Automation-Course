// PART 1: CREATE AN OBJECT
// Task 1: Object Creation
// Create **one object** that represents something of your choice. (Examples: car, student, phone, video game, book, movie, etc.)
// Your object must include:
// - At least **4 properties**
// - At least **1 string**
// - At least **1 number**
// - At least **1 nested object**

// const myFavouriteMovie = {
//   name: "Purple Plain",
//   filmingYear: 1940,
//   releaseYear: 1954,
//   publishBy: "Michael Joseph Ltd",
//   casts: {
//     mainActor: "Gregory Peck",
//     mainActress: "Win Min Than",
//   },
// };

//PART 2: OBJECT METHODS
// Task 2: Description Method
// Add a method that:
// 1. Uses `this`
// 2. Returns a sentence describing the object

// const myFavouriteMovie = {
//   name: "Purple Plain",
//   filmingYear: 1940,
//   releaseYear: 1954,
//   publishBy: "Michael Joseph Ltd",
//   casts: {
//     mainActor: "Gregory Peck",
//     mainActress: "Win Min Than",
//   },
//   describe: function () {
//     // Adding Method
//     return `The movie "${this.name}" by ${this.director} was released in ${this.releaseYear}.`;
//   },
// };
// console.log(myFavouriteMovie.describe());

// Task 3: Update Method
// Add a method that:
// 1. Takes **parameters**
// 2. Updates one property using `this`
// 3. Returns the updated value

// const myFavouriteMovie = {
//   name: "Purple Plain",
//   filmingYear: 1940,
//   releaseYear: 1954,
//   publishBy: "Michael Joseph Ltd",
//   casts: {
//     mainActor: "Gregory Peck",
//     mainActress: "Win Min Than",
//   },
//   updateOneProperty: function (newYear) {
//     this.releaseYear = newYear;
//     return this.releaseYear;
//   },
// };
// console.log(myFavouriteMovie.updateOneProperty(1947));

// Task 4: Calculation Method
// Add a method that:
// 1. Uses `this`
// 2. Performs a calculation
// 3. Returns the result

// const myFavouriteMovie = {
//   name: "Purple Plain",
//   filmingYear: 1940,
//   releaseYear: 1954,
//   publishBy: "Michael Joseph Ltd",
//   casts: {
//     mainActor: "Gregory Peck",
//     mainActress: "Win Min Than",
//   },
//   filmingDuration: function () {
//     return this.releaseYear - this.filmingYear;
//   },
// };
// console.log(myFavouriteMovie.filmingDuration());

// PART 3: OBJECT ACCESS
// Task 5: Dot vs Bracket
// Access **two properties** using:
// - dot notation
// - bracket notation

// console.log(myFavouriteMovie.name);
// console.log(myFavouriteMovie["director"]);

// Task 6: Property Checker
// Write a function (outside the object) that:
// 1. Takes an object and a property name
// 2. Uses the `in` operator
// 3. Returns whether the property exists

const myFavouriteMovie = {
  name: "Purple Plain",
  filmingYear: 1940,
  releaseYear: 1954,
  publishBy: "Michael Joseph Ltd",
  casts: {
    mainActor: "Gregory Peck",
    mainActress: "Win Min Than",
  },
};

function checkingProperty(obj, property) {
  return property in obj;
}
console.log(checkingProperty(myFavouriteMovie, "casts"));

// PART 4: OBJECT METHODS PRACTICE
// Task 7: Method Calls
// 1. Call **each object method**
// 2. Store the returned values
// 3. Print them to the console

// const description = myFavouriteMovie.describe();
// const updated = myFavouriteMovie.updateOneProperty(1947);
// const Calculated = myFavouriteMovie.filmingDuration();

// console.log(description);
// console.log(updated);
// console.log(Calculated);

// PART 5: PROPERTY MANIPULATION
// Task 8: Add a New Property
// - Add a new property to your object **without using a method**
// - Print the object to see the added property

myFavouriteMovie.filmingPlace = "Sri Lanka";

console.log(myFavouriteMovie);

// Task 9: Update a Property Directly
// - Update an existing property directly (not through a method)
// - Print the updated value

myFavouriteMovie.filmingPlace = "Burma";
console.log(myFavouriteMovie);

// Task 10: Delete a Property
// - Delete one property from your object
// - Print the object to confirm it’s removed

delete myFavouriteMovie.filmingPlace;
console.log(myFavouriteMovie);

// PART 6: OBJECT UTILITY METHODS
// Task 11: List Object Keys
// - Use `Object.keys()` to list all property names
// - Print the result
// - Check if a specific property name exists in the returned value from `Object.keys()`.

const keys = Object.keys(myFavouriteMovie);
console.log(keys);

console.log(keys.includes("name"));

// Task 12: List Object Values
// - Use `Object.values()` to list all property values
// - Print the result
// - Check if a specific property value exists in the returned value from `Object.values()`.

const values = Object.values(myFavouriteMovie);
console.log(values);

console.log(values.includes("Purple Plain"));

// Task 13: List Object Entries
// - Use `Object.entries()` to list all key-value pairs
// - Print the result
// - Flatten the array returned from `Object.entries()` .
// - Print the flattened array

const pairs = Object.entries(myFavouriteMovie);
console.log(pairs);

const flattenedArray = pairs.flat();
console.log(flattenedArray);

// PART 7: NESTED OBJECT PRACTICE
// Task 14: Access Nested Properties
// - Access at least **two properties** from the nested object
// - Use **dot notation**
// - Print both values

console.log(myFavouriteMovie.casts.mainActor);
console.log(myFavouriteMovie.casts.mainActress);

// Task 15: Update Nested Properties
// - Update one property inside the nested object
// - Print the updated nested object

myFavouriteMovie.casts.mainActor = "Gregory Henry Peck";
console.log(myFavouriteMovie.casts.mainActor);
