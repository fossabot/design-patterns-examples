<?php

// Prototype interface
interface Prototype {
    public function clone(): Prototype;
    public function getInfo(): string;
}

// Concrete Prototype
class Document implements Prototype {
    private $title;
    private $content;

    public function __construct(string $title, string $content) {
        $this->title = $title;
        $this->content = $content;
    }

    public function clone(): Prototype {
        return new Document($this->title, $this->content);
    }

    public function getInfo(): string {
        return "Document: {$this->title} - {$this->content}";
    }

    public function setTitle(string $title): void {
        $this->title = $title;
    }

    public function setContent(string $content): void {
        $this->content = $content;
    }
}

// Usage
$original = new Document("Original Document", "This is the original content");
echo $original->getInfo() . "\n";

$clone = $original->clone();
$clone->setTitle("Cloned Document");
$clone->setContent("This is the cloned content");
echo $clone->getInfo() . "\n";

echo "Original after cloning: " . $original->getInfo() . "\n";
