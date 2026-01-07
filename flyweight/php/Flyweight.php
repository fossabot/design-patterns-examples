<?php

// Flyweight: Character formatting
class CharacterFormat {
    private $font;
    private $size;
    private $color;

    public function __construct(string $font, int $size, string $color) {
        $this->font = $font;
        $this->size = $size;
        $this->color = $color;
    }

    public function display(string $char): string {
        return "Character '{$char}' [Font: {$this->font}, Size: {$this->size}, Color: {$this->color}]";
    }
}

// Flyweight Factory
class FormatFactory {
    private $formats = [];

    public function getFormat(string $font, int $size, string $color): CharacterFormat {
        $key = "{$font}-{$size}-{$color}";
        if (!isset($this->formats[$key])) {
            echo "Created new format: {$key}\n";
            $this->formats[$key] = new CharacterFormat($font, $size, $color);
        }
        return $this->formats[$key];
    }

    public function getTotalFormats(): int {
        return count($this->formats);
    }
}

// Character with extrinsic state
class Character {
    private $char;
    private $format;

    public function __construct(string $char, CharacterFormat $format) {
        $this->char = $char;
        $this->format = $format;
    }

    public function display(): string {
        return $this->format->display($this->char);
    }
}

// Text Editor
class TextEditor {
    private $characters = [];
    private $factory;

    public function __construct() {
        $this->factory = new FormatFactory();
    }

    public function addCharacter(string $char, string $font, int $size, string $color): void {
        $format = $this->factory->getFormat($font, $size, $color);
        $this->characters[] = new Character($char, $format);
    }

    public function display(): array {
        $results = [];
        foreach ($this->characters as $char) {
            $results[] = $char->display();
        }
        $results[] = "Total unique formats: " . $this->factory->getTotalFormats();
        return $results;
    }
}

// Usage
$editor = new TextEditor();
$editor->addCharacter('H', 'Arial', 12, 'Red');
$editor->addCharacter('e', 'Arial', 12, 'Red');
$editor->addCharacter('l', 'Arial', 12, 'Red');
$editor->addCharacter('l', 'Times', 14, 'Blue');
$editor->addCharacter('o', 'Times', 14, 'Blue');

$results = $editor->display();
foreach ($results as $result) {
    echo $result . "\n";
}
