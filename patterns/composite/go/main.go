package main

import "fmt"

// Component interface
type Employee interface {
	ShowDetails() string
}

// Leaf
type Developer struct {
	name     string
	position string
}

func (d *Developer) ShowDetails() string {
	return fmt.Sprintf("%s - %s", d.name, d.position)
}

// Composite
type Manager struct {
	name        string
	position    string
	subordinates []Employee
}

func (m *Manager) ShowDetails() string {
	result := fmt.Sprintf("%s - %s\n", m.name, m.position)
	for _, employee := range m.subordinates {
		result += "  " + employee.ShowDetails() + "\n"
	}
	return result
}

func (m *Manager) Add(employee Employee) {
	m.subordinates = append(m.subordinates, employee)
}

func (m *Manager) Remove(employee Employee) {
	for i, e := range m.subordinates {
		if e == employee {
			m.subordinates = append(m.subordinates[:i], m.subordinates[i+1:]...)
			break
		}
	}
}

func main() {
	dev1 := &Developer{name: "John", position: "Frontend Developer"}
	dev2 := &Developer{name: "Jane", position: "Backend Developer"}

	manager := &Manager{name: "Bob", position: "Engineering Manager"}
	manager.Add(dev1)
	manager.Add(dev2)

	fmt.Println(manager.ShowDetails())
}
