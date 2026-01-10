export interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

export class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature = 0;
  private humidity = 0;
  private pressure = 0;

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    this.observers.forEach(observer => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }

  setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }
}

export class Display implements Observer {
  constructor(public name: string) {}
  
  private data = '';

  update(temperature: number, humidity: number, pressure: number): void {
    this.data = `${this.name}: Temp=${temperature}°C, Humidity=${humidity}%, Pressure=${pressure}hPa`;
  }

  getData(): string {
    return this.data;
  }
}
