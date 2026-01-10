package main

import "fmt"

// Prototype interface
type Prototype interface {
	Clone() Prototype
	GetInfo() string
}

// Concrete Prototype
type Document struct {
	Title   string
	Content string
}

func (d *Document) Clone() Prototype {
	return &Document{
		Title:   d.Title,
		Content: d.Content,
	}
}

func (d *Document) GetInfo() string {
	return fmt.Sprintf("Document: %s - %s", d.Title, d.Content)
}

func main() {
	// Original document
	original := &Document{
		Title:   "Original Document",
		Content: "This is the original content",
	}
	fmt.Println(original.GetInfo())

	// Clone the document
	clone := original.Clone().(*Document)
	clone.Title = "Cloned Document"
	clone.Content = "This is the cloned content"
	fmt.Println(clone.GetInfo())

	// Original remains unchanged
	fmt.Println("Original after cloning:", original.GetInfo())
}
