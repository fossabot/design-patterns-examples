<?php

// Observer interface
interface Observer {
    public function update(float $temperature): void;
}

// Subject interface
interface Subject {
    public function attach(Observer $observer): void;
    public function detach(Observer $observer): void;
    public function notify(): void;
}

// Concrete Subject
class WeatherStation implements Subject {
    private $observers = [];
    private $temperature = 0.0;

    public function attach(Observer $observer): void {
        $this->observers[] = $observer;
    }

    public function detach(Observer $observer): void {
        $key = array_search($observer, $this->observers, true);
        if ($key !== false) {
            unset($this->observers[$key]);
        }
    }

    public function notify(): void {
        foreach ($this->observers as $observer) {
            $observer->update($this->temperature);
        }
    }

    public function setTemperature(float $temp): void {
        $this->temperature = $temp;
        $this->notify();
    }
}

// Concrete Observers
class PhoneDisplay implements Observer {
    private $name;

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function update(float $temperature): void {
        echo "{$this->name}: Temperature updated to {$temperature}°C\n";
    }
}

class WindowDisplay implements Observer {
    private $name;

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function update(float $temperature): void {
        echo "{$this->name}: Temperature updated to {$temperature}°C\n";
    }
}

// Usage
$station = new WeatherStation();
$phone = new PhoneDisplay("Phone Display");
$window = new WindowDisplay("Window Display");

$station->attach($phone);
$station->attach($window);

$station->setTemperature(25.5);
$station->setTemperature(30.0);
