import React, { useState } from 'react';

// Component class
class SimpleCoffee {
  getDescription() {
    return 'Simple Coffee';
  }

  getCost() {
    return 2.0;
  }
}

// Decorator classes
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, Milk`;
  }

  getCost() {
    return this.coffee.getCost() + 0.5;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, Sugar`;
  }

  getCost() {
    return this.coffee.getCost() + 0.3;
  }
}

// Component
const DecoratorExample = () => {
  const [coffeeOrders, setCoffeeOrders] = useState([]);

  const orderCoffee = (addMilk, addSugar) => {
    let coffee = new SimpleCoffee();

    if (addMilk) {
      coffee = new MilkDecorator(coffee);
    }

    if (addSugar) {
      coffee = new SugarDecorator(coffee);
    }

    setCoffeeOrders([
      ...coffeeOrders,
      {
        description: coffee.getDescription(),
        cost: coffee.getCost().toFixed(2),
      },
    ]);
  };

  return (
    <div className="decorator-example">
      <h2>Decorator Pattern</h2>
      <div className="buttons">
        <button onClick={() => orderCoffee(false, false)}>Simple Coffee</button>
        <button onClick={() => orderCoffee(true, false)}>Coffee with Milk</button>
        <button onClick={() => orderCoffee(true, true)}>Coffee with Milk and Sugar</button>
      </div>
      <div className="orders">
        {coffeeOrders.map((order, index) => (
          <p key={index}>
            {order.description}: ${order.cost}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DecoratorExample;
