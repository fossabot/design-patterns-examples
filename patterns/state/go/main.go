package main

import "fmt"

// State interface
type DocumentState interface {
	Publish(*Document) string
	Review(*Document) string
}

// Context
type Document struct {
	state DocumentState
	name  string
}

func NewDocument(name string) *Document {
	return &Document{
		name:  name,
		state: &DraftState{},
	}
}

func (d *Document) SetState(state DocumentState) {
	d.state = state
}

func (d *Document) Publish() string {
	return d.state.Publish(d)
}

func (d *Document) Review() string {
	return d.state.Review(d)
}

// Concrete States
type DraftState struct{}

func (s *DraftState) Publish(doc *Document) string {
	return "Cannot publish from Draft. Please review first."
}

func (s *DraftState) Review(doc *Document) string {
	doc.SetState(&ReviewState{})
	return "Document moved to Review state"
}

type ReviewState struct{}

func (s *ReviewState) Publish(doc *Document) string {
	doc.SetState(&PublishedState{})
	return "Document published successfully"
}

func (s *ReviewState) Review(doc *Document) string {
	return "Document is already in Review state"
}

type PublishedState struct{}

func (s *PublishedState) Publish(doc *Document) string {
	return "Document is already published"
}

func (s *PublishedState) Review(doc *Document) string {
	return "Cannot review a published document"
}

func main() {
	doc := NewDocument("Design Patterns Guide")
	
	fmt.Println("Initial state: Draft")
	fmt.Println(doc.Publish())
	fmt.Println(doc.Review())
	fmt.Println(doc.Publish())
}
