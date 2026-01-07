<?php

// Abstract Products
interface Button {
    public function render(): string;
}

interface Checkbox {
    public function render(): string;
}

// Concrete Products - Windows
class WindowsButton implements Button {
    public function render(): string {
        return "Rendering Windows Button";
    }
}

class WindowsCheckbox implements Checkbox {
    public function render(): string {
        return "Rendering Windows Checkbox";
    }
}

// Concrete Products - Mac
class MacButton implements Button {
    public function render(): string {
        return "Rendering Mac Button";
    }
}

class MacCheckbox implements Checkbox {
    public function render(): string {
        return "Rendering Mac Checkbox";
    }
}

// Abstract Factory
interface GUIFactory {
    public function createButton(): Button;
    public function createCheckbox(): Checkbox;
}

// Concrete Factory - Windows
class WindowsFactory implements GUIFactory {
    public function createButton(): Button {
        return new WindowsButton();
    }

    public function createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

// Concrete Factory - Mac
class MacFactory implements GUIFactory {
    public function createButton(): Button {
        return new MacButton();
    }

    public function createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

// Usage
$factory = new WindowsFactory();
$button = $factory->createButton();
$checkbox = $factory->createCheckbox();
echo $button->render() . "\n";
echo $checkbox->render() . "\n";

$factory = new MacFactory();
$button = $factory->createButton();
$checkbox = $factory->createCheckbox();
echo $button->render() . "\n";
echo $checkbox->render() . "\n";
