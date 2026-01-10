// Component interface
interface Coffee {
  getDescription(): string;
  getCost(): number;
}

// Concrete Component
class SimpleCoffee implements Coffee {
  getDescription(): string {
    return 'Simple Coffee';
  }

  getCost(): number {
    return 2.0;
  }
}

// Decorator
abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getDescription(): string {
    return this.coffee.getDescription();
  }

  getCost(): number {
    return this.coffee.getCost();
  }
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${this.coffee.getDescription()}, Milk`;
  }

  getCost(): number {
    return this.coffee.getCost() + 0.5;
  }
}

class SugarDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${this.coffee.getDescription()}, Sugar`;
  }

  getCost(): number {
    return this.coffee.getCost() + 0.3;
  }
}

// Usage
let coffee: Coffee = new SimpleCoffee();
console.log(`${coffee.getDescription()}: $${coffee.getCost().toFixed(2)}`);

coffee = new MilkDecorator(coffee);
console.log(`${coffee.getDescription()}: $${coffee.getCost().toFixed(2)}`);

coffee = new SugarDecorator(coffee);
console.log(`${coffee.getDescription()}: $${coffee.getCost().toFixed(2)}`);
