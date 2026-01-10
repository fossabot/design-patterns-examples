# Singleton Pattern - Angular 2+

This example demonstrates the Singleton pattern in Angular 2+ using a database connection service.

## Description

The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. In this example, the `DatabaseService` is implemented as a singleton to ensure only one database connection exists throughout the application.

## Files

- `database.service.ts` - Singleton service that manages the database connection
- `singleton.component.ts` - Component that uses the singleton service
- `singleton.component.html` - Template for the component
- `singleton.component.css` - Styles for the component

## Usage

### In a Standalone Angular Application

```typescript
import { Component } from '@angular/core';
import { SingletonComponent } from './singleton/angular2/singleton.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SingletonComponent],
  template: '<app-singleton></app-singleton>'
})
export class AppComponent {}
```

### In a Module-based Angular Application

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SingletonComponent } from './singleton/angular2/singleton.component';

@NgModule({
  imports: [BrowserModule, SingletonComponent],
  bootstrap: [SingletonComponent]
})
export class AppModule {}
```

## How It Works

1. The `DatabaseService` is decorated with `@Injectable({ providedIn: 'root' })`, which makes it a singleton by default in Angular's dependency injection system
2. Additionally, the constructor implements the singleton pattern manually to demonstrate the concept
3. The `instanceCount` static variable tracks how many times the constructor was called
4. Multiple injections or instantiations will return the same instance

## Running the Example

1. Copy these files into your Angular project
2. Import the `SingletonComponent` in your app
3. Run your Angular application with `ng serve`
4. Navigate to the component to see the singleton pattern in action
