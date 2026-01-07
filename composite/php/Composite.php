<?php

// Component interface
interface Employee {
    public function showDetails(): string;
}

// Leaf
class Developer implements Employee {
    private $name;
    private $position;

    public function __construct(string $name, string $position) {
        $this->name = $name;
        $this->position = $position;
    }

    public function showDetails(): string {
        return "{$this->name} - {$this->position}";
    }
}

// Composite
class Manager implements Employee {
    private $name;
    private $position;
    private $subordinates = [];

    public function __construct(string $name, string $position) {
        $this->name = $name;
        $this->position = $position;
    }

    public function add(Employee $employee): void {
        $this->subordinates[] = $employee;
    }

    public function remove(Employee $employee): void {
        $key = array_search($employee, $this->subordinates, true);
        if ($key !== false) {
            unset($this->subordinates[$key]);
        }
    }

    public function showDetails(): string {
        $result = "{$this->name} - {$this->position}\n";
        foreach ($this->subordinates as $employee) {
            $result .= "  " . $employee->showDetails() . "\n";
        }
        return $result;
    }
}

// Usage
$dev1 = new Developer("John", "Frontend Developer");
$dev2 = new Developer("Jane", "Backend Developer");

$manager = new Manager("Bob", "Engineering Manager");
$manager->add($dev1);
$manager->add($dev2);

echo $manager->showDetails();
