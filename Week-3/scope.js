// 1.  Global Scope

let globalVariable = "I am global!";
console.log(globalVariable);

function printsomething() {
  if (14 > 2) {
    console.log(globalVariable);
  }
  console.log(globalVariable);
}
printsomething();

// 2. Function Scope

function greet() {
  let message = "Hello from inside the function!";
  const age = 50;
  console.log(message);

  if (14 > 2) {
    const myDogName = "Riki";
    console.log(myDogName);
    console.log(message);
  }
}
greet();

// console.log(message); // This is not run and will get error message because it is calling the code inside the function. //
// console.log(age); // This is not run and will get error message because it is calling the code inside the function. //

// 3. Block Scope

if (14 > 2) {
  const myDogName = "Luci"; // block scope - can print only inside curly braces.
}
// console.log(myDogName);  // can not print and will get error message  because I'm accessing from outside.//
