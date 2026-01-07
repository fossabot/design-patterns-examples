// Visitor interface
interface ShapeVisitor {
  visitCircle(circle: Circle): string;
  visitRectangle(rectangle: Rectangle): string;
  visitTriangle(triangle: Triangle): string;
}

// Element interface
interface Shape {
  accept(visitor: ShapeVisitor): string;
}

// Concrete Elements
class Circle implements Shape {
  constructor(public radius: number) {}

  accept(visitor: ShapeVisitor): string {
    return visitor.visitCircle(this);
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  accept(visitor: ShapeVisitor): string {
    return visitor.visitRectangle(this);
  }
}

class Triangle implements Shape {
  constructor(public base: number, public height: number) {}

  accept(visitor: ShapeVisitor): string {
    return visitor.visitTriangle(this);
  }
}

// Concrete Visitors
class AreaCalculator implements ShapeVisitor {
  visitCircle(circle: Circle): string {
    const area = Math.PI * circle.radius * circle.radius;
    return `Circle area: ${area.toFixed(2)}`;
  }

  visitRectangle(rectangle: Rectangle): string {
    const area = rectangle.width * rectangle.height;
    return `Rectangle area: ${area.toFixed(2)}`;
  }

  visitTriangle(triangle: Triangle): string {
    const area = 0.5 * triangle.base * triangle.height;
    return `Triangle area: ${area.toFixed(2)}`;
  }
}

class DrawVisitor implements ShapeVisitor {
  visitCircle(circle: Circle): string {
    return `Drawing Circle with radius ${circle.radius.toFixed(2)}`;
  }

  visitRectangle(rectangle: Rectangle): string {
    return `Drawing Rectangle ${rectangle.width.toFixed(2)} x ${rectangle.height.toFixed(2)}`;
  }

  visitTriangle(triangle: Triangle): string {
    return `Drawing Triangle base ${triangle.base.toFixed(2)}, height ${triangle.height.toFixed(2)}`;
  }
}

// Usage
const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 6),
  new Triangle(3, 4)
];

const areaCalc = new AreaCalculator();
const drawer = new DrawVisitor();

console.log('Calculating areas:');
shapes.forEach(shape => console.log(shape.accept(areaCalc)));

console.log('\nDrawing shapes:');
shapes.forEach(shape => console.log(shape.accept(drawer)));
