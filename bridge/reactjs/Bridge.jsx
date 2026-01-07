import React from 'react';

// Implementor classes
class RedColor {
  applyColor() {
    return 'red';
  }
}

class BlueColor {
  applyColor() {
    return 'blue';
  }
}

// Abstraction classes
class Circle {
  constructor(color) {
    this.color = color;
  }

  draw() {
    return `Drawing Circle with color ${this.color.applyColor()}`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  draw() {
    return `Drawing Square with color ${this.color.applyColor()}`;
  }
}

// Component
const BridgeExample = () => {
  const red = new RedColor();
  const blue = new BlueColor();

  const redCircle = new Circle(red);
  const blueSquare = new Square(blue);

  return (
    <div className="bridge-example">
      <h2>Bridge Pattern</h2>
      <p>{redCircle.draw()}</p>
      <p>{blueSquare.draw()}</p>
    </div>
  );
};

export default BridgeExample;
