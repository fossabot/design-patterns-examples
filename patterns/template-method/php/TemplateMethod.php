<?php

// Abstract class (template)
abstract class Beverage {
    public function prepareRecipe(): array {
        $results = [];
        $results[] = "Boiling water";
        $results[] = $this->brew();
        $results[] = "Pouring into cup";
        $results[] = $this->addCondiments();
        return $results;
    }

    abstract protected function brew(): string;
    abstract protected function addCondiments(): string;
}

// Concrete implementations
class Tea extends Beverage {
    protected function brew(): string {
        return "Steeping the tea";
    }

    protected function addCondiments(): string {
        return "Adding lemon";
    }
}

class Coffee extends Beverage {
    protected function brew(): string {
        return "Dripping coffee through filter";
    }

    protected function addCondiments(): string {
        return "Adding sugar and milk";
    }
}

// Usage
echo "Making tea:\n";
$tea = new Tea();
foreach ($tea->prepareRecipe() as $step) {
    echo "- {$step}\n";
}

echo "\nMaking coffee:\n";
$coffee = new Coffee();
foreach ($coffee->prepareRecipe() as $step) {
    echo "- {$step}\n";
}
