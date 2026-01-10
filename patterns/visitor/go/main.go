package main

import (
	"fmt"
	"math"
)

// Visitor interface
type ShapeVisitor interface {
	VisitCircle(*Circle) string
	VisitRectangle(*Rectangle) string
	VisitTriangle(*Triangle) string
}

// Element interface
type Shape interface {
	Accept(ShapeVisitor) string
}

// Concrete Elements
type Circle struct {
	radius float64
}

func (c *Circle) Accept(visitor ShapeVisitor) string {
	return visitor.VisitCircle(c)
}

type Rectangle struct {
	width  float64
	height float64
}

func (r *Rectangle) Accept(visitor ShapeVisitor) string {
	return visitor.VisitRectangle(r)
}

type Triangle struct {
	base   float64
	height float64
}

func (t *Triangle) Accept(visitor ShapeVisitor) string {
	return visitor.VisitTriangle(t)
}

// Concrete Visitors
type AreaCalculator struct{}

func (a *AreaCalculator) VisitCircle(c *Circle) string {
	area := math.Pi * c.radius * c.radius
	return fmt.Sprintf("Circle area: %.2f", area)
}

func (a *AreaCalculator) VisitRectangle(r *Rectangle) string {
	area := r.width * r.height
	return fmt.Sprintf("Rectangle area: %.2f", area)
}

func (a *AreaCalculator) VisitTriangle(t *Triangle) string {
	area := 0.5 * t.base * t.height
	return fmt.Sprintf("Triangle area: %.2f", area)
}

type DrawVisitor struct{}

func (d *DrawVisitor) VisitCircle(c *Circle) string {
	return fmt.Sprintf("Drawing Circle with radius %.2f", c.radius)
}

func (d *DrawVisitor) VisitRectangle(r *Rectangle) string {
	return fmt.Sprintf("Drawing Rectangle %.2f x %.2f", r.width, r.height)
}

func (d *DrawVisitor) VisitTriangle(t *Triangle) string {
	return fmt.Sprintf("Drawing Triangle base %.2f, height %.2f", t.base, t.height)
}

func main() {
	shapes := []Shape{
		&Circle{radius: 5},
		&Rectangle{width: 4, height: 6},
		&Triangle{base: 3, height: 4},
	}

	areaCalc := &AreaCalculator{}
	drawer := &DrawVisitor{}

	fmt.Println("Calculating areas:")
	for _, shape := range shapes {
		fmt.Println(shape.Accept(areaCalc))
	}

	fmt.Println("\nDrawing shapes:")
	for _, shape := range shapes {
		fmt.Println(shape.Accept(drawer))
	}
}
