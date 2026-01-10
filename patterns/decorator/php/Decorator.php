<?php

// Component interface
interface Coffee {
    public function getDescription(): string;
    public function getCost(): float;
}

// Concrete Component
class SimpleCoffee implements Coffee {
    public function getDescription(): string {
        return "Simple Coffee";
    }

    public function getCost(): float {
        return 2.0;
    }
}

// Decorator
abstract class CoffeeDecorator implements Coffee {
    protected $coffee;

    public function __construct(Coffee $coffee) {
        $this->coffee = $coffee;
    }

    public function getDescription(): string {
        return $this->coffee->getDescription();
    }

    public function getCost(): float {
        return $this->coffee->getCost();
    }
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
    public function getDescription(): string {
        return $this->coffee->getDescription() . ", Milk";
    }

    public function getCost(): float {
        return $this->coffee->getCost() + 0.5;
    }
}

class SugarDecorator extends CoffeeDecorator {
    public function getDescription(): string {
        return $this->coffee->getDescription() . ", Sugar";
    }

    public function getCost(): float {
        return $this->coffee->getCost() + 0.3;
    }
}

// Usage
$coffee = new SimpleCoffee();
echo $coffee->getDescription() . ": $" . number_format($coffee->getCost(), 2) . "\n";

$coffeeWithMilk = new MilkDecorator($coffee);
echo $coffeeWithMilk->getDescription() . ": $" . number_format($coffeeWithMilk->getCost(), 2) . "\n";

$coffeeWithMilkAndSugar = new SugarDecorator($coffeeWithMilk);
echo $coffeeWithMilkAndSugar->getDescription() . ": $" . number_format($coffeeWithMilkAndSugar->getCost(), 2) . "\n";
