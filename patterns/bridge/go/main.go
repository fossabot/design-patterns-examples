package main

import "fmt"

// Implementor interface
type Color interface {
	ApplyColor() string
}

// Concrete Implementors
type RedColor struct{}

func (r *RedColor) ApplyColor() string {
	return "red"
}

type BlueColor struct{}

func (b *BlueColor) ApplyColor() string {
	return "blue"
}

// Abstraction
type Shape interface {
	Draw() string
}

// Refined Abstractions
type Circle struct {
	color Color
}

func NewCircle(c Color) *Circle {
	return &Circle{color: c}
}

func (c *Circle) Draw() string {
	return fmt.Sprintf("Drawing Circle with color %s", c.color.ApplyColor())
}

type Square struct {
	color Color
}

func NewSquare(c Color) *Square {
	return &Square{color: c}
}

func (s *Square) Draw() string {
	return fmt.Sprintf("Drawing Square with color %s", s.color.ApplyColor())
}

func main() {
	red := &RedColor{}
	blue := &BlueColor{}

	redCircle := NewCircle(red)
	blueSquare := NewSquare(blue)

	fmt.Println(redCircle.Draw())
	fmt.Println(blueSquare.Draw())
}
