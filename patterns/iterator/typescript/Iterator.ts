// Book
class Book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

// Iterator interface
interface Iterator<T> {
  hasNext(): boolean;
  next(): T | null;
}

// Concrete Iterator
class BookIterator implements Iterator<Book> {
  private books: Book[];
  private index: number = 0;

  constructor(books: Book[]) {
    this.books = books;
  }

  hasNext(): boolean {
    return this.index < this.books.length;
  }

  next(): Book | null {
    if (this.hasNext()) {
      return this.books[this.index++];
    }
    return null;
  }
}

// Collection
class BookCollection {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  createIterator(): Iterator<Book> {
    return new BookIterator(this.books);
  }
}

// Usage
const collection = new BookCollection();
collection.addBook(new Book('Design Patterns', 'Gang of Four'));
collection.addBook(new Book('Clean Code', 'Robert Martin'));
collection.addBook(new Book('The Pragmatic Programmer', 'Hunt & Thomas'));

const iterator = collection.createIterator();
console.log('Books in collection:');
while (iterator.hasNext()) {
  const book = iterator.next();
  if (book) {
    console.log(`- ${book.title} by ${book.author}`);
  }
}
