<?php

// Receiver
class Light {
    private $location;

    public function __construct(string $location) {
        $this->location = $location;
    }

    public function on(): string {
        return "{$this->location} light is ON";
    }

    public function off(): string {
        return "{$this->location} light is OFF";
    }
}

// Command interface
interface Command {
    public function execute(): string;
}

// Concrete Commands
class LightOnCommand implements Command {
    private $light;

    public function __construct(Light $light) {
        $this->light = $light;
    }

    public function execute(): string {
        return $this->light->on();
    }
}

class LightOffCommand implements Command {
    private $light;

    public function __construct(Light $light) {
        $this->light = $light;
    }

    public function execute(): string {
        return $this->light->off();
    }
}

// Invoker
class RemoteControl {
    private $command;

    public function setCommand(Command $command): void {
        $this->command = $command;
    }

    public function pressButton(): string {
        return $this->command->execute();
    }
}

// Usage
$light = new Light("Living Room");
$lightOn = new LightOnCommand($light);
$lightOff = new LightOffCommand($light);
$remote = new RemoteControl();

$remote->setCommand($lightOn);
echo $remote->pressButton() . "\n";

$remote->setCommand($lightOff);
echo $remote->pressButton() . "\n";
