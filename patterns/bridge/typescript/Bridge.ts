// Implementor interface
interface Color {
  applyColor(): string;
}

// Concrete Implementors
class RedColor implements Color {
  applyColor(): string {
    return 'red';
  }
}

class BlueColor implements Color {
  applyColor(): string {
    return 'blue';
  }
}

// Abstraction
abstract class Shape {
  protected color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  abstract draw(): string;
}

// Refined Abstractions
class Circle extends Shape {
  draw(): string {
    return `Drawing Circle with color ${this.color.applyColor()}`;
  }
}

class Square extends Shape {
  draw(): string {
    return `Drawing Square with color ${this.color.applyColor()}`;
  }
}

// Usage
const red = new RedColor();
const blue = new BlueColor();

const redCircle = new Circle(red);
const blueSquare = new Square(blue);

console.log(redCircle.draw());
console.log(blueSquare.draw());
