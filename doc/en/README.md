# Design Patterns Examples

A comprehensive collection of design pattern implementations in Go, React.js, PHP, TypeScript, Java, AngularJS, and Angular 2+.

## 📁 Repository Structure

Each design pattern is organized in its own directory with implementations in seven programming languages:

```
design-pattern-name/
├── go/
├── reactjs/
├── php/
├── typescript/
├── java/
├── angularjs/
└── angular2/
```

## 🎨 Design Patterns Included

This repository includes examples for the following design patterns:

### Creational Patterns
- **Factory Method** - Defines an interface for creating objects, but lets subclasses decide which class to instantiate
- **Abstract Factory** - Provides an interface for creating families of related objects without specifying their concrete classes
- **Builder** - Separates the construction of a complex object from its representation
- **Prototype** - Creates new objects by cloning existing ones
- **Singleton** - Ensures a class has only one instance and provides a global point of access to it

### Structural Patterns
- **Adapter** - Allows incompatible interfaces to work together
- **Bridge** - Separates an object's abstraction from its implementation
- **Composite** - Composes objects into tree structures to represent part-whole hierarchies
- **Decorator** - Adds new functionality to objects dynamically
- **Facade** - Provides a simplified interface to a complex subsystem
- **Flyweight** - Shares common state between multiple objects to save memory
- **Proxy** - Provides a placeholder or surrogate for another object to control access

### Behavioral Patterns
- **Chain of Responsibility** - Passes requests along a chain of handlers
- **Command** - Encapsulates a request as an object
- **Iterator** - Provides a way to access elements sequentially without exposing the underlying representation
- **Mediator** - Defines an object that encapsulates how objects interact
- **Memento** - Captures and restores an object's internal state
- **Observer** - Defines a one-to-many dependency between objects
- **State** - Allows an object to alter its behavior when its internal state changes
- **Strategy** - Defines a family of algorithms and makes them interchangeable
- **Template Method** - Defines the skeleton of an algorithm in a base class
- **Visitor** - Separates algorithms from the objects they operate on

## 🚀 Usage

### Go
```bash
cd factory-method/go
go run main.go
```

### React.js
```javascript
import FactoryMethodExample from './factory-method/reactjs/FactoryMethod.jsx';

function App() {
  return <FactoryMethodExample />;
}
```

### PHP
```bash
cd factory-method/php
php FactoryMethod.php
```

### TypeScript
```bash
cd factory-method/typescript
ts-node FactoryMethod.ts
# or compile first
tsc FactoryMethod.ts
node FactoryMethod.js
```

### Java
```bash
cd factory-method/java
javac FactoryMethod.java
java FactoryMethod
```

### AngularJS
```bash
cd factory-method/angularjs
# Open index.html in a web browser or serve with a local server
python -m http.server 8000
# Navigate to http://localhost:8000
```

### Angular 2+
```bash
cd factory-method/angular2
# Copy the files into your Angular project
# Import the component in your app:
# import { FactoryMethodComponent } from './factory-method/angular2/factory-method.component';
# Add to your module or use as standalone component
```

## 📖 Pattern Descriptions

### Factory Method
Creates objects without specifying the exact class to create. Example: Vehicle factory that creates different types of vehicles (Car, Bike).

### Abstract Factory
Creates families of related objects. Example: GUI factory that creates UI elements (Button, Checkbox) for different operating systems (Windows, Mac).

### Builder
Constructs complex objects step by step. Example: Building a house with foundation, structure, roof, and interior.

### Prototype
Creates new objects by copying existing prototypes. Example: Cloning documents to create new copies.

### Singleton
Ensures only one instance of a class exists. Example: Database connection manager.

### Adapter
Converts one interface to another. Example: Media player adapter that allows playing different file formats (MP3, VLC, MP4).

### Bridge
Decouples abstraction from implementation. Example: Shapes (Circle, Square) with different colors (Red, Blue).

### Composite
Treats individual objects and compositions uniformly. Example: Organization hierarchy with employees and managers.

### Decorator
Adds responsibilities to objects dynamically. Example: Coffee with various add-ons (Milk, Sugar).

### Facade
Provides a simplified interface to a complex subsystem. Example: Computer system with CPU, Memory, and HardDrive subsystems.

### Flyweight
Shares common state between multiple objects to save memory. Example: Text editor with character formatting (shared font, size, color data).

### Proxy
Provides a placeholder or surrogate for another object to control access. Example: Image proxy that lazy-loads images.

### Chain of Responsibility
Passes requests along a chain of handlers. Example: Support ticket system with multiple support levels.

### Command
Encapsulates a request as an object. Example: Remote control with on/off commands for devices.

### Iterator
Provides a way to access elements sequentially without exposing the underlying representation. Example: Collection iterator for different data structures.

### Mediator
Defines an object that encapsulates how objects interact. Example: Chat room where users communicate through a mediator.

### Memento
Captures and restores an object's internal state. Example: Text editor with undo/redo functionality.

### Observer
Defines a one-to-many dependency between objects. Example: Weather station that notifies multiple displays.

### State
Allows an object to alter its behavior when its internal state changes. Example: Document workflow with draft, review, and published states.

### Strategy
Defines a family of algorithms and makes them interchangeable. Example: Payment system with different payment strategies (Credit Card, PayPal, Bitcoin).

### Template Method
Defines the skeleton of an algorithm in a base class. Example: Beverage preparation (Tea, Coffee) with common steps.

### Visitor
Separates algorithms from the objects they operate on. Example: Shape visitor that calculates area or draws shapes.

## 🛠️ Technologies

- **Go** - version 1.16+
- **React.js** - version 17+
- **PHP** - version 7.4+
- **TypeScript** - version 4.0+
- **Java** - version 8+
- **AngularJS** - version 1.8+
- **Angular 2+** - version 14+ (standalone components)

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to contribute by adding more design patterns or improving existing implementations!
