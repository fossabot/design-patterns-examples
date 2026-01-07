import React, { useState } from 'react';

// Request
class SupportTicket {
  constructor(level, message) {
    this.level = level;
    this.message = message;
  }
}

// Base Handler
class SupportHandler {
  setNext(handler) {
    this.next = handler;
  }
}

// Level 1 Support
class Level1Support extends SupportHandler {
  handleRequest(ticket) {
    if (ticket.level <= 1) {
      return `Level 1 Support: Handling ticket - ${ticket.message}`;
    }
    if (this.next) {
      return this.next.handleRequest(ticket);
    }
    return 'No handler available';
  }
}

// Level 2 Support
class Level2Support extends SupportHandler {
  handleRequest(ticket) {
    if (ticket.level <= 2) {
      return `Level 2 Support: Handling ticket - ${ticket.message}`;
    }
    if (this.next) {
      return this.next.handleRequest(ticket);
    }
    return 'No handler available';
  }
}

// Level 3 Support
class Level3Support extends SupportHandler {
  handleRequest(ticket) {
    if (ticket.level <= 3) {
      return `Level 3 Support: Handling ticket - ${ticket.message}`;
    }
    if (this.next) {
      return this.next.handleRequest(ticket);
    }
    return 'No handler available';
  }
}

// Component
const ChainOfResponsibilityExample = () => {
  const [output, setOutput] = useState([]);

  const runExample = () => {
    const level1 = new Level1Support();
    const level2 = new Level2Support();
    const level3 = new Level3Support();

    level1.setNext(level2);
    level2.setNext(level3);

    const tickets = [
      new SupportTicket(1, 'Password reset'),
      new SupportTicket(2, 'Software installation issue'),
      new SupportTicket(3, 'Server crash investigation'),
    ];

    const results = tickets.map(ticket => level1.handleRequest(ticket));
    setOutput(results);
  };

  return (
    <div className="chain-example">
      <h2>Chain of Responsibility Pattern</h2>
      <p>Support ticket system with multiple support levels</p>
      <button onClick={runExample}>Process Tickets</button>
      {output.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default ChainOfResponsibilityExample;
