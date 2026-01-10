# Factory Method Pattern - Angular 2+

This example demonstrates the Factory Method pattern in Angular 2+ using a vehicle factory.

## Description

The Factory Method pattern defines an interface for creating objects, but lets subclasses decide which class to instantiate. In this example, the `VehicleFactoryService` creates different types of vehicles (Car, Bike, Truck) without the client needing to know the specific class.

## Files

- `vehicle-factory.service.ts` - Service containing the factory and vehicle classes
- `factory-method.component.ts` - Component that uses the factory service
- `factory-method.component.html` - Template for the component
- `factory-method.component.css` - Styles for the component

## Usage

```typescript
import { Component } from '@angular/core';
import { FactoryMethodComponent } from './factory-method/angular2/factory-method.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FactoryMethodComponent],
  template: '<app-factory-method></app-factory-method>'
})
export class AppComponent {}
```

## How It Works

1. `Vehicle` is the product interface that all concrete vehicles implement
2. `Car`, `Bike`, and `Truck` are concrete products
3. `VehicleFactoryService` is the factory that creates vehicles based on type
4. The component uses the factory without knowing the concrete vehicle classes
