import React, { useState } from 'react';

// Mediator
class ChatRoom {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  sendMessage(message, sender) {
    this.users.forEach(user => {
      if (user !== sender) {
        user.receive(message, sender.name);
      }
    });
  }
}

// User
class User {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
    this.messages = [];
    mediator.addUser(this);
  }

  send(message) {
    this.messages.push(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message, from) {
    this.messages.push(`${this.name} receives from ${from}: ${message}`);
  }
}

// Component
const MediatorExample = () => {
  const [output, setOutput] = useState([]);

  const runExample = () => {
    const chatRoom = new ChatRoom();
    const alice = new User('Alice', chatRoom);
    const bob = new User('Bob', chatRoom);
    const charlie = new User('Charlie', chatRoom);

    alice.send('Hello everyone!');
    bob.send('Hi Alice!');

    const results = [
      ...alice.messages,
      ...bob.messages,
      ...charlie.messages
    ];

    setOutput(results);
  };

  return (
    <div className="mediator-example">
      <h2>Mediator Pattern</h2>
      <p>Chat room where users communicate through a mediator</p>
      <button onClick={runExample}>Start Chat</button>
      {output.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default MediatorExample;
