// looping each character in a string //

const word = "hello";

for (let char of word) {
  console.log("Character:", char);
}

// looping each element in an array //

const fruits = ["kiwi", "banana", "orange", "mango"];

for (let fruit of fruits) {
  console.log("I love", fruit);
}

// Key Difference between classic for loop and for.. of loop

// Classic for loop -> use index → access item → transform → push

// for... of loop ->  get item directly → transform → push
