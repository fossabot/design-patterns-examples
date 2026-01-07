<?php

// State interface
interface DocumentState {
    public function publish(Document $doc): string;
    public function review(Document $doc): string;
}

// Context
class Document {
    private $state;
    private $name;

    public function __construct(string $name) {
        $this->name = $name;
        $this->state = new DraftState();
    }

    public function setState(DocumentState $state): void {
        $this->state = $state;
    }

    public function publish(): string {
        return $this->state->publish($this);
    }

    public function review(): string {
        return $this->state->review($this);
    }
}

// Concrete States
class DraftState implements DocumentState {
    public function publish(Document $doc): string {
        return "Cannot publish from Draft. Please review first.";
    }

    public function review(Document $doc): string {
        $doc->setState(new ReviewState());
        return "Document moved to Review state";
    }
}

class ReviewState implements DocumentState {
    public function publish(Document $doc): string {
        $doc->setState(new PublishedState());
        return "Document published successfully";
    }

    public function review(Document $doc): string {
        return "Document is already in Review state";
    }
}

class PublishedState implements DocumentState {
    public function publish(Document $doc): string {
        return "Document is already published";
    }

    public function review(Document $doc): string {
        return "Cannot review a published document";
    }
}

// Usage
$doc = new Document("Design Patterns Guide");

echo "Initial state: Draft\n";
echo $doc->publish() . "\n";
echo $doc->review() . "\n";
echo $doc->publish() . "\n";
