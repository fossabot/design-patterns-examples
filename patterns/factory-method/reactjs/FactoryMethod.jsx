import React from 'react';

// Product Components
const CarComponent = () => (
  <div className="vehicle car">
    <h3>Car</h3>
    <p>Driving a car on the road</p>
  </div>
);

const BikeComponent = () => (
  <div className="vehicle bike">
    <h3>Bike</h3>
    <p>Riding a bike on the path</p>
  </div>
);

// Factory Functions
class VehicleFactory {
  createVehicle() {
    throw new Error('createVehicle must be implemented');
  }
}

class CarFactory extends VehicleFactory {
  createVehicle() {
    return <CarComponent />;
  }
}

class BikeFactory extends VehicleFactory {
  createVehicle() {
    return <BikeComponent />;
  }
}

// Main Component using Factory Method
const FactoryMethodExample = () => {
  const carFactory = new CarFactory();
  const bikeFactory = new BikeFactory();

  return (
    <div className="factory-method-example">
      <h2>Factory Method Pattern</h2>
      {carFactory.createVehicle()}
      {bikeFactory.createVehicle()}
    </div>
  );
};

export default FactoryMethodExample;
