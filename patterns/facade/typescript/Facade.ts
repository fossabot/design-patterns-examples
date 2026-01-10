// Subsystem: CPU
class CPU {
  freeze(): string {
    return 'CPU: Freezing processor';
  }

  jump(position: string): string {
    return `CPU: Jumping to position ${position}`;
  }

  execute(): string {
    return 'CPU: Executing instructions';
  }
}

// Subsystem: Memory
class Memory {
  load(position: string, data: string): string {
    return `Memory: Loading '${data}' at position ${position}`;
  }
}

// Subsystem: HardDrive
class HardDrive {
  read(sector: string, size: string): string {
    return `HardDrive: Reading ${size} bytes from sector ${sector}`;
  }
}

// Facade
class ComputerFacade {
  private cpu: CPU;
  private memory: Memory;
  private hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start(): string[] {
    const results: string[] = [];
    results.push('Starting Computer...');
    results.push(this.cpu.freeze());
    results.push(this.memory.load('0x00', 'BOOT_ADDRESS'));
    results.push(this.hardDrive.read('0', '1024'));
    results.push(this.cpu.jump('0x00'));
    results.push(this.cpu.execute());
    results.push('Computer started successfully!');
    return results;
  }
}

// Usage
const computer = new ComputerFacade();
const results = computer.start();
results.forEach(result => console.log(result));
