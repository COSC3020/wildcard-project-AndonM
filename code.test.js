const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 224, year: 1951, genre: 'Fiction' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 336, year: 1960, genre: 'Fiction' },
    { title: '1984', author: 'George Orwell', pages: 328, year: 1949, genre: 'Dystopian Fiction' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180, year: 1925, genre: 'Fiction' },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', pages: 417, year: 1967, genre: 'Magical Realism' },
    { title: 'Brave New World', author: 'Aldous Huxley', pages: 311, year: 1932, genre: 'Dystopian Fiction' },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', pages: 1178, year: 1954, genre: 'Fantasy' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', pages: 279, year: 1813, genre: 'Classic' },
    { title: 'Harry Potter and the Sorcerers Stone', author: 'J.K. Rowling', pages: 309, year: 1997, genre: 'Fantasy' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 310, year: 1937, genre: 'Fantasy' },
];

assert(bookTitles, [
    'The Catcher in the Rye',
    'To Kill a Mockingbird',
    '1984',
    'The Great Gatsby',
    'One Hundred Years of Solitude',
    'Brave New World',
    'The Lord of the Rings',
    'Pride and Prejudice',
    'Harry Potter and the Sorcerers Stone',
    'The Hobbit'
]);

assert(booksAfter1990, [
    { title: 'Harry Potter and the Sorcerers Stone', author: 'J.K. Rowling', pages: 309, year: 1997, genre: 'Fantasy' }
]);

assert(totalPages, 3872);

assert(averagePagesBefore1960, 401);

assert(fictionBooks, [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
]);

assert(concatenateTitles, 'The Catcher in the Rye, To Kill a Mockingbird, 1984, The Great Gatsby, One Hundred Years of Solitude, Brave New World, The Lord of the Rings, Pride and Prejudice, Harry Potter and the Sorcerers Stone, The Hobbit');
