import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFactoryService, Vehicle } from './vehicle-factory.service';

@Component({
  selector: 'app-factory-method',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.css']
})
export class FactoryMethodComponent {
  vehicles: Vehicle[] = [];
  deliveryMessages: string[] = [];

  constructor(private vehicleFactory: VehicleFactoryService) {}

  createVehicle(type: string): void {
    try {
      const vehicle = this.vehicleFactory.createVehicle(type);
      this.vehicles.push(vehicle);
      const message = vehicle.deliver();
      this.deliveryMessages.push(message);
    } catch (error) {
      console.error('Error creating vehicle:', error);
    }
  }
}
