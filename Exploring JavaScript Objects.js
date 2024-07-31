// Task 1: Create a constructor function for the Book object
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Task 2: Implement a method within the Book object to display book information
Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
}

// Create an array to store book objects
let library = [];

// Implement function to add new books
function addBook(title, author, pages) {
    const book = new Book(title, author, pages);
    library.push(book);
}

// Implement function to search for books by title or author
function searchBook(query) {
    return library.filter(book => book.title.includes(query) || book.author.includes(query));
}

// Task 4: Create functions that utilize the filter and map methods
function filterBooks() {
    return library.filter(book => book.pages > 100);
}

function formatBookProperties() {
    return library.map(book => {
        return {
            title: `Title: ${book.title}`,
            author: `Author: ${book.author}`,
            pages: book.pages
        };
    });
}

// Add some books to the library
addBook("A Journey into the Center of the Earth", "Jules Verne", 250);
addBook("The Lord of the Rings", "J.R.R. Tolkien", 1200);
addBook("The Little Prince", "Antoine de Saint-Exupéry", 96);

// Display information about all books in the library
for (let book of library) {
    console.log(book.displayInfo());
}

// Search for books by a specific author
console.log(searchBook("Tolkien"));

// Filter out books that contain more than 100 pages
console.log(filterBooks());

// Add "Title: " and "Author: " to the book's title and author properties respectably
console.log(formatBookProperties());
