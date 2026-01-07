// Request
class SupportTicket {
  level: number;
  message: string;

  constructor(level: number, message: string) {
    this.level = level;
    this.message = message;
  }
}

// Handler interface
interface SupportHandler {
  setNext(handler: SupportHandler): void;
  handleRequest(ticket: SupportTicket): string;
}

// Base Handler
abstract class BaseSupportHandler implements SupportHandler {
  protected next: SupportHandler | null = null;

  setNext(handler: SupportHandler): void {
    this.next = handler;
  }

  abstract handleRequest(ticket: SupportTicket): string;
}

// Level 1 Support
class Level1Support extends BaseSupportHandler {
  handleRequest(ticket: SupportTicket): string {
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
class Level2Support extends BaseSupportHandler {
  handleRequest(ticket: SupportTicket): string {
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
class Level3Support extends BaseSupportHandler {
  handleRequest(ticket: SupportTicket): string {
    if (ticket.level <= 3) {
      return `Level 3 Support: Handling ticket - ${ticket.message}`;
    }
    if (this.next) {
      return this.next.handleRequest(ticket);
    }
    return 'No handler available';
  }
}

// Usage
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

tickets.forEach(ticket => console.log(level1.handleRequest(ticket)));
