// The for-in loop is usually used to iterate through key/value pairs of properties in an Object.//

let myCar = {
  make: "Honda",
  year: "2015",
  model: "Accord",
};

for (let key in myCar) {
  console.log(key);
  console.log(myCar[key]);
}

const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};
// Su represents keys in the object.//
for (const Su in person) {
  console.log(Su + ": " + person[Su]);
}
