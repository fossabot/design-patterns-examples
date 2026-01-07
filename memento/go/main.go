package main

import "fmt"

// Memento
type Memento struct {
	content string
}

func (m *Memento) GetContent() string {
	return m.content
}

// Originator
type TextEditor struct {
	content string
}

func (t *TextEditor) SetContent(content string) {
	t.content = content
}

func (t *TextEditor) GetContent() string {
	return t.content
}

func (t *TextEditor) Save() *Memento {
	return &Memento{content: t.content}
}

func (t *TextEditor) Restore(memento *Memento) {
	t.content = memento.GetContent()
}

// Caretaker
type History struct {
	mementos []*Memento
}

func NewHistory() *History {
	return &History{mementos: []*Memento{}}
}

func (h *History) Push(memento *Memento) {
	h.mementos = append(h.mementos, memento)
}

func (h *History) Pop() *Memento {
	if len(h.mementos) == 0 {
		return nil
	}
	lastIndex := len(h.mementos) - 1
	memento := h.mementos[lastIndex]
	h.mementos = h.mementos[:lastIndex]
	return memento
}

func main() {
	editor := &TextEditor{}
	history := NewHistory()

	editor.SetContent("Version 1")
	history.Push(editor.Save())
	fmt.Println("Current:", editor.GetContent())

	editor.SetContent("Version 2")
	history.Push(editor.Save())
	fmt.Println("Current:", editor.GetContent())

	editor.SetContent("Version 3")
	fmt.Println("Current:", editor.GetContent())

	// Undo
	editor.Restore(history.Pop())
	fmt.Println("After undo:", editor.GetContent())

	editor.Restore(history.Pop())
	fmt.Println("After undo:", editor.GetContent())
}
