package main

import "fmt"

// Product
type House struct {
	Foundation string
	Structure  string
	Roof       string
	Interior   string
}

func (h *House) Display() {
	fmt.Printf("House with:\n")
	fmt.Printf("  Foundation: %s\n", h.Foundation)
	fmt.Printf("  Structure: %s\n", h.Structure)
	fmt.Printf("  Roof: %s\n", h.Roof)
	fmt.Printf("  Interior: %s\n", h.Interior)
}

// Builder interface
type HouseBuilder interface {
	BuildFoundation()
	BuildStructure()
	BuildRoof()
	BuildInterior()
	GetHouse() *House
}

// Concrete Builder
type ConcreteHouseBuilder struct {
	house *House
}

func NewConcreteHouseBuilder() *ConcreteHouseBuilder {
	return &ConcreteHouseBuilder{house: &House{}}
}

func (b *ConcreteHouseBuilder) BuildFoundation() {
	b.house.Foundation = "Concrete foundation"
}

func (b *ConcreteHouseBuilder) BuildStructure() {
	b.house.Structure = "Wood and brick structure"
}

func (b *ConcreteHouseBuilder) BuildRoof() {
	b.house.Roof = "Concrete roof"
}

func (b *ConcreteHouseBuilder) BuildInterior() {
	b.house.Interior = "Modern interior"
}

func (b *ConcreteHouseBuilder) GetHouse() *House {
	return b.house
}

// Director
type Director struct {
	builder HouseBuilder
}

func NewDirector(b HouseBuilder) *Director {
	return &Director{builder: b}
}

func (d *Director) Construct() {
	d.builder.BuildFoundation()
	d.builder.BuildStructure()
	d.builder.BuildRoof()
	d.builder.BuildInterior()
}

func main() {
	builder := NewConcreteHouseBuilder()
	director := NewDirector(builder)
	director.Construct()
	house := builder.GetHouse()
	house.Display()
}
