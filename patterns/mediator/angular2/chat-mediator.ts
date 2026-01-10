export interface ChatMediator {
  sendMessage(message: string, user: User): void;
  addUser(user: User): void;
}

export class User {
  constructor(
    private name: string,
    private mediator: ChatMediator
  ) {}

  getName(): string {
    return this.name;
  }

  send(message: string): void {
    this.mediator.sendMessage(message, this);
  }

  receive(message: string): string {
    return `${this.name} received: ${message}`;
  }
}

export class ChatRoom implements ChatMediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User): string[] {
    const results: string[] = [];
    this.users.forEach(user => {
      if (user !== sender) {
        results.push(user.receive(`${sender.getName()}: ${message}`));
      }
    });
    return results;
  }
}
