// Component interface
export interface Coffee {
  getDescription(): string;
  getCost(): number;
}

// Concrete Component
export class SimpleCoffee implements Coffee {
  getDescription(): string {
    return 'Simple Coffee';
  }

  getCost(): number {
    return 2.0;
  }
}

// Decorator base class
export abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract getDescription(): string;
  abstract getCost(): number;
}

// Concrete Decorators
export class MilkDecorator extends CoffeeDecorator {
  getDescription(): string {
    return this.coffee.getDescription() + ', Milk';
  }

  getCost(): number {
    return this.coffee.getCost() + 0.5;
  }
}

export class SugarDecorator extends CoffeeDecorator {
  getDescription(): string {
    return this.coffee.getDescription() + ', Sugar';
  }

  getCost(): number {
    return this.coffee.getCost() + 0.2;
  }
}

export class WhippedCreamDecorator extends CoffeeDecorator {
  getDescription(): string {
    return this.coffee.getDescription() + ', Whipped Cream';
  }

  getCost(): number {
    return this.coffee.getCost() + 0.7;
  }
}
