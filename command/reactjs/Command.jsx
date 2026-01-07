import React, { useState } from 'react';

// Receiver
class Light {
  constructor(location) {
    this.location = location;
  }

  on() {
    return `${this.location} light is ON`;
  }

  off() {
    return `${this.location} light is OFF`;
  }
}

// Concrete Commands
class LightOnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    return this.light.on();
  }
}

class LightOffCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    return this.light.off();
  }
}

// Invoker
class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    return this.command.execute();
  }
}

// Component
const CommandExample = () => {
  const [output, setOutput] = useState([]);

  const runExample = () => {
    const light = new Light('Living Room');
    const lightOn = new LightOnCommand(light);
    const lightOff = new LightOffCommand(light);
    const remote = new RemoteControl();

    const results = [];
    
    remote.setCommand(lightOn);
    results.push(remote.pressButton());
    
    remote.setCommand(lightOff);
    results.push(remote.pressButton());

    setOutput(results);
  };

  return (
    <div className="command-example">
      <h2>Command Pattern</h2>
      <p>Remote control with on/off commands for devices</p>
      <button onClick={runExample}>Test Remote</button>
      {output.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default CommandExample;
