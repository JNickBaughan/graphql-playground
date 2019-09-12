const { books } = require("../mock-data/books");
const { authors } = require("../mock-data/authors");

const getBooks = () => {
  return books.map(book => {
    return Object.assign({}, book, {
      author: authors.filter(author => {
        return book.author.includes(author.id);
      })
    });
  });
};

const getAuthors = () => {
  return authors.map(author => {
    return Object.assign({}, author, {
      books: books.filter(book => {
        return author.books.includes(book.id);
      })
    });
  });
};

module.exports = { getBooks, getAuthors };
