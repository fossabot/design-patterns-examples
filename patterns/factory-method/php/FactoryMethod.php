<?php

// Product interface
interface Vehicle {
    public function drive(): string;
}

// Concrete Product: Car
class Car implements Vehicle {
    public function drive(): string {
        return "Driving a car on the road";
    }
}

// Concrete Product: Bike
class Bike implements Vehicle {
    public function drive(): string {
        return "Riding a bike on the path";
    }
}

// Creator abstract class
abstract class VehicleFactory {
    abstract public function createVehicle(): Vehicle;
}

// Concrete Creator: CarFactory
class CarFactory extends VehicleFactory {
    public function createVehicle(): Vehicle {
        return new Car();
    }
}

// Concrete Creator: BikeFactory
class BikeFactory extends VehicleFactory {
    public function createVehicle(): Vehicle {
        return new Bike();
    }
}

// Usage
$carFactory = new CarFactory();
$car = $carFactory->createVehicle();
echo $car->drive() . "\n";

$bikeFactory = new BikeFactory();
$bike = $bikeFactory->createVehicle();
echo $bike->drive() . "\n";
