package main

import "fmt"

// Iterator interface
type Iterator interface {
	HasNext() bool
	Next() interface{}
}

// Collection interface
type Collection interface {
	CreateIterator() Iterator
}

// Concrete Iterator
type BookIterator struct {
	books []*Book
	index int
}

func (b *BookIterator) HasNext() bool {
	return b.index < len(b.books)
}

func (b *BookIterator) Next() interface{} {
	if b.HasNext() {
		book := b.books[b.index]
		b.index++
		return book
	}
	return nil
}

// Book
type Book struct {
	Title  string
	Author string
}

// Concrete Collection
type BookCollection struct {
	books []*Book
}

func NewBookCollection() *BookCollection {
	return &BookCollection{books: []*Book{}}
}

func (bc *BookCollection) AddBook(book *Book) {
	bc.books = append(bc.books, book)
}

func (bc *BookCollection) CreateIterator() Iterator {
	return &BookIterator{books: bc.books, index: 0}
}

func main() {
	collection := NewBookCollection()
	collection.AddBook(&Book{Title: "Design Patterns", Author: "Gang of Four"})
	collection.AddBook(&Book{Title: "Clean Code", Author: "Robert Martin"})
	collection.AddBook(&Book{Title: "The Pragmatic Programmer", Author: "Hunt & Thomas"})

	iterator := collection.CreateIterator()
	fmt.Println("Books in collection:")
	for iterator.HasNext() {
		book := iterator.Next().(*Book)
		fmt.Printf("- %s by %s\n", book.Title, book.Author)
	}
}
