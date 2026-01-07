package main

import "fmt"

// Request
type SupportTicket struct {
	level   int
	message string
}

// Handler interface
type SupportHandler interface {
	SetNext(handler SupportHandler)
	HandleRequest(ticket *SupportTicket) string
}

// Base handler
type BaseHandler struct {
	next SupportHandler
}

func (b *BaseHandler) SetNext(handler SupportHandler) {
	b.next = handler
}

// Level 1 Support
type Level1Support struct {
	BaseHandler
}

func (l *Level1Support) HandleRequest(ticket *SupportTicket) string {
	if ticket.level <= 1 {
		return fmt.Sprintf("Level 1 Support: Handling ticket - %s", ticket.message)
	}
	if l.next != nil {
		return l.next.HandleRequest(ticket)
	}
	return "No handler available"
}

// Level 2 Support
type Level2Support struct {
	BaseHandler
}

func (l *Level2Support) HandleRequest(ticket *SupportTicket) string {
	if ticket.level <= 2 {
		return fmt.Sprintf("Level 2 Support: Handling ticket - %s", ticket.message)
	}
	if l.next != nil {
		return l.next.HandleRequest(ticket)
	}
	return "No handler available"
}

// Level 3 Support
type Level3Support struct {
	BaseHandler
}

func (l *Level3Support) HandleRequest(ticket *SupportTicket) string {
	if ticket.level <= 3 {
		return fmt.Sprintf("Level 3 Support: Handling ticket - %s", ticket.message)
	}
	if l.next != nil {
		return l.next.HandleRequest(ticket)
	}
	return "No handler available"
}

func main() {
	level1 := &Level1Support{}
	level2 := &Level2Support{}
	level3 := &Level3Support{}

	level1.SetNext(level2)
	level2.SetNext(level3)

	tickets := []*SupportTicket{
		{level: 1, message: "Password reset"},
		{level: 2, message: "Software installation issue"},
		{level: 3, message: "Server crash investigation"},
	}

	for _, ticket := range tickets {
		fmt.Println(level1.HandleRequest(ticket))
	}
}
