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

// Mapping books to their respective titles
const bookTitles = books.map(book => book.title);
  
// Filtering books to include only those published after the year 1990
const booksAfter1990 = books.filter(book => book.year > 1990);
  
// Getting the total number of pages across all books
const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
  
// Combining filter and reduce to get the average number of pages for books published before the year 1960
const booksBefore1960 = books.filter(book => book.year < 1960);
const averagePagesBefore1960 = math.floor(booksBefore1960.reduce((sum, book) => sum + book.pages, 0) / booksBefore1960.length);
  
// Combining map and filter to get the titles and authors of all fiction books
const fictionBooks = books.filter(book => book.genre === 'Fiction').map(book => ({ title: book.title, author: book.author }));
  
// Using reduce to concatenate all the titles of the books into a single string
const concatenateTitles = books.reduce((titles, book) => titles + book.title + ', ', '').slice(0, -2);
