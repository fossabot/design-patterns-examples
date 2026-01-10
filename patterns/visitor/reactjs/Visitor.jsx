import React, { useState } from 'react';

// Concrete Elements
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  accept(visitor) {
    return visitor.visitCircle(this);
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  accept(visitor) {
    return visitor.visitRectangle(this);
  }
}

class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  accept(visitor) {
    return visitor.visitTriangle(this);
  }
}

// Concrete Visitors
class AreaCalculator {
  visitCircle(circle) {
    const area = Math.PI * circle.radius * circle.radius;
    return `Circle area: ${area.toFixed(2)}`;
  }

  visitRectangle(rectangle) {
    const area = rectangle.width * rectangle.height;
    return `Rectangle area: ${area.toFixed(2)}`;
  }

  visitTriangle(triangle) {
    const area = 0.5 * triangle.base * triangle.height;
    return `Triangle area: ${area.toFixed(2)}`;
  }
}

class DrawVisitor {
  visitCircle(circle) {
    return `Drawing Circle with radius ${circle.radius.toFixed(2)}`;
  }

  visitRectangle(rectangle) {
    return `Drawing Rectangle ${rectangle.width.toFixed(2)} x ${rectangle.height.toFixed(2)}`;
  }

  visitTriangle(triangle) {
    return `Drawing Triangle base ${triangle.base.toFixed(2)}, height ${triangle.height.toFixed(2)}`;
  }
}

// Component
const VisitorExample = () => {
  const [output, setOutput] = useState([]);

  const runExample = () => {
    const shapes = [
      new Circle(5),
      new Rectangle(4, 6),
      new Triangle(3, 4)
    ];

    const areaCalc = new AreaCalculator();
    const drawer = new DrawVisitor();

    const results = [];
    results.push('Calculating areas:');
    shapes.forEach(shape => results.push(shape.accept(areaCalc)));
    
    results.push('');
    results.push('Drawing shapes:');
    shapes.forEach(shape => results.push(shape.accept(drawer)));

    setOutput(results.filter(r => r !== ''));
  };

  return (
    <div className="visitor-example">
      <h2>Visitor Pattern</h2>
      <p>Shape visitor that calculates area or draws shapes</p>
      <button onClick={runExample}>Process Shapes</button>
      {output.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default VisitorExample;
