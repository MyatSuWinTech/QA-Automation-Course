// 1. Array is a data type that can store multiple elements.

let fruits = ["Apple", "Orange", "Banana", "Kiwi"];
console.log(fruits);

// 2. Accessing array elements using index. - arrays start from index 0.

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Banana
console.log(fruits[3]); // Kiwi

// 3. Updating (modifying) array elements using index.

fruits[1] = "Mango";
console.log(fruits); // Orange is replaced by Mango

fruits[3] = "Strawberry";
console.log(fruits); // Kiwi is replaced by strawberry

// 4. .length - returns how many elements inside an array.
console.log(fruits.length); // 4

// -------- Methods that return new array --------

// 5. concat() - merges arrays into one array

const fruitsTwo = ["Apple", "Banana", "Orange"];
const moreFruits = ["Cherry", "Grapes"];
const allFruits = fruitsTwo.concat(moreFruits);
console.log(allFruits);

// 6.   .flat() - flattens nested arrays into a single array

const nestedNumbers = [[1, 2], [3, 4], [5]];
const flatNumbers = nestedNumbers.flat();

console.log(flatNumbers); // [1, 2, 3, 4, 5]
console.log(nestedNumbers); // original array remains unchanged

console.log(nestedNumbers[0][1]);

// 7.   .slice() - returns a portion of an array as a new array
// extracts a portion of an array
// slice ( 1 is index here - included, 4 is also index here - but excluded)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers.slice(1, 4)); // [3, 4, 5]

// Tohir's version // more clear way
const slicedNumbersArray = numbers.slice(1, 4);
console.log(slicedNumbersArray);

const myFavouriteColors = ["green", "yellow", "blue", "red", "white"];
console.log(myFavouriteColors.slice(1, 4)); // ["yellow", "blue", "red"]

// methods that change the original array //

// 1. Copying an array using spread operator (...)

const originalFruits = ["Kiwi", "Banana", "Cherry"];
const SuFruits = [...originalFruits];

console.log(originalFruits);
console.log(SuFruits);

// 2.   .push() - adds one or more elements to the end of an array

SuFruits.push("Coconut");
console.log(SuFruits); // Coconut is added at the end

// 3.   .pop() - removes the last element from an array

SuFruits.pop();
console.log(SuFruits); // Coconut is removed

// 4.   .unshift() - adds one or more elements to the beginning of an array

console.log(originalFruits);
SuFruits.unshift("Grapes");
console.log(SuFruits); // Grapes is added at the beginning

// 5.   .shift() - removes the first element from an array

console.log(originalFruits);
SuFruits.shift();
console.log(SuFruits); // Grapes is removed

// 6.  .reverse() - reverses the order of elements in an array

console.log(originalFruits);
SuFruits.reverse();
console.log(SuFruits); // order of elements is reversed
console.log(SuFruits.reverse()); // second version

// 7.   .sort() - sorts the elements of an array >> commonly used with numbers

const newNumbers = [3, 6, 8, 2, 1, 77, 32, 62];
console.log(newNumbers.sort((a, b) => a - b)); // sorts the array in ascending order

const stringArrays = ["a", "c", "z", "b"];
stringArrays.sort();
console.log(stringArrays); // sorts the array in alphabetical order

console.log(stringArrays.sort()); // sorts in reverse alphabetical order

// ---- Methods that find something in an array such as an element or index ---- //

// 1.  .indexOf() - returns the first index of a specified element inside an array
// always returns the first match //

const suFavouriteColors = [
  "black",
  "white",
  "red",
  "blue",
  "white",
  "red",
  "green",
];
console.log(suFavouriteColors.indexOf("red"));

// 2.    .lastIndexOf() - returns the last index of a specified element inside an array
// always returns the last match //

console.log(suFavouriteColors.lastIndexOf("red"));

// 3.  at() - returns the element at a specified index //

console.log(suFavouriteColors.at(3)); // blue is at index 3

