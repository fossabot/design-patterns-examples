import { Injectable } from '@angular/core';

// Product interface
export interface Vehicle {
  type: string;
  deliver(): string;
}

// Concrete Products
export class Car implements Vehicle {
  type = 'Car';
  
  deliver(): string {
    return 'Delivering by car on the road';
  }
}

export class Bike implements Vehicle {
  type = 'Bike';
  
  deliver(): string {
    return 'Delivering by bike on the bike lane';
  }
}

export class Truck implements Vehicle {
  type = 'Truck';
  
  deliver(): string {
    return 'Delivering by truck on the highway';
  }
}

// Factory Service
@Injectable({
  providedIn: 'root'
})
export class VehicleFactoryService {
  createVehicle(type: string): Vehicle {
    switch (type.toLowerCase()) {
      case 'car':
        return new Car();
      case 'bike':
        return new Bike();
      case 'truck':
        return new Truck();
      default:
        throw new Error('Unknown vehicle type');
    }
  }
}
