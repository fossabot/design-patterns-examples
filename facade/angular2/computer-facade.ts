// Subsystem classes
export class CPU {
  freeze(): string {
    return 'CPU: Freezing processor';
  }

  jump(position: number): string {
    return `CPU: Jumping to position ${position}`;
  }

  execute(): string {
    return 'CPU: Executing';
  }
}

export class Memory {
  load(position: number, data: string): string {
    return `Memory: Loading '${data}' at position ${position}`;
  }
}

export class HardDrive {
  read(sector: number, size: number): string {
    return `HardDrive: Reading ${size} bytes from sector ${sector}`;
  }
}

// Facade
export class ComputerFacade {
  private cpu: CPU;
  private memory: Memory;
  private hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start(): string[] {
    const steps: string[] = [];
    steps.push(this.cpu.freeze());
    steps.push(this.memory.load(0, 'Boot data'));
    steps.push(this.cpu.jump(0));
    steps.push(this.hardDrive.read(100, 1024));
    steps.push(this.cpu.execute());
    steps.push('Computer started successfully!');
    return steps;
  }
}
