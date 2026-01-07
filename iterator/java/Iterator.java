// Book
class Book {
    private String title;
    private String author;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }
}

// Iterator interface
interface Iterator {
    boolean hasNext();
    Book next();
}

// Concrete Iterator
class BookIterator implements Iterator {
    private Book[] books;
    private int index = 0;

    public BookIterator(Book[] books) {
        this.books = books;
    }

    @Override
    public boolean hasNext() {
        return index < books.length;
    }

    @Override
    public Book next() {
        if (hasNext()) {
            return books[index++];
        }
        return null;
    }
}

// Collection
class BookCollection {
    private Book[] books;
    private int count = 0;

    public BookCollection(int size) {
        books = new Book[size];
    }

    public void addBook(Book book) {
        if (count < books.length) {
            books[count++] = book;
        }
    }

    public Iterator createIterator() {
        return new BookIterator(books);
    }
}

// Main class demonstrating Iterator pattern
public class Iterator {
    public static void main(String[] args) {
        BookCollection collection = new BookCollection(3);
        collection.addBook(new Book("Design Patterns", "Gang of Four"));
        collection.addBook(new Book("Clean Code", "Robert Martin"));
        collection.addBook(new Book("The Pragmatic Programmer", "Hunt & Thomas"));

        iterator.Iterator iterator = collection.createIterator();
        System.out.println("Books in collection:");
        while (iterator.hasNext()) {
            Book book = iterator.next();
            if (book != null) {
                System.out.println("- " + book.getTitle() + " by " + book.getAuthor());
            }
        }
    }
}
