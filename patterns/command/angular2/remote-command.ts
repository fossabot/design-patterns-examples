// Command interface
export interface Command {
  execute(): string;
  undo(): string;
}

// Receiver
export class Light {
  turnOn(): string {
    return 'Light is ON';
  }

  turnOff(): string {
    return 'Light is OFF';
  }
}

// Concrete Commands
export class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): string {
    return this.light.turnOn();
  }

  undo(): string {
    return this.light.turnOff();
  }
}

export class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): string {
    return this.light.turnOff();
  }

  undo(): string {
    return this.light.turnOn();
  }
}

// Invoker
export class RemoteControl {
  private history: Command[] = [];

  executeCommand(command: Command): string {
    this.history.push(command);
    return command.execute();
  }

  undo(): string {
    const command = this.history.pop();
    return command ? command.undo() : 'Nothing to undo';
  }
}
