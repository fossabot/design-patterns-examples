# Abstract Factory Pattern - Angular 2+

This example demonstrates the Abstract Factory pattern in Angular 2+ using a GUI factory that creates UI elements for different operating systems.

## Description

The Abstract Factory pattern provides an interface for creating families of related objects without specifying their concrete classes. In this example, we create UI elements (buttons and checkboxes) for different operating systems (Windows and Mac).

## Files

- `gui-factory.service.ts` - Service containing the factory interfaces and implementations
- `abstract-factory.component.ts` - Component that uses the factory service
- `abstract-factory.component.html` - Template for the component
- `abstract-factory.component.css` - Styles for the component

## Usage

```typescript
import { Component } from '@angular/core';
import { AbstractFactoryComponent } from './abstract-factory/angular2/abstract-factory.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AbstractFactoryComponent],
  template: '<app-abstract-factory></app-abstract-factory>'
})
export class AppComponent {}
```

## How It Works

1. `GUIFactory` is the abstract factory interface that defines methods to create related products
2. `WindowsFactory` and `MacFactory` are concrete factories that implement the interface
3. Each factory creates a family of related products (Button and Checkbox) specific to an OS
4. The component uses the factory service to create UI elements without knowing their concrete classes
