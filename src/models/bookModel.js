const { v4: uuid } = require("uuid");

let books = [
    {
        id: uuid(),
        title: 'Mor ho!',
        author: 'Samo Chalupka',
        genre: 'Poezia',
        publishedYear: '1864',
        summary: 'Epicka basen o odvahe a hrdinstve'
    },
];

const getAllBooks = () => {
    return books;
};

const getBookById = (id) => {
    return books.find()
}

const createBook = ({ title, author, genre, publishedYear, summary }) => {

};

const updateBook = (id, { title, author, genre, publishedYear, summary }) => {

};

const deleteBook = (id) => {

};

module.exports = { getAllBooks, getBookById, creteBook, updateBook, deleteBook}