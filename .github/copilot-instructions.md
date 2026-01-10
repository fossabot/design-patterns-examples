# Copilot Instructions for Design Patterns Examples

## Repository Overview

This is a multilingual design patterns educational repository containing implementations of 23 classic design patterns across 7 programming languages: Go, React.js, PHP, TypeScript, Java, AngularJS, and Angular 2+.

## Repository Structure

Each design pattern has its own directory with subdirectories for each language implementation:

```
pattern-name/
├── go/
├── reactjs/
├── php/
├── typescript/
├── java/
├── angularjs/
└── angular2/
```

Documentation is organized in language-specific folders (`en/` for English, `pt-br/` for Portuguese).

## General Guidelines

### Code Organization
- Each pattern implementation should be self-contained within its language subdirectory
- Keep implementations simple and focused on demonstrating the pattern clearly
- Use meaningful variable and class names that reflect the pattern's purpose
- Include practical, real-world examples (e.g., Database for Singleton, Vehicle for Factory Method)

### Consistency Across Languages
- Maintain conceptual consistency across all language implementations of the same pattern
- Use similar example domains across languages (e.g., if Go uses "Vehicle", other languages should too)
- Keep the core pattern logic recognizable across different language implementations

### Comments and Documentation
- Use inline comments to explain pattern-specific concepts
- Add comments for class/function definitions in languages that support them
- Include usage examples within the implementation files
- Comments should be in English

### Naming Conventions
- **Go**: Use PascalCase for exported types, camelCase for unexported items, descriptive function names
- **TypeScript/JavaScript**: Use PascalCase for classes, camelCase for functions and variables
- **Java**: Use PascalCase for classes, camelCase for methods and variables
- **PHP**: Use PascalCase for classes, camelCase for methods, follow PSR standards
- **React.js**: Use PascalCase for components, descriptive component names
- **Angular**: Follow Angular style guide conventions

## Language-Specific Guidelines

### Go
- Use `sync.Once` for thread-safe Singleton implementations
- Follow Go's standard naming conventions
- Use interfaces to define pattern contracts
- Keep main.go files simple with clear demonstration of the pattern

### TypeScript
- Use TypeScript features (interfaces, types, access modifiers)
- Leverage type safety to enforce pattern constraints
- Use `private constructor()` for Singleton pattern
- Export classes and functions appropriately

### Java
- Use proper access modifiers (public, private, protected)
- Follow standard Java conventions (getters/setters when appropriate)
- Implement interfaces to define pattern contracts
- Use meaningful package organization if needed

### PHP
- Follow PSR-12 coding standards
- Use type hints where applicable (PHP 7.4+)
- Implement proper visibility modifiers
- Use namespaces when appropriate

### React.js
- Use functional components with hooks where appropriate
- Keep components focused and reusable
- Export components as default exports
- Use descriptive component and prop names
- Include className attributes for potential styling

### AngularJS
- Follow AngularJS 1.x conventions
- Use controllers and services appropriately
- Keep templates clean and readable

### Angular 2+
- Use standalone components (Angular 14+)
- Follow Angular style guide
- Use proper TypeScript typing
- Implement lifecycle hooks when needed

## Pattern Implementation Guidelines

### Creational Patterns
- Focus on object creation mechanisms
- Demonstrate flexibility in instance creation
- Show how patterns decouple client code from concrete classes

### Structural Patterns
- Emphasize relationships between entities
- Show how patterns simplify complex structures
- Demonstrate composition over inheritance where applicable

### Behavioral Patterns
- Focus on communication between objects
- Show responsibility distribution
- Demonstrate algorithm encapsulation

## Testing and Validation

- Each implementation should be runnable/executable
- Test that instances behave as expected for the pattern
- Verify pattern constraints (e.g., Singleton returns same instance)
- Include console output or visual feedback to demonstrate pattern behavior

## Documentation Standards

- Keep README files bilingual (English and Portuguese)
- Use clear, educational explanations
- Include usage examples in documentation
- Maintain consistent structure across pattern documentation

## Build and Run Commands

### Go
```bash
cd pattern-name/go
go run main.go
```

### TypeScript
```bash
cd pattern-name/typescript
ts-node Pattern.ts
# or
tsc Pattern.ts && node Pattern.js
```

### Java
```bash
cd pattern-name/java
javac Pattern.java
java Pattern
```

### PHP
```bash
cd pattern-name/php
php Pattern.php
```

### React.js
Import and use as components in React applications

### Angular
Import and use as components/modules in Angular applications

## Quality Standards

- Code should be educational first, production-ready second
- Prioritize clarity and simplicity over optimization
- Avoid over-engineering examples
- Use common, well-understood example domains
- Ensure code is free of syntax errors and runs successfully

## Contributing Guidelines

- Maintain the existing structure when adding new patterns
- Implement all 7 languages for completeness
- Keep implementations conceptually aligned across languages
- Update documentation in both English and Portuguese
- Follow the established coding conventions for each language
