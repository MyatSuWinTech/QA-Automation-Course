// 1.  Math.round() - Round to nearest number

let num1 = 4.6;
console.log(Math.round(num1)); // Output: 5

let num2 = 4.4;
console.log(Math.round(num2)); // Output: 4

let num3 = 4.5;
console.log(Math.round(num3)); // Output: 5 - it starts from (.5) to round up //

// 2.  Math.floor() - Round Down - Rounds a number down to the nearest integer.

let num4 = 4.9;
console.log(Math.floor(num4)); // Output: 4

let num5 = 4.1;
console.log(Math.floor(num5)); // Output: 4

// 3.  Math.ceil() - Round Up - Rounds a number up to the nearest integer.

let num6 = 4.1;
console.log(Math.ceil(num6)); // Output: 5

let num7 = 4.9;
console.log(Math.ceil(num7)); // Output: 5

// 4.  Math.trunc() - Remove Decimals Only -

let num8 = 4.9;
console.log(Math.trunc(num8)); // Output: 4

let num9 = 4.1;
console.log(Math.trunc(num9)); // Output: 4

// 5.  .toFixed() -  Fixed Decimals - Format number to specific decimal places // but returns as a string

let num10 = 4.56789;
console.log(num10.toFixed(2)); // Output: 4.57 //

let num11 = 4.56123;
console.log(num11.toFixed(4)); // Output: 4.5612 //

// 6.  Number() - Convert String to Number //

let str1 = "123.45";
let convertedNum1 = Number(str1);
console.log(convertedNum1); // Output: 123.45 //
console.log(Number(str1)); // Output: 123.45 //

let str2 = "Hello!";
let convertedNum2 = Number(str2);

console.log(convertedNum2); // Output: NaN //
console.log(Number(str2)); // Output: NaN //

// 7. parseInt() - Integer Conversion - Parse(audit) String to Integer(3 & 4 are integers, and 3/4 is not integer) //

let str3 = "456.78";
let integerNumber = parseInt(str3);
console.log(integerNumber); // Output: 456 //
console.log(parseInt(str3)); // Output: 456 //

// 8. parseFloat() - Decimal Conversion -

let str4 = "789.12";
let floatNumber = parseFloat(str4);
console.log(floatNumber); // Output: 789.12 //
console.log(parseFloat(str4)); // Output: 789.12 //

let str5 = "345.67";

console.log(parseFloat(str5) + parseFloat(str4));

// 9.  Math.random() - Random Number //

let randomNum = Math.random(); // Generates a random decimal number between 0 (inclusive) and 1 (exclusive)
console.log(randomNum); // Output: 0.0 ~ 0.9... - Random number between 0 and 1 // always changing //
console.log(randomNum.toFixed(2));

// In order to get a random number in the range you want, there is a general formula for it.//
// Formula:
// Math.floor(Math.random() * (max - min + 1)) + min;

// Example: Generating a number between 200 and 300

let random200to300 = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
console.log(random200to300);

// Checking Numbers  - returns boolean value //
// 1.   isNaN() - Checks whether a value is Not a Number.// returns boolean value //

// let isNan("abc");
// console.log(isNan("abc")); // true

let num13 = 10;
console.log(isNan(num13)); // false

// 2.   Number.isInteger() - Checks whether a value is an integer. //
let num14 = 5;
console.log(Number.isInteger(num14)); // true //

let num15 = 5.5;
console.log(Number.isInteger(5.5)); // false //

// Math Utility Methods //

// 1.   Math.abs() - Returns the absolute value of a number. //
// If the number is negative, it becomes positive.
// If it's already positive, it stays the same.
// If it's 0, it stays 0.

let num16 = -10;
console.log(Math.abs(-10)); // 10

// 2.   Math.min() - returns the smallest value. //

let num17 = [3, 7, 1];
console.log(Math.min(num17)); // 1
// Real-world QA thinking - imagine validating: lowest price, minimum score, earliest timestamp// Same logic applies.//
// Ultra simple memory rule -
// start with first -> check all -> keep smallest

// 3.   Math.max() - Returns the largest value.

console.log(Math.max(num17)); // 7

// 4.   Math.pow() - Raises a number to a power. //

let num18 = 2;
console.log(Math.pow(num18, 3)); // 8

// 5.   Math.sqrt() - Returns the square root of a number. //

let num19 = 16;
console.log(Math.sqrt(num19)); // 4
