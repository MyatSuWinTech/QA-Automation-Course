class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, I'm ${this.name} and ${this.age} years old.`);
  }
}

const alice = new Person("Alice", 25);
alice.greet();
console.log(alice);

const bob = new Person("bob", 30);
bob.greet();
console.log(bob);

const aliceObj = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name} and ${this.age} years old.`);
  },
};

const bobObj = {
  name: "Bob",
  age: 30,
  greet() {
    console.log(`Hi, I'm ${this.name} and ${this.age} years old.`);
  },
};

const soccerPlayer = {
  name: "Cristiano Ronaldo",
  age: 41,
  country: "Portugal",
};

// Example 2

class Phone {
  constructor(brand, model, storage) {
    this.brand = brand;
    this.model = model;
    this.storage = storage;
  }

  describe() {
    console.log(
      `${this.greetCustomer()} This phone is a ${this.brand} ${this.model} and has a storage of ${this.storage}.`,
    );
  }
  greetCustomer() {
    return `Hello customer, this is your new phone.Please Enjoy!!`;
  }
}

const iPhone17 = new Phone("Apple", "iPhone 17", "512GB");
iPhone17.describe();

const samsungA7 = new Phone("Samsung", "A7", "256GB");
samsungA7.describe();
