const { v4: uuid } = require("uuid");

let books = [
  {
    id: uuid(),
    title: "First book",
    author: "Samo Chalupka",
    genre: "Poezia",
    publishedYear: "1864",
    summary: "Epicka basen o odvahe a hrdinstve",
  },
  {
    id: uuid(),
    title: "Secound book",
    author: "Samo Chalupka2",
    genre: "Drama",
    publishedYear: "1964",
    summary: "Epicka basen o odvahe",
  },
  {
    id: uuid(),
    title: "Third book",
    author: "Samo Chalupka3",
    genre: "Linguistika",
    publishedYear: "2064",
    summary: "Epicka basen",
  },
  {
    id: uuid(),
    title: "Forth book",
    author: "Samo Chalupka4",
    genre: "Kucharske recepty",
    publishedYear: "2164",
    summary: "Epicka",
  },
  {
    id: uuid(),
    title: "Fifth book",
    author: "Samo Chalupka5",
    genre: "Psychologia",
    publishedYear: "1764",
    summary: "",
  }
];

const getAllBooks = () => {
  return books;
};

const getBookById = (id) => {
  return books.find(book => book.id === id);
};

const createBook = ({ title, author, genre, publishedYear, summary }) => {
  const newBook = { id:uuid(), title, author, genre, publishedYear, summary};
  books.push(newBook);
  return newBook;
};

const updateBook = (id, { title, author, genre, publishedYear, summary }) => {
  const book = getBookById(id);
  if (!book) {
    return { ok: false, message: "This request cannot be competed!"};
  }
  if(title) book.title = title;
  if(author) book.author = author;
  if(genre) book.genre = genre;
  if(publishedYear) book.publishedYear = publisherYear;
  if(summary) book.summary = summary;

  return { ok: true, message: "Book updated!", data: book};
};

const deleteBook = (id) => {
  const bookIndex = books.findIndex(book => book.id === id);
  if (bookIndex === -1) {
    return false;
  }
  books.splice(bookIndex, 1);
  return true;
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
