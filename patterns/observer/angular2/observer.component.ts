import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherStation, Display } from './weather-observer';

@Component({
  selector: 'app-observer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent {
  weatherStation: WeatherStation;
  displays: Display[] = [];
  temperature = 25;
  humidity = 65;
  pressure = 1013;

  constructor() {
    this.weatherStation = new WeatherStation();
    
    // Create and register displays
    const display1 = new Display('Display 1');
    const display2 = new Display('Display 2');
    const display3 = new Display('Display 3');
    
    this.weatherStation.registerObserver(display1);
    this.weatherStation.registerObserver(display2);
    this.weatherStation.registerObserver(display3);
    
    this.displays = [display1, display2, display3];
  }

  updateWeather(): void {
    this.weatherStation.setMeasurements(
      this.temperature,
      this.humidity,
      this.pressure
    );
  }
}
