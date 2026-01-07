# Design Patterns Examples

A comprehensive collection of design pattern implementations in Go, React.js, PHP, and TypeScript.

## 📁 Repository Structure

Each design pattern is organized in its own directory with implementations in four programming languages:

```
design-pattern-name/
├── go/
├── reactjs/
├── php/
└── typescript/
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

## 🛠️ Technologies

- **Go** - version 1.16+
- **React.js** - version 17+
- **PHP** - version 7.4+
- **TypeScript** - version 4.0+

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to contribute by adding more design patterns or improving existing implementations!
