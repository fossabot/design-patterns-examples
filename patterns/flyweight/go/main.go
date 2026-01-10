package main

import "fmt"

// Flyweight: Character formatting (intrinsic state)
type CharacterFormat struct {
	font  string
	size  int
	color string
}

func (c *CharacterFormat) Display(char rune) string {
	return fmt.Sprintf("Character '%c' [Font: %s, Size: %d, Color: %s]", char, c.font, c.size, c.color)
}

// Flyweight Factory
type FormatFactory struct {
	formats map[string]*CharacterFormat
}

func NewFormatFactory() *FormatFactory {
	return &FormatFactory{
		formats: make(map[string]*CharacterFormat),
	}
}

func (f *FormatFactory) GetFormat(font string, size int, color string) *CharacterFormat {
	key := fmt.Sprintf("%s-%d-%s", font, size, color)
	if format, exists := f.formats[key]; exists {
		return format
	}
	format := &CharacterFormat{font: font, size: size, color: color}
	f.formats[key] = format
	fmt.Printf("Created new format: %s\n", key)
	return format
}

func (f *FormatFactory) GetTotalFormats() int {
	return len(f.formats)
}

// Character with extrinsic state
type Character struct {
	char   rune
	format *CharacterFormat
}

func NewCharacter(char rune, format *CharacterFormat) *Character {
	return &Character{char: char, format: format}
}

func (c *Character) Display() string {
	return c.format.Display(c.char)
}

// Text Editor
type TextEditor struct {
	characters []*Character
	factory    *FormatFactory
}

func NewTextEditor() *TextEditor {
	return &TextEditor{
		characters: []*Character{},
		factory:    NewFormatFactory(),
	}
}

func (t *TextEditor) AddCharacter(char rune, font string, size int, color string) {
	format := t.factory.GetFormat(font, size, color)
	character := NewCharacter(char, format)
	t.characters = append(t.characters, character)
}

func (t *TextEditor) Display() []string {
	results := []string{}
	for _, char := range t.characters {
		results = append(results, char.Display())
	}
	results = append(results, fmt.Sprintf("Total unique formats: %d", t.factory.GetTotalFormats()))
	return results
}

func main() {
	editor := NewTextEditor()
	
	// Adding characters with different formats
	editor.AddCharacter('H', "Arial", 12, "Red")
	editor.AddCharacter('e', "Arial", 12, "Red")
	editor.AddCharacter('l', "Arial", 12, "Red")
	editor.AddCharacter('l', "Times", 14, "Blue")
	editor.AddCharacter('o', "Times", 14, "Blue")
	
	results := editor.Display()
	for _, result := range results {
		fmt.Println(result)
	}
}
