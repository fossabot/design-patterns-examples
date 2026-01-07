package main

import "fmt"

// Component interface
type Coffee interface {
	GetDescription() string
	GetCost() float64
}

// Concrete Component
type SimpleCoffee struct{}

func (s *SimpleCoffee) GetDescription() string {
	return "Simple Coffee"
}

func (s *SimpleCoffee) GetCost() float64 {
	return 2.0
}

// Decorator
type CoffeeDecorator struct {
	coffee Coffee
}

func (d *CoffeeDecorator) GetDescription() string {
	return d.coffee.GetDescription()
}

func (d *CoffeeDecorator) GetCost() float64 {
	return d.coffee.GetCost()
}

// Concrete Decorators
type MilkDecorator struct {
	CoffeeDecorator
}

func NewMilkDecorator(c Coffee) *MilkDecorator {
	return &MilkDecorator{CoffeeDecorator{coffee: c}}
}

func (m *MilkDecorator) GetDescription() string {
	return m.coffee.GetDescription() + ", Milk"
}

func (m *MilkDecorator) GetCost() float64 {
	return m.coffee.GetCost() + 0.5
}

type SugarDecorator struct {
	CoffeeDecorator
}

func NewSugarDecorator(c Coffee) *SugarDecorator {
	return &SugarDecorator{CoffeeDecorator{coffee: c}}
}

func (s *SugarDecorator) GetDescription() string {
	return s.coffee.GetDescription() + ", Sugar"
}

func (s *SugarDecorator) GetCost() float64 {
	return s.coffee.GetCost() + 0.3
}

func main() {
	coffee := &SimpleCoffee{}
	fmt.Printf("%s: $%.2f\n", coffee.GetDescription(), coffee.GetCost())

	coffeeWithMilk := NewMilkDecorator(coffee)
	fmt.Printf("%s: $%.2f\n", coffeeWithMilk.GetDescription(), coffeeWithMilk.GetCost())

	coffeeWithMilkAndSugar := NewSugarDecorator(coffeeWithMilk)
	fmt.Printf("%s: $%.2f\n", coffeeWithMilkAndSugar.GetDescription(), coffeeWithMilkAndSugar.GetCost())
}
