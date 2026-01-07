<?php

// Request
class SupportTicket {
    public $level;
    public $message;

    public function __construct(int $level, string $message) {
        $this->level = $level;
        $this->message = $message;
    }
}

// Handler interface
interface SupportHandler {
    public function setNext(SupportHandler $handler): void;
    public function handleRequest(SupportTicket $ticket): string;
}

// Base Handler
abstract class BaseSupportHandler implements SupportHandler {
    protected $next = null;

    public function setNext(SupportHandler $handler): void {
        $this->next = $handler;
    }
}

// Level 1 Support
class Level1Support extends BaseSupportHandler {
    public function handleRequest(SupportTicket $ticket): string {
        if ($ticket->level <= 1) {
            return "Level 1 Support: Handling ticket - {$ticket->message}";
        }
        if ($this->next !== null) {
            return $this->next->handleRequest($ticket);
        }
        return "No handler available";
    }
}

// Level 2 Support
class Level2Support extends BaseSupportHandler {
    public function handleRequest(SupportTicket $ticket): string {
        if ($ticket->level <= 2) {
            return "Level 2 Support: Handling ticket - {$ticket->message}";
        }
        if ($this->next !== null) {
            return $this->next->handleRequest($ticket);
        }
        return "No handler available";
    }
}

// Level 3 Support
class Level3Support extends BaseSupportHandler {
    public function handleRequest(SupportTicket $ticket): string {
        if ($ticket->level <= 3) {
            return "Level 3 Support: Handling ticket - {$ticket->message}";
        }
        if ($this->next !== null) {
            return $this->next->handleRequest($ticket);
        }
        return "No handler available";
    }
}

// Usage
$level1 = new Level1Support();
$level2 = new Level2Support();
$level3 = new Level3Support();

$level1->setNext($level2);
$level2->setNext($level3);

$tickets = [
    new SupportTicket(1, "Password reset"),
    new SupportTicket(2, "Software installation issue"),
    new SupportTicket(3, "Server crash investigation"),
];

foreach ($tickets as $ticket) {
    echo $level1->handleRequest($ticket) . "\n";
}
