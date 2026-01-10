package main

import "fmt"

// Receiver
type Light struct {
	location string
}

func (l *Light) On() string {
	return fmt.Sprintf("%s light is ON", l.location)
}

func (l *Light) Off() string {
	return fmt.Sprintf("%s light is OFF", l.location)
}

// Command interface
type Command interface {
	Execute() string
}

// Concrete Commands
type LightOnCommand struct {
	light *Light
}

func (c *LightOnCommand) Execute() string {
	return c.light.On()
}

type LightOffCommand struct {
	light *Light
}

func (c *LightOffCommand) Execute() string {
	return c.light.Off()
}

// Invoker
type RemoteControl struct {
	command Command
}

func (r *RemoteControl) SetCommand(command Command) {
	r.command = command
}

func (r *RemoteControl) PressButton() string {
	return r.command.Execute()
}

func main() {
	light := &Light{location: "Living Room"}
	
	lightOn := &LightOnCommand{light: light}
	lightOff := &LightOffCommand{light: light}
	
	remote := &RemoteControl{}
	
	remote.SetCommand(lightOn)
	fmt.Println(remote.PressButton())
	
	remote.SetCommand(lightOff)
	fmt.Println(remote.PressButton())
}
