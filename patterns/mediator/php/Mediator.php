<?php

// Mediator interface
interface ChatMediator {
    public function sendMessage(string $message, User $user): void;
    public function addUser(User $user): void;
}

// Concrete Mediator
class ChatRoom implements ChatMediator {
    private $users = [];

    public function addUser(User $user): void {
        $this->users[] = $user;
    }

    public function sendMessage(string $message, User $sender): void {
        foreach ($this->users as $user) {
            if ($user !== $sender) {
                $user->receive($message, $sender->getName());
            }
        }
    }
}

// User
class User {
    private $name;
    private $mediator;
    private $messages = [];

    public function __construct(string $name, ChatMediator $mediator) {
        $this->name = $name;
        $this->mediator = $mediator;
        $mediator->addUser($this);
    }

    public function getName(): string {
        return $this->name;
    }

    public function send(string $message): void {
        echo "{$this->name} sends: {$message}\n";
        $this->mediator->sendMessage($message, $this);
    }

    public function receive(string $message, string $from): void {
        $msg = "{$this->name} receives from {$from}: {$message}";
        $this->messages[] = $msg;
        echo $msg . "\n";
    }
}

// Usage
$chatRoom = new ChatRoom();
$alice = new User("Alice", $chatRoom);
$bob = new User("Bob", $chatRoom);
$charlie = new User("Charlie", $chatRoom);

$alice->send("Hello everyone!");
$bob->send("Hi Alice!");
