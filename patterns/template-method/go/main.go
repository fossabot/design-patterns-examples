package main

import "fmt"

// Abstract class (template)
type Beverage interface {
	PrepareRecipe() []string
	Brew() string
	AddCondiments() string
}

// Base template implementation
type BeverageBase struct {
	beverage Beverage
}

func (b *BeverageBase) PrepareRecipe() []string {
	results := []string{}
	results = append(results, "Boiling water")
	results = append(results, b.beverage.Brew())
	results = append(results, "Pouring into cup")
	results = append(results, b.beverage.AddCondiments())
	return results
}

// Concrete implementations
type Tea struct {
	BeverageBase
}

func NewTea() *Tea {
	tea := &Tea{}
	tea.beverage = tea
	return tea
}

func (t *Tea) Brew() string {
	return "Steeping the tea"
}

func (t *Tea) AddCondiments() string {
	return "Adding lemon"
}

func (t *Tea) PrepareRecipe() []string {
	return t.BeverageBase.PrepareRecipe()
}

type Coffee struct {
	BeverageBase
}

func NewCoffee() *Coffee {
	coffee := &Coffee{}
	coffee.beverage = coffee
	return coffee
}

func (c *Coffee) Brew() string {
	return "Dripping coffee through filter"
}

func (c *Coffee) AddCondiments() string {
	return "Adding sugar and milk"
}

func (c *Coffee) PrepareRecipe() []string {
	return c.BeverageBase.PrepareRecipe()
}

func main() {
	fmt.Println("Making tea:")
	tea := NewTea()
	for _, step := range tea.PrepareRecipe() {
		fmt.Println("- " + step)
	}

	fmt.Println("\nMaking coffee:")
	coffee := NewCoffee()
	for _, step := range coffee.PrepareRecipe() {
		fmt.Println("- " + step)
	}
}
