function greet() {
  let name = "Su";
  const addition = 2 + 5;
  console.log("Hello World!");
}

greet(); // I am calling the function. -> Giving instruction to JS to make my function work.//

// 2. Function with a single parameter.
// "name" inside paranthesis is called "parameter".

function newGreet(name) {
  console.log(`Hello ${name} welcome to the class!`);
}

newGreet("SU");

// 3. Function with multiple parameters.

function addition(num1, num2, num3, num4, num5) {
  console.log(num1 + num2);
  console.log(num3 * 3);
  console.log(num4);
  console.log(num5);
}

addition(2, 2, 2, 2, 2);

function printNumber(num1, num2) {
  if (num1 > num2) {
    console.log("This is true.The number is bigger.");
  } else {
    console.log("This is false.The number is smaller.");
  }
}

printNumber(3, 5);
printNumber(5, 2);

// 4. Default Parameters

function greetStudents(name = "student", nameTwo = "student 2") {
  console.log(`Hello ${name}, welcome to JavaScript class!`);
}

greetStudents(); // just use the default parameter. //
greetStudents("Alex"); //override the default parameter. //

function newNumbder(num1 = 5, num2 = 2) {
  if (num1 > num2) {
    console.log("Bigger Number");
  } else {
    console.log("Smaller Number"); //
  }
}
newNumbder(3, 7); // override the default parameter. That's why output is "Smaller Number". //

// 5. Return Values

function addNewNumbers(num1, num2) {
  return num1 + num2;
}

const functionResult = addNewNumbers(3, 6);
console.log(functionResult);

// 6. Arrow Function

const greetStudentTwo = (student) => {
  console.log(`Hello ${student}, welcome to the class!`);
};
greetStudentTwo("MyatSu");

// another example for Arrow Function //

const substractTwoNumbers = (num1, num2) => num1 - num2; // (return) num1 - num2

const resultTwo = substractTwoNumbers(5, 3);
console.log(resultTwo + 22);
