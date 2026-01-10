# Builder Pattern - Angular 2+

This example demonstrates the Builder pattern in Angular 2+ using a house construction example.

## Description

The Builder pattern separates the construction of a complex object from its representation, allowing the same construction process to create different representations. In this example, we build houses with different configurations step by step.

## Files

- `house-builder.ts` - Builder classes for constructing houses
- `builder.component.ts` - Component that uses the builder
- `builder.component.html` - Template for the component
- `builder.component.css` - Styles for the component

## How It Works

1. `House` is the complex object being built
2. `HouseBuilder` provides methods to build each part of the house
3. `HouseDirector` orchestrates the building process for predefined configurations
4. The component can use the director for standard builds or the builder directly for custom builds
