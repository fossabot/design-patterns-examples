import React, { useState } from 'react';

// Subsystem: CPU
class CPU {
  freeze() {
    return 'CPU: Freezing processor';
  }

  jump(position) {
    return `CPU: Jumping to position ${position}`;
  }

  execute() {
    return 'CPU: Executing instructions';
  }
}

// Subsystem: Memory
class Memory {
  load(position, data) {
    return `Memory: Loading '${data}' at position ${position}`;
  }
}

// Subsystem: HardDrive
class HardDrive {
  read(sector, size) {
    return `HardDrive: Reading ${size} bytes from sector ${sector}`;
  }
}

// Facade
class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start() {
    const results = [];
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

// Component
const FacadeExample = () => {
  const [output, setOutput] = useState([]);

  const startComputer = () => {
    const computer = new ComputerFacade();
    setOutput(computer.start());
  };

  return (
    <div className="facade-example">
      <h2>Facade Pattern</h2>
      <p>Simplified interface to start a computer system</p>
      <button onClick={startComputer}>Start Computer</button>
      {output.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default FacadeExample;
