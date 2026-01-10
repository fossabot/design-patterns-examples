// Product interface
interface Vehicle {
  drive(): string;
}

// Concrete Product: Car
class Car implements Vehicle {
  drive(): string {
    return "Driving a car on the road";
  }
}

// Concrete Product: Bike
class Bike implements Vehicle {
  drive(): string {
    return "Riding a bike on the path";
  }
}

// Creator abstract class
abstract class VehicleFactory {
  abstract createVehicle(): Vehicle;
}

// Concrete Creator: CarFactory
class CarFactory extends VehicleFactory {
  createVehicle(): Vehicle {
    return new Car();
  }
}

// Concrete Creator: BikeFactory
class BikeFactory extends VehicleFactory {
  createVehicle(): Vehicle {
    return new Bike();
  }
}

// Usage
const carFactory = new CarFactory();
const car = carFactory.createVehicle();
console.log(car.drive());

const bikeFactory = new BikeFactory();
const bike = bikeFactory.createVehicle();
console.log(bike.drive());
