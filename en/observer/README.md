# Observer Pattern - Angular 2+

This example demonstrates the Observer pattern in Angular 2+ using a weather station with multiple displays.

## Description

The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified automatically. In this example, multiple displays observe a weather station and get updated when weather data changes.

## Files

- `weather-observer.ts` - Observer pattern implementation with weather station
- `observer.component.ts` - Component that demonstrates the pattern
- `observer.component.html` - Template for the component
- `observer.component.css` - Styles for the component

## How It Works

1. `Subject` interface defines methods for managing observers
2. `Observer` interface defines the update method
3. `WeatherStation` is the subject that notifies observers of changes
4. `Display` objects are observers that react to weather updates
