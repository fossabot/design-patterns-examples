package main

import "fmt"

// Observer interface
type Observer interface {
	Update(temperature float64)
}

// Subject interface
type Subject interface {
	Attach(observer Observer)
	Detach(observer Observer)
	Notify()
}

// Concrete Subject
type WeatherStation struct {
	observers   []Observer
	temperature float64
}

func NewWeatherStation() *WeatherStation {
	return &WeatherStation{observers: []Observer{}}
}

func (w *WeatherStation) Attach(observer Observer) {
	w.observers = append(w.observers, observer)
}

func (w *WeatherStation) Detach(observer Observer) {
	for i, obs := range w.observers {
		if obs == observer {
			w.observers = append(w.observers[:i], w.observers[i+1:]...)
			break
		}
	}
}

func (w *WeatherStation) Notify() {
	for _, observer := range w.observers {
		observer.Update(w.temperature)
	}
}

func (w *WeatherStation) SetTemperature(temp float64) {
	w.temperature = temp
	w.Notify()
}

// Concrete Observers
type PhoneDisplay struct {
	name string
}

func (p *PhoneDisplay) Update(temperature float64) {
	fmt.Printf("%s: Temperature updated to %.1f°C\n", p.name, temperature)
}

type WindowDisplay struct {
	name string
}

func (w *WindowDisplay) Update(temperature float64) {
	fmt.Printf("%s: Temperature updated to %.1f°C\n", w.name, temperature)
}

func main() {
	station := NewWeatherStation()
	
	phone := &PhoneDisplay{name: "Phone Display"}
	window := &WindowDisplay{name: "Window Display"}
	
	station.Attach(phone)
	station.Attach(window)
	
	station.SetTemperature(25.5)
	station.SetTemperature(30.0)
}
