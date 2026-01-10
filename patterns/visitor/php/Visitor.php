<?php

// Visitor interface
interface ShapeVisitor {
    public function visitCircle(Circle $circle): string;
    public function visitRectangle(Rectangle $rectangle): string;
    public function visitTriangle(Triangle $triangle): string;
}

// Element interface
interface Shape {
    public function accept(ShapeVisitor $visitor): string;
}

// Concrete Elements
class Circle implements Shape {
    public $radius;

    public function __construct(float $radius) {
        $this->radius = $radius;
    }

    public function accept(ShapeVisitor $visitor): string {
        return $visitor->visitCircle($this);
    }
}

class Rectangle implements Shape {
    public $width;
    public $height;

    public function __construct(float $width, float $height) {
        $this->width = $width;
        $this->height = $height;
    }

    public function accept(ShapeVisitor $visitor): string {
        return $visitor->visitRectangle($this);
    }
}

class Triangle implements Shape {
    public $base;
    public $height;

    public function __construct(float $base, float $height) {
        $this->base = $base;
        $this->height = $height;
    }

    public function accept(ShapeVisitor $visitor): string {
        return $visitor->visitTriangle($this);
    }
}

// Concrete Visitors
class AreaCalculator implements ShapeVisitor {
    public function visitCircle(Circle $circle): string {
        $area = pi() * $circle->radius * $circle->radius;
        return sprintf("Circle area: %.2f", $area);
    }

    public function visitRectangle(Rectangle $rectangle): string {
        $area = $rectangle->width * $rectangle->height;
        return sprintf("Rectangle area: %.2f", $area);
    }

    public function visitTriangle(Triangle $triangle): string {
        $area = 0.5 * $triangle->base * $triangle->height;
        return sprintf("Triangle area: %.2f", $area);
    }
}

class DrawVisitor implements ShapeVisitor {
    public function visitCircle(Circle $circle): string {
        return sprintf("Drawing Circle with radius %.2f", $circle->radius);
    }

    public function visitRectangle(Rectangle $rectangle): string {
        return sprintf("Drawing Rectangle %.2f x %.2f", $rectangle->width, $rectangle->height);
    }

    public function visitTriangle(Triangle $triangle): string {
        return sprintf("Drawing Triangle base %.2f, height %.2f", $triangle->base, $triangle->height);
    }
}

// Usage
$shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4)
];

$areaCalc = new AreaCalculator();
$drawer = new DrawVisitor();

echo "Calculating areas:\n";
foreach ($shapes as $shape) {
    echo $shape->accept($areaCalc) . "\n";
}

echo "\nDrawing shapes:\n";
foreach ($shapes as $shape) {
    echo $shape->accept($drawer) . "\n";
}
