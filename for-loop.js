// I am writing the same code over and over and again repeating myself. //
// console.log(1);  // have to do manually many times. //
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// let i = 1;
// i++; // -> 1 + 1 = 2
// i++; // -> 2 + 1 = 3
// i++; // -> 3 + 1 = 4
// i++; // -> 4 + 1 = 5

// console.log(i);

// first increment done and then check condition (<=), then print only when condition is met//
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

const fruits = ["apple", "banana", "orange"];
// cannot use condition equal = // index of array starts at 0 //
for (let index = 0; index < fruits.length; index++) {
  console.log("fruit:", fruits[index]);
}
