// break - to exit early from looping (in an array) //

// break in for loop //
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // exit the loop when i is 5//
  }
  console.log(i);
}

// break in Switch Statements //

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  default:
    console.log("Other fruit");
}
// Apple selected //
