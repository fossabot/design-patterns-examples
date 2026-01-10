export interface ShapeVisitor {
  visitCircle(circle: Circle): string;
  visitSquare(square: Square): string;
}

export interface Shape {
  accept(visitor: ShapeVisitor): string;
}

export class Circle implements Shape {
  constructor(public radius: number) {}

  accept(visitor: ShapeVisitor): string {
    return visitor.visitCircle(this);
  }
}

export class Square implements Shape {
  constructor(public side: number) {}

  accept(visitor: ShapeVisitor): string {
    return visitor.visitSquare(this);
  }
}

export class AreaCalculator implements ShapeVisitor {
  visitCircle(circle: Circle): string {
    const area = Math.PI * circle.radius * circle.radius;
    return `Circle area: ${area.toFixed(2)}`;
  }

  visitSquare(square: Square): string {
    const area = square.side * square.side;
    return `Square area: ${area.toFixed(2)}`;
  }
}

export class DrawVisitor implements ShapeVisitor {
  visitCircle(circle: Circle): string {
    return `Drawing circle with radius ${circle.radius}`;
  }

  visitSquare(square: Square): string {
    return `Drawing square with side ${square.side}`;
  }
}
