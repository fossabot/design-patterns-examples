package main

import "fmt"

// Mediator interface
type ChatMediator interface {
	SendMessage(message string, user *User)
	AddUser(user *User)
}

// Concrete Mediator
type ChatRoom struct {
	users []*User
}

func NewChatRoom() *ChatRoom {
	return &ChatRoom{users: []*User{}}
}

func (c *ChatRoom) AddUser(user *User) {
	c.users = append(c.users, user)
}

func (c *ChatRoom) SendMessage(message string, sender *User) {
	for _, user := range c.users {
		if user != sender {
			user.Receive(message, sender.name)
		}
	}
}

// User
type User struct {
	name     string
	mediator ChatMediator
	messages []string
}

func NewUser(name string, mediator ChatMediator) *User {
	user := &User{name: name, mediator: mediator, messages: []string{}}
	mediator.AddUser(user)
	return user
}

func (u *User) Send(message string) {
	fmt.Printf("%s sends: %s\n", u.name, message)
	u.mediator.SendMessage(message, u)
}

func (u *User) Receive(message string, from string) {
	msg := fmt.Sprintf("%s receives from %s: %s", u.name, from, message)
	u.messages = append(u.messages, msg)
	fmt.Println(msg)
}

func main() {
	chatRoom := NewChatRoom()
	
	alice := NewUser("Alice", chatRoom)
	bob := NewUser("Bob", chatRoom)
	charlie := NewUser("Charlie", chatRoom)
	
	alice.Send("Hello everyone!")
	bob.Send("Hi Alice!")
}
