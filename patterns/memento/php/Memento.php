<?php

// Memento
class Memento {
    private $content;

    public function __construct(string $content) {
        $this->content = $content;
    }

    public function getContent(): string {
        return $this->content;
    }
}

// Originator
class TextEditor {
    private $content = "";

    public function setContent(string $content): void {
        $this->content = $content;
    }

    public function getContent(): string {
        return $this->content;
    }

    public function save(): Memento {
        return new Memento($this->content);
    }

    public function restore(Memento $memento): void {
        $this->content = $memento->getContent();
    }
}

// Caretaker
class History {
    private $mementos = [];

    public function push(Memento $memento): void {
        $this->mementos[] = $memento;
    }

    public function pop(): ?Memento {
        if (empty($this->mementos)) {
            return null;
        }
        return array_pop($this->mementos);
    }
}

// Usage
$editor = new TextEditor();
$history = new History();

$editor->setContent("Version 1");
$history->push($editor->save());
echo "Current: " . $editor->getContent() . "\n";

$editor->setContent("Version 2");
$history->push($editor->save());
echo "Current: " . $editor->getContent() . "\n";

$editor->setContent("Version 3");
echo "Current: " . $editor->getContent() . "\n";

$editor->restore($history->pop());
echo "After undo: " . $editor->getContent() . "\n";

$editor->restore($history->pop());
echo "After undo: " . $editor->getContent() . "\n";
