// 1. Addition
let number = 5 + 2;
console.log(number + 3);

console.log(4 + 3);

// 2. Subtraction
number = 9;
console.log(number - 4);
console.log(10 - 6);

// 3. Multiplication

number = 4 * 2;
console.log(number * 3);
console.log(3 * 5);

// 4. Division

number = 20 / 4;
console.log(number / 2);
console.log(16 / 4);

// 5. Exponentiation

number = 2 ** 2;
console.log(number ** 3);
console.log(2 ** 5);

// 6. Modulus (Remainder) operator

number = 8;
console.log(number % 4);
console.log(10 % 3);

// 7. Increment operator

let a = 5; // >> 5 + 1

a++;

console.log(a);

// 8. Decrement operator

let b = 11; // >> 5 - 1
b--;
b--;

console.log(b);

// Comparison Operators - Will give us a boolean data type //

// "!" sign - for boolean data type

console.log(!(8 > 3));

// 1. Strict Equal Operator

console.log(5 === 5);
console.log(5 === "5");
console.log(5 == "5");
console.log(5 === 8);

// 2. Not Strict Equal

console.log(5 !== 5);
console.log(5 !== 8);

// 3. Greater Than

console.log(20 > 12);

// 4. Less Than

console.log(30 < 20);

// 5. Greater Than or Equal to

console.log(8 >= 4);
console.log(8 >= 8);

// 6. Less Than or Equal to

console.log(10 <= 10);
console.log(12 <= 20);

// Logical Operators //

// 1. && (and) sign - returns true only if both conditions are true.

// Does not print anything because one of the condition is false.
if (5 > 3 && 8 < 4) {
  console.log("Hi, NYC!");
}

if (5 > 3 && 2 < 4) {
  console.log("Hi, NYC!");
}

if (8 > 6 && "Hello") {
  console.log("Hello SU");
}

// 2. || (or) operator - returns true if at least one condition is true.

if (5 > 3 || 2 < 4) {
  console.log("Hi, Idaho!");
}

if (5 > 3 || 2 < 4) {
  console.log("Hi, Idaho!");
}
