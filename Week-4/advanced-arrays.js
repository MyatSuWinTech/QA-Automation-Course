const numbers = [3, 6, 9, 12, 15];

// map() -> Transforms each element inside an array and then returns a new array
// Try to use arrow functions

const tripled = numbers.map((num) => num * 2);
console.log(tripled);

// OR

const tripleTwo = numbers.map(function (num) {
  // function inside function //
  return num * 3;
});
console.log(tripleTwo);

// OR

const tripleThree = numbers.map((num) => {
  return num * 2;
});
console.log(tripleThree);
// Behind the scene, this is what is happening
// // 3 * 3
// array.push(3 * 3);
// // 6 * 3
// array.push(6 * 3);
// // 9 * 3
// array.push(9 * 3);

// const tripled = [];
// console.log(tripled);

// for (let i = 0; i < numbers.length; i++) {
//   triplet.push(numbers[i] * 3);
// }
// console.log(triplet);

// filter -> keeps only the elements that pass a test and returns a new array

// const numbers = [3, 6, 9, 12, 15];
const numbersGreaterTen = numbers.filter((num) => num > 10);

// forEach () - perform an action against each element inside the array// it's like map but (Does not return an array)

const fruits = ["APPLE", "BANANA", "KIWI", "GRAPES"];

fruits.forEach((fruit) => console.log(fruit.toLowerCase())); //Used Arrow Function OR //
// function dsad(str) { // OR //
//   console.log(str.toLocaleLowerCase());
// }

// OR //

const fruitsTwo = ["APPLE", "BANANA", "KIWI", "GRAPES"];

for (let i = 0; i < fruitsTwo.length; i++) {
  console.log(fruitsTwo[i].toLowerCase());
}

// Chaining methods

// One way to do it

const numbersChain = [10, 13, 18, 20, 25, 32, 50, 72, 96, 102];

const filterNumbers = numbersChain.filter((num) => num % 2 === 0); // filtered even numbers //
console.log(filterNumbers);

const squaredNumbers = filterNumbers.map((num) => num * num);
console.log(squaredNumbers);

const result = squaredNumbers.every((num) => num > 50);
console.log(result);

// OR

const resultTwo = numbersChain
  .filter((num) => num % 2 === 0)
  .map((num) => num * num)
  .every((num) => num > 50);

console.log(resultTwo);
