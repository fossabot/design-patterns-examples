<?php

// Implementor interface
interface Color {
    public function applyColor(): string;
}

// Concrete Implementors
class RedColor implements Color {
    public function applyColor(): string {
        return "red";
    }
}

class BlueColor implements Color {
    public function applyColor(): string {
        return "blue";
    }
}

// Abstraction
abstract class Shape {
    protected $color;

    public function __construct(Color $color) {
        $this->color = $color;
    }

    abstract public function draw(): string;
}

// Refined Abstractions
class Circle extends Shape {
    public function draw(): string {
        return "Drawing Circle with color " . $this->color->applyColor();
    }
}

class Square extends Shape {
    public function draw(): string {
        return "Drawing Square with color " . $this->color->applyColor();
    }
}

// Usage
$red = new RedColor();
$blue = new BlueColor();

$redCircle = new Circle($red);
$blueSquare = new Square($blue);

echo $redCircle->draw() . "\n";
echo $blueSquare->draw() . "\n";
