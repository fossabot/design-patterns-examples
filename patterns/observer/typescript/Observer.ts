// Observer interface
interface Observer {
  update(temperature: number): void;
}

// Subject interface
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Concrete Subject
class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    this.observers.forEach(observer => observer.update(this.temperature));
  }

  setTemperature(temp: number): void {
    this.temperature = temp;
    this.notify();
  }
}

// Concrete Observers
class PhoneDisplay implements Observer {
  constructor(private name: string) {}

  update(temperature: number): void {
    console.log(`${this.name}: Temperature updated to ${temperature}°C`);
  }
}

class WindowDisplay implements Observer {
  constructor(private name: string) {}

  update(temperature: number): void {
    console.log(`${this.name}: Temperature updated to ${temperature}°C`);
  }
}

// Usage
const station = new WeatherStation();
const phone = new PhoneDisplay('Phone Display');
const window = new WindowDisplay('Window Display');

station.attach(phone);
station.attach(window);

station.setTemperature(25.5);
station.setTemperature(30.0);
