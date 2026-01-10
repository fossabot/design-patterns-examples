<?php

// Subject interface
interface Image {
    public function display(): string;
}

// Real Subject
class RealImage implements Image {
    private $filename;

    public function __construct(string $filename) {
        $this->filename = $filename;
        $this->loadFromDisk();
    }

    private function loadFromDisk(): void {
        echo "Loading image from disk: {$this->filename}\n";
    }

    public function display(): string {
        return "Displaying image: {$this->filename}";
    }
}

// Proxy
class ProxyImage implements Image {
    private $filename;
    private $realImage = null;

    public function __construct(string $filename) {
        $this->filename = $filename;
    }

    public function display(): string {
        if ($this->realImage === null) {
            $this->realImage = new RealImage($this->filename);
        }
        return $this->realImage->display();
    }
}

// Usage
$image1 = new ProxyImage("photo1.jpg");
$image2 = new ProxyImage("photo2.jpg");

echo "\nFirst display call:\n";
echo $image1->display() . "\n";

echo "\nSecond display call (cached):\n";
echo $image1->display() . "\n";

echo "\nDisplay another image:\n";
echo $image2->display() . "\n";
