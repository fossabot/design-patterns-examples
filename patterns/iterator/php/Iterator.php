<?php

// Book
class Book {
    public $title;
    public $author;

    public function __construct(string $title, string $author) {
        $this->title = $title;
        $this->author = $author;
    }
}

// Iterator interface
interface Iterator {
    public function hasNext(): bool;
    public function next(): ?Book;
}

// Concrete Iterator
class BookIterator implements Iterator {
    private $books;
    private $index = 0;

    public function __construct(array $books) {
        $this->books = $books;
    }

    public function hasNext(): bool {
        return $this->index < count($this->books);
    }

    public function next(): ?Book {
        if ($this->hasNext()) {
            return $this->books[$this->index++];
        }
        return null;
    }
}

// Collection
class BookCollection {
    private $books = [];

    public function addBook(Book $book): void {
        $this->books[] = $book;
    }

    public function createIterator(): Iterator {
        return new BookIterator($this->books);
    }
}

// Usage
$collection = new BookCollection();
$collection->addBook(new Book("Design Patterns", "Gang of Four"));
$collection->addBook(new Book("Clean Code", "Robert Martin"));
$collection->addBook(new Book("The Pragmatic Programmer", "Hunt & Thomas"));

$iterator = $collection->createIterator();
echo "Books in collection:\n";
while ($iterator->hasNext()) {
    $book = $iterator->next();
    echo "- {$book->title} by {$book->author}\n";
}
