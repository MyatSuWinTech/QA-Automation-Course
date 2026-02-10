class Car {
  drive() {
    console.log("Driving...");
  }
}
class SportsCar extends Car {
  turboBoost() {
    console.log("Turbo boost activated!");
  }
}
class MiniCar extends Car {
  driveThroughSmallStreets() {
    console.log("I fit in small streets");
  }
}
const ferrari = new SportsCar();
ferrari.drive();
