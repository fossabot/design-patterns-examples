// Receiver
class Light {
  private location: string;

  constructor(location: string) {
    this.location = location;
  }

  on(): string {
    return `${this.location} light is ON`;
  }

  off(): string {
    return `${this.location} light is OFF`;
  }
}

// Command interface
interface Command {
  execute(): string;
}

// Concrete Commands
class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): string {
    return this.light.on();
  }
}

class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): string {
    return this.light.off();
  }
}

// Invoker
class RemoteControl {
  private command: Command;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): string {
    return this.command.execute();
  }
}

// Usage
const light = new Light('Living Room');
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const remote = new RemoteControl();

remote.setCommand(lightOn);
console.log(remote.pressButton());

remote.setCommand(lightOff);
console.log(remote.pressButton());
