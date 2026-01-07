import React, { useState } from 'react';

// Book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Iterator
class BookIterator {
  constructor(books) {
    this.books = books;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.books.length;
  }

  next() {
    if (this.hasNext()) {
      return this.books[this.index++];
    }
    return null;
  }
}

// Collection
class BookCollection {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  createIterator() {
    return new BookIterator(this.books);
  }
}

// Component
const IteratorExample = () => {
  const [output, setOutput] = useState([]);

  const runExample = () => {
    const collection = new BookCollection();
    collection.addBook(new Book('Design Patterns', 'Gang of Four'));
    collection.addBook(new Book('Clean Code', 'Robert Martin'));
    collection.addBook(new Book('The Pragmatic Programmer', 'Hunt & Thomas'));

    const iterator = collection.createIterator();
    const results = ['Books in collection:'];
    
    while (iterator.hasNext()) {
      const book = iterator.next();
      results.push(`- ${book.title} by ${book.author}`);
    }

    setOutput(results);
  };

  return (
    <div className="iterator-example">
      <h2>Iterator Pattern</h2>
      <p>Collection iterator for different data structures</p>
      <button onClick={runExample}>Show Books</button>
      {output.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default IteratorExample;
