package main

import "fmt"

// Product interface
type Vehicle interface {
	Drive() string
}

// Concrete Product: Car
type Car struct{}

func (c *Car) Drive() string {
	return "Driving a car on the road"
}

// Concrete Product: Bike
type Bike struct{}

func (b *Bike) Drive() string {
	return "Riding a bike on the path"
}

// Creator interface
type VehicleFactory interface {
	CreateVehicle() Vehicle
}

// Concrete Creator: CarFactory
type CarFactory struct{}

func (cf *CarFactory) CreateVehicle() Vehicle {
	return &Car{}
}

// Concrete Creator: BikeFactory
type BikeFactory struct{}

func (bf *BikeFactory) CreateVehicle() Vehicle {
	return &Bike{}
}

func main() {
	// Using Car Factory
	carFactory := &CarFactory{}
	car := carFactory.CreateVehicle()
	fmt.Println(car.Drive())

	// Using Bike Factory
	bikeFactory := &BikeFactory{}
	bike := bikeFactory.CreateVehicle()
	fmt.Println(bike.Drive())
}
