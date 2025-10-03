class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isBorrowed = false;
    }

    getSummary() {
        return `Book: "${this.title}" by ${this.author} (${this.year})`;
    }

    borrowBook() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            return `You borrowed "${this.title}".`;
        } else {
            return `"${this.title}" is already borrowed.`;
        }
    }
}

let book1 = new Book("1984", "George Orwell", 1949);
let book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);

console.log(book1.getSummary());
console.log(book2.getSummary());

console.log(book1.borrowBook());
console.log(book1.borrowBook()); 
console.log(book2.borrowBook());
