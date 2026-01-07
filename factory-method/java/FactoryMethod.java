// Product interface
interface Vehicle {
    String drive();
}

// Concrete Product: Car
class Car implements Vehicle {
    @Override
    public String drive() {
        return "Driving a car on the road";
    }
}

// Concrete Product: Bike
class Bike implements Vehicle {
    @Override
    public String drive() {
        return "Riding a bike on the path";
    }
}

// Creator abstract class
abstract class VehicleFactory {
    abstract Vehicle createVehicle();
}

// Concrete Creator: CarFactory
class CarFactory extends VehicleFactory {
    @Override
    Vehicle createVehicle() {
        return new Car();
    }
}

// Concrete Creator: BikeFactory
class BikeFactory extends VehicleFactory {
    @Override
    Vehicle createVehicle() {
        return new Bike();
    }
}

// Main class demonstrating Factory Method pattern
public class FactoryMethod {
    public static void main(String[] args) {
        // Using Car Factory
        VehicleFactory carFactory = new CarFactory();
        Vehicle car = carFactory.createVehicle();
        System.out.println(car.drive());

        // Using Bike Factory
        VehicleFactory bikeFactory = new BikeFactory();
        Vehicle bike = bikeFactory.createVehicle();
        System.out.println(bike.drive());
    }
}
