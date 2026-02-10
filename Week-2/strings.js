// 1.    .length - counts characters in a string //

const myFavouriteBook = "Pollyanna";
console.log(myFavouriteBook.length);

const myLeastFavouriteBook = "Mg Thein"; // counts spaces as characters
console.log(myLeastFavouriteBook.length);

// 2.   .toUpperCase() - converts a string to uppercase //

const myCity = "Brighton";
console.log(myCity.toUpperCase());

// 3.   .toLowerCase() - converts a string to lowercase //

const myCountry = "USA";
console.log(myCountry.toLowerCase());

// 4.   .trim() - removes extra spaces from the beginning and end of a string //

const myDreamJob = "   QA Auotmation Engineer   ";
console.log(myDreamJob.trim());

// 5.   .slice(0, 3) - extracts a portion of a string //

const myHobby = "Zumba Dancing";
console.log(myHobby.slice(0, 5)); // Zumba
console.log(myHobby.slice(6, 13)); // Dancing

// 6. replace("a", "o") - replaces a specified value with another value in a string //

const myFavouriteCity = "Ellsworth";
console.log(myFavouriteCity.replace("E", "A"));

// 7. includes("word") - checks if a string contains a specified value and returns true or false //

const myFavouriteFood = "Sushi and Ramen";
console.log(myFavouriteFood.includes("Ramen")); // true
console.log(myFavouriteFood.includes("Pizza")); // false

// 8.   .split(", ") - splits a string into an array of substrings //

const myFavouriteFoodsType = "Asian Food, Italian Food, Mexican Food";
const foodsArray = myFavouriteFoodsType.split(", "); // split when you see a comma. //
console.log(foodsArray);

// (" ") - split at every space.//
// (", ") - split whenever you see a comma. //
// let word = "hello"; / console.log(word.split("")); - empty string = split every character.//
//hello.split(", "); /output is ["hello"] - if seperator is not found: Nothing to split - whole string stays.
// real world example - this is how exactly structured data gets seperated.
let data = "AAPL|100|BUY";
let parts = data.split("|");

console.log(parts); // Output - ["AAPL", "100", "BUY"] - Now you can access:

parts[0]; // ticker
parts[1]; // quantity
parts[2]; // action   // this is how exactly structured data gets seperated.//

// split = cut string like a scissors and get list //

// 9.  .concat() - joins two or more strings //

const stringPart1 = "Hello,";
const stringPart2 = "how are you?";
const completeString = stringPart1.concat(" ", stringPart2);
console.log(completeString);

// 10.  .indexOf("word") - returns the first index of a specified value in a string //

const myFavouriteSeason = "Spring";
console.log(myFavouriteSeason.indexOf("n")); // just one index can be printed //

// 11.   .startsWith("word") - checks if a string starts with a specified value and returns boolean value //

const myFavouriteAnimal = "Dolphin";
console.log(myFavouriteAnimal.startsWith("D")); // true
console.log(myFavouriteAnimal.startsWith("d")); // false

// 12.   .endsWith("word") - checks if a string ends with a specified value and returns boolean value //

const myFavouriteFlower = "Rose";
console.log(myFavouriteFlower.endsWith("e")); // true
console.log(myFavouriteFlower.endsWith("E")); // false  -  case sensitive //

// 13.   Template Literals - allows embedding(Inserting) expressions inside string literals using backticks `` //

const myName = "Su";
const myAge = 32;
const myStateOfResidence = "Michigan";
const aboutMe = `My name is ${myName}, I am ${myAge} years old and I live in ${myStateOfResidence}.`;
console.log(aboutMe);
