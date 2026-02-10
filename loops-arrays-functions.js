// RULES (STRICT)
//  Every task must be written as a **function**
//  Do NOT create arrays inside functions
//  No objects
//  Follow the **required loop type** for each task
// PART 1: `for` LOOP (Index Practice)
// Task 1: Print All Elements
// **Use a `for` loop**
// Write a function that:
// 1. Takes an array
// 2. Prints each element

const fishArray = [
  "Salmon",
  "Tuna",
  "YellowTailTuna",
  "BlueFinTuna",
  "PinkSalmon",
];
function Su(fish) {
  for (let index = 0; index < fish.length; index++) {
    console.log("fish:", fish[index]);
  }
}
Su(fishArray);

// Task 2: Index + Value
// **Use a `for` loop**
// Write a function that:
// 1. Takes an array
// 2. Prints both the **index** and **value** of each element

const myFavouritePets = ["Kitten", "Puppy", "Parrot", "Rabbit", "Fish"];

function Myat(pets) {
  for (let index = 0; index < pets.length; index++) {
    console.log(`The value of index ${index} is ${pets[index]} in this array.`);
  }
}
Myat(myFavouritePets);

// Task 3: First and Last
// **Use a `for` loop**
// Write a function that:
// 1. Takes an array
// 2. Prints:
//     - The first element
// last element (using array[array.length - 1]) → We did not cover this last class specifically
// but it should make sense to you what it is doing. Please bring it up in class if you
// don’t understand it. Do not use .at(-1).

const myFriends = ["Ei", "Khai", "Pan", "Nile", "Nan"];

function Win(friends) {
  for (let i = 0; i < friends.length; i++) {
    if (i === 0) {
      console.log("First Element:", friends[i]);
    }
    if (i === friends.length - 1) {
      console.log("Last Element:", friends[i]);
    }
  }
}
// and array length is always one more count than index because index starts at zero and array length start conunting at 1.//
// That's why [index of last element = array length - 1] //
Win(myFriends);

//PART 2: `while` LOOP (Strings)
// Task 4: Loop Through a String
// **Use a `while` loop**
// Write a function that:
// 1. Takes a **string**
// 2. Uses a `while` loop
// 3. Prints **each character** one by one

const str = "Travelling";

function SuString(Travel) {
  let i = 0;
  while (i < Travel.length) {
    console.log(Travel[i]);
    i++;
  }
}
SuString(str);

//PART 3: `for` LOOP + CONTROL FLOW
//Task 5: Stop When Found
// **Use a `for` loop**
// Write a function that:
// 1. Takes an array and a value to search for
// 2. Loops through the array using a `for` loop
// 3. Stops the loop when the value is found

const flowersArray = ["Tulips", "Rose", "Carnations", "Peonies", "Lilies"];

function toSearchValue(flowers, value) {
  for (let i = 0; i < flowers.length; i++) {
    console.log(flowers[i]);
    if (flowers[i] === value) {
      // when the value is found //
      break; // inclusive //
    }
  }
}

toSearchValue(flowersArray, "Carnations");

// PART 4: `for...of` LOOP (Value Access)
//  Task 6: Print Values
// **Use a `for...of` loop**
// Write a function that:
// 1. Takes an array
// 2. Prints each value

const animalsInZoo = ["Tiger", "Lion", "Leopard", "Elephant", "Monkey"];

function animals(animalArray) {
  for (let item of animalArray) {
    console.log("Animal:", item);
  }
}
animals(animalsInZoo);

//Task 7: Skip a Value
// **Use a `for...of` loop**
// Write a function that:
// 1. Takes an array and a value to skip
// 2. Prints all values except the skipped one

const familyArray = ["Father", "Mother", "Sister", "Brother", "Aunt", "Uncle"];

function myFamily(skipArray, value) {
  for (let person of skipArray) {
    if (person.includes(value)) {
      continue; // continue -> skip - exclusive //
    }
    console.log("MyFamilyMember:", person);
  }
}
myFamily(familyArray, "Uncle");

// PART 5: APPLYING LOGIC
// Task 8: Uppercase Strings
// **Use both `for` and `for...of` loops. Write two separate functions for different loop types.**
// Write a function that:
// 1. Takes an array of strings
// 2. Returns a **new array** with all strings converted to **uppercase**
// Do NOT modify the original array

const footWears = ["sandals", "heels", "boots", "shoes", "flip-flops"];

function myFootWearsCollection(myFootWears) {
  let result = [];
  for (let i = 0; i < myFootWears.length; i++) {
    // i = 0 → "sandals" → "SANDALS" → push
    result.push(myFootWears[i].toUpperCase()); // i = 1 → "heels" → "HEELS" → push
  }
  return result;
}
console.log(myFootWearsCollection(footWears));

function myFavouriteFootWears(typesOfFootWears) {
  let result = [];
  for (let val of typesOfFootWears) {
    // used for...of loop, build a new array and
    result.push(val.toUpperCase()); // convert to UpperCase
  }
  return result; // return result
}
console.log(myFavouriteFootWears(footWears)); // print out //

// Key Difference between classic for loop and for.. of loop
// Classic for loop -> use index → access item → transform → push
// for... of loop ->  get item directly → transform → push

// Task 9: Reverse Order (Challenge)
// **It’s okay if you are not able to do but please try.**
// **Use a `for` loop**
// Write a function that:
// 1. Takes an array
// 2. Prints elements from **last to first**
// Do NOT use `.reverse()`
// HINT: You have to start at array length, Your condition must include 0, You have to use i--;

function reverseOrder(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
reverseOrder(["A", "B", "C", "D", "E"]);

// FINAL TASK
// Task 10: Length Checker
// **Use ANY loop**
// Write a function that:
// 1. Takes an array of strings
// 2. Prints only strings longer than **4 characters**
// Use `.length` on strings only

const characters = ["abc", "def", "ghi", "jklmnop"];

function fourCharactersString(array) {
  for (let val of array) {
    if (val.length > 4) {
      console.log(val);
    }
  }
}
fourCharactersString(characters);
