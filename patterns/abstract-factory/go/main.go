package main

import "fmt"

// Abstract Products
type Button interface {
	Render() string
}

type Checkbox interface {
	Render() string
}

// Concrete Products - Windows
type WindowsButton struct{}

func (w *WindowsButton) Render() string {
	return "Rendering Windows Button"
}

type WindowsCheckbox struct{}

func (w *WindowsCheckbox) Render() string {
	return "Rendering Windows Checkbox"
}

// Concrete Products - Mac
type MacButton struct{}

func (m *MacButton) Render() string {
	return "Rendering Mac Button"
}

type MacCheckbox struct{}

func (m *MacCheckbox) Render() string {
	return "Rendering Mac Checkbox"
}

// Abstract Factory
type GUIFactory interface {
	CreateButton() Button
	CreateCheckbox() Checkbox
}

// Concrete Factory - Windows
type WindowsFactory struct{}

func (w *WindowsFactory) CreateButton() Button {
	return &WindowsButton{}
}

func (w *WindowsFactory) CreateCheckbox() Checkbox {
	return &WindowsCheckbox{}
}

// Concrete Factory - Mac
type MacFactory struct{}

func (m *MacFactory) CreateButton() Button {
	return &MacButton{}
}

func (m *MacFactory) CreateCheckbox() Checkbox {
	return &MacCheckbox{}
}

func main() {
	var factory GUIFactory

	// Using Windows Factory
	factory = &WindowsFactory{}
	button := factory.CreateButton()
	checkbox := factory.CreateCheckbox()
	fmt.Println(button.Render())
	fmt.Println(checkbox.Render())

	// Using Mac Factory
	factory = &MacFactory{}
	button = factory.CreateButton()
	checkbox = factory.CreateCheckbox()
	fmt.Println(button.Render())
	fmt.Println(checkbox.Render())
}
