// 1.   Syntax Error

let studentName = "Alice";
console.log(studentName);

const soccerPlayer = {
  playerName: "Ronaldo",
  age: 41,
};
console.log(soccerPlayer);

// 2. Reference Error

// console.log(age); // ReferenceError: age is not defined //
// const age = 21; // Cannot access 'age' before initialization //

//  3.  Type Error

const num = 5;
// num.toUppercase();                // TypeError: num.toUppercase is not a function //
// console.log(num.toUppercase());   // TypeError: num.toUppercase is not a function //

// 4.  Range Error

const str = "hi";
console.log(str.repeat(2));
// console.log(str.repeat(-3)); // RangeError: Invalid count value: -3 //
