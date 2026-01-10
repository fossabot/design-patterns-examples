// Implementation interface
export interface Color {
  applyColor(): string;
}

// Concrete Implementations
export class RedColor implements Color {
  applyColor(): string {
    return 'red';
  }
}

export class BlueColor implements Color {
  applyColor(): string {
    return 'blue';
  }
}

export class GreenColor implements Color {
  applyColor(): string {
    return 'green';
  }
}

// Abstraction
export abstract class Shape {
  constructor(protected color: Color) {}
  
  abstract draw(): string;
}

// Refined Abstractions
export class Circle extends Shape {
  draw(): string {
    return `Circle drawn in ${this.color.applyColor()} color`;
  }
}

export class Square extends Shape {
  draw(): string {
    return `Square drawn in ${this.color.applyColor()} color`;
  }
}

export class Triangle extends Shape {
  draw(): string {
    return `Triangle drawn in ${this.color.applyColor()} color`;
  }
}
