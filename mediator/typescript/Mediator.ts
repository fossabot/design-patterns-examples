// Mediator interface
interface ChatMediator {
  sendMessage(message: string, user: User): void;
  addUser(user: User): void;
}

// Concrete Mediator
class ChatRoom implements ChatMediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User): void {
    this.users.forEach(user => {
      if (user !== sender) {
        user.receive(message, sender.getName());
      }
    });
  }
}

// User
class User {
  private name: string;
  private mediator: ChatMediator;
  private messages: string[] = [];

  constructor(name: string, mediator: ChatMediator) {
    this.name = name;
    this.mediator = mediator;
    mediator.addUser(this);
  }

  getName(): string {
    return this.name;
  }

  send(message: string): void {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message: string, from: string): void {
    const msg = `${this.name} receives from ${from}: ${message}`;
    this.messages.push(msg);
    console.log(msg);
  }
}

// Usage
const chatRoom = new ChatRoom();
const alice = new User('Alice', chatRoom);
const bob = new User('Bob', chatRoom);
const charlie = new User('Charlie', chatRoom);

alice.send('Hello everyone!');
bob.send('Hi Alice!');
