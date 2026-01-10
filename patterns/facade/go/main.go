package main

import "fmt"

// Subsystem: CPU
type CPU struct{}

func (c *CPU) Freeze() string {
	return "CPU: Freezing processor"
}

func (c *CPU) Jump(position string) string {
	return fmt.Sprintf("CPU: Jumping to position %s", position)
}

func (c *CPU) Execute() string {
	return "CPU: Executing instructions"
}

// Subsystem: Memory
type Memory struct{}

func (m *Memory) Load(position, data string) string {
	return fmt.Sprintf("Memory: Loading '%s' at position %s", data, position)
}

// Subsystem: HardDrive
type HardDrive struct{}

func (h *HardDrive) Read(sector, size string) string {
	return fmt.Sprintf("HardDrive: Reading %s bytes from sector %s", size, sector)
}

// Facade
type ComputerFacade struct {
	cpu       *CPU
	memory    *Memory
	hardDrive *HardDrive
}

func NewComputerFacade() *ComputerFacade {
	return &ComputerFacade{
		cpu:       &CPU{},
		memory:    &Memory{},
		hardDrive: &HardDrive{},
	}
}

func (c *ComputerFacade) Start() []string {
	results := []string{}
	results = append(results, "Starting Computer...")
	results = append(results, c.cpu.Freeze())
	results = append(results, c.memory.Load("0x00", "BOOT_ADDRESS"))
	results = append(results, c.hardDrive.Read("0", "1024"))
	results = append(results, c.cpu.Jump("0x00"))
	results = append(results, c.cpu.Execute())
	results = append(results, "Computer started successfully!")
	return results
}

func main() {
	computer := NewComputerFacade()
	results := computer.Start()
	for _, result := range results {
		fmt.Println(result)
	}
}
