<?php

// Subsystem: CPU
class CPU {
    public function freeze(): string {
        return "CPU: Freezing processor";
    }

    public function jump(string $position): string {
        return "CPU: Jumping to position {$position}";
    }

    public function execute(): string {
        return "CPU: Executing instructions";
    }
}

// Subsystem: Memory
class Memory {
    public function load(string $position, string $data): string {
        return "Memory: Loading '{$data}' at position {$position}";
    }
}

// Subsystem: HardDrive
class HardDrive {
    public function read(string $sector, string $size): string {
        return "HardDrive: Reading {$size} bytes from sector {$sector}";
    }
}

// Facade
class ComputerFacade {
    private $cpu;
    private $memory;
    private $hardDrive;

    public function __construct() {
        $this->cpu = new CPU();
        $this->memory = new Memory();
        $this->hardDrive = new HardDrive();
    }

    public function start(): array {
        $results = [];
        $results[] = "Starting Computer...";
        $results[] = $this->cpu->freeze();
        $results[] = $this->memory->load("0x00", "BOOT_ADDRESS");
        $results[] = $this->hardDrive->read("0", "1024");
        $results[] = $this->cpu->jump("0x00");
        $results[] = $this->cpu->execute();
        $results[] = "Computer started successfully!";
        return $results;
    }
}

// Usage
$computer = new ComputerFacade();
$results = $computer->start();
foreach ($results as $result) {
    echo $result . "\n";
}
