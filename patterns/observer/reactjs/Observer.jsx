import React, { useState } from 'react';

// Concrete Subject
class WeatherStation {
  constructor() {
    this.observers = [];
    this.temperature = 0;
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notify() {
    this.observers.forEach(observer => observer.update(this.temperature));
  }

  setTemperature(temp) {
    this.temperature = temp;
    this.notify();
  }
}

// Concrete Observers
class Display {
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  update(temperature) {
    this.messages.push(`${this.name}: Temperature updated to ${temperature}°C`);
  }
}

// Component
const ObserverExample = () => {
  const [output, setOutput] = useState([]);

  const runExample = () => {
    const station = new WeatherStation();
    const phone = new Display('Phone Display');
    const window = new Display('Window Display');

    station.attach(phone);
    station.attach(window);

    station.setTemperature(25.5);
    station.setTemperature(30.0);

    const results = [...phone.messages, ...window.messages];
    setOutput(results);
  };

  return (
    <div className="observer-example">
      <h2>Observer Pattern</h2>
      <p>Weather station that notifies multiple displays</p>
      <button onClick={runExample}>Update Weather</button>
      {output.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default ObserverExample;
