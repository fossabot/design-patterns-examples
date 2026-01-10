<?php

// Product
class House {
    public $foundation;
    public $structure;
    public $roof;
    public $interior;

    public function display(): void {
        echo "House with:\n";
        echo "  Foundation: {$this->foundation}\n";
        echo "  Structure: {$this->structure}\n";
        echo "  Roof: {$this->roof}\n";
        echo "  Interior: {$this->interior}\n";
    }
}

// Builder interface
interface HouseBuilder {
    public function buildFoundation(): void;
    public function buildStructure(): void;
    public function buildRoof(): void;
    public function buildInterior(): void;
    public function getHouse(): House;
}

// Concrete Builder
class ConcreteHouseBuilder implements HouseBuilder {
    private $house;

    public function __construct() {
        $this->house = new House();
    }

    public function buildFoundation(): void {
        $this->house->foundation = "Concrete foundation";
    }

    public function buildStructure(): void {
        $this->house->structure = "Wood and brick structure";
    }

    public function buildRoof(): void {
        $this->house->roof = "Concrete roof";
    }

    public function buildInterior(): void {
        $this->house->interior = "Modern interior";
    }

    public function getHouse(): House {
        return $this->house;
    }
}

// Director
class Director {
    private $builder;

    public function __construct(HouseBuilder $builder) {
        $this->builder = $builder;
    }

    public function construct(): void {
        $this->builder->buildFoundation();
        $this->builder->buildStructure();
        $this->builder->buildRoof();
        $this->builder->buildInterior();
    }
}

// Usage
$builder = new ConcreteHouseBuilder();
$director = new Director($builder);
$director->construct();
$house = $builder->getHouse();
$house->display();