// 4.  .includes() - checks if an array contains a specified element and returns a boolean value //

const nycTrainLanes = ["F", "E", "B", "D", "Z", "J"];

console.log(nycTrainLanes.includes("B")); // true
console.log(nycTrainLanes.includes("b")); // false

// ---- Joiners & Converters ---- //

// 1.  .join() - convert an array into string // (joins all elements of an array into a string )

const SuFruitsArray = ["Apple", "Banana", "Kiwi"];
const suFruitsString = SuFruitsArray.join(", ");
console.log(suFruitsString); // "Apple, Banana, Kiwi"

const suFruitsStringNothing = SuFruitsArray.join("");
console.log(suFruitsStringNothing); // "AppleBananaKiwi"

// 2.   Array.from() - creates an array from a string //

const string = "Hello";
const characters = Array.from(string);
console.log(characters); // ['H', 'e', 'l', 'l', 'o']

let anotherString = "MYO";
const anotherCharacters = Array.from(anotherString);
console.log(anotherCharacters); // wrong logic but works ['s', 't', 'r', 'i', 'n', 'g']

// 3.  Array.isArray() - checks if a value is an array and returns a boolean value //

const nycNumbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(nycNumbers)); // true

const newNumbersSet = 1; // this is not an array - just a number //
console.log(Array.isArray(newNumbersSet)); // false

// side study - array method //
//   .map() - goes through every item in an array, transform each item, returns a new array //
// does not change the original array.//
// .map() means - take each item -> change it -> build a new array.//

let number = [1, 2, 3];
let doubled = number.map((number) => number * 2);
console.log(doubled);

const ellsworthArray = ["Hancock", "DownEast", "BlueHill"];
const newHello = ellsworthArray.join().toLowerCase(); // join() -change to string and print//
console.log(newHello);

console.log(ellsworthArray.join().toLowerCase());

console.log(ellsworthArray);

// .map() means - take each item -> change it -> build a new array.//
const newArray = ellsworthArray.map((array) => array.toLowerCase());
console.log(newArray);

// Notes for .map() //
// loop through array - transform each value - build new array - return it //
// You don't see a loop but it's happening.//
// .map() = hidden loop + auto result array //
// if you use both loop and .map() inside a function- loop is actually fake - only .map() works all the things behind the scene.//

// Comparison - loop and .map() //

// Using a loop //
// let result = [];
// for (let item of arr) {
// result.push(item.toUpperCase());
// } - Flow - item -> change -> push -> repeat // You control everything //

// Using .map() //
// let result = arr.map(item => item.toUpperCase());
// Flow - item -> change -> auto collect -> repeat // JavaScript handles the pushing.//

// Loop: You carry groceries one by one into a bag //
// .map(): Machine carries groceries into a bag automatically // same result - less manual work.//

// When to use each in real work//

// Use .map() -  when you want to transform data,
// Clean, readable code, Functional style //
// Example: prices.map(p => p * 1.1);

// Use loops - when Complex logic, Multiple conditions, Early exits, Learning fundamentals
// Example:
// for (let item of arr) {
// if (item === target) break;
// }

// Transformation -> .map()
// Control/Logic -> loop

// for memory -
// .map() -> change items
// for... of -> visit items
// for -> full control

function squareWithLoop(arr) {
  let result = []; // want an array back //
  for (let num of arr) {
    result.push(num * num); // to make square root //
  }
  return result; // want an array back //
}

console.log(squareWithLoop([2, 3, 4]));

function squareWithMap(arr) {
  return arr.map((num) => num * num);
}

console.log(squareWithMap([2, 3, 4]));

function shoutAnimals(arr) {
  let result = [];
  for (let animal of arr) {
    result.push(animal.toUpperCase() + "!");
  }
  return result;
}

console.log(shoutAnimals(["cat", "dog"]));

function shoutAnimalsMap(arr) {
  return arr.map((a) => a.toUpperCase() + "!");
}

console.log(shoutAnimalsMap(["cat", "dog"]));
