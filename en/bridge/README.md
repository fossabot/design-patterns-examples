# Bridge Pattern - Angular 2+

This example demonstrates the Bridge pattern in Angular 2+ using shapes and colors.

## Description

The Bridge pattern decouples an abstraction from its implementation so that the two can vary independently. In this example, shapes (Circle, Square, Triangle) are decoupled from colors (Red, Blue, Green).

## Files

- `shape-bridge.ts` - Bridge pattern implementation with shapes and colors
- `bridge.component.ts` - Component that demonstrates the pattern
- `bridge.component.html` - Template for the component
- `bridge.component.css` - Styles for the component

## How It Works

1. `Color` is the implementation interface
2. `RedColor`, `BlueColor`, `GreenColor` are concrete implementations
3. `Shape` is the abstraction that uses a Color implementation
4. `Circle`, `Square`, `Triangle` are refined abstractions
