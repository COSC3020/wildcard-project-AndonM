// Mapping books to their respective titles
const bookTitles = books.map(book => book.title);
  
// Filtering books to include only those published after the year 1990
const booksAfter1990 = books.filter(book => book.year > 1990);
  
// Getting the total number of pages across all books
const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
  
// Combining filter and reduce to get the average number of pages for books published before the year 1960
const booksBefore1960 = books.filter(book => book.year < 1960);
const averagePagesBefore1960 = booksBefore1960.reduce((sum, book) => sum + book.pages, 0) / booksBefore1960.length;
  
// Combining map and filter to get the titles and authors of all fiction books
const fictionBooks = books.filter(book => book.genre === 'Fiction').map(book => ({ title: book.title, author: book.author }));
  
// Using reduce to concatenate all the titles of the books into a single string
const concatenateTitles = books.reduce((titles, book) => titles + book.title + ', ', '').slice(0, -2);