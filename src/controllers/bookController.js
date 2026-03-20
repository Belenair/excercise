const bookModel = require('../models/bookModel.js')

const getAllBooks = (req, res) => {
    const { sort } = req.query;
    let books = bookModel.getAllBooks();
    if (sort) {
        if (!books.length || !books[0].hasOwnProperty(sort)) {
            return res.status(400).send({ message: 'Neplatny parameter sort' });
        }
        
        books = books.sort((a, b) => {
            if (a[sort] < b[sort]) return -1;
            if (a[sort] > b[sort]) return 1;
            return 0;
        });
    }
    res.send(books);
};

const getBooksById = (req, res) => {
    const { id } = req.params;
    const book = bookModel.getBookById(id);
    if (!book) {
        return res.status(400).send({ message: 'Kniha nebola najdna!' });
    }
    res.send(book);
};

const createBook = (req, res) => {
    const { title, author, genre, publishedYear, summary } = req.body;
    if (!title || !author || !genre || !publishedYear ) {
        return res.status(400).send ({ message: 'Chybaju udaje o knihe!' });
    }
    const newBook = bookModel.createBook({ title, author, genre, publishedYear, summary });
    res.status(201).send(newBook);
};

const updateBook = (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    const updatedBook = bookModel.updateBook(id, updates);
    if (!updatedBook) {
        return res.status(404).send({ message: 'Kniha nebola najdena!' });
    }
    res.send(updatedBook);
};

const deleteBook = (req, res) => {
    const { id } = req.params;
    const deleted = bookModel.deleteBook(id);
    if (!deleted) {
        return res.status(404).send({ message: 'Kniha nebola najdena! '});
    }
    res.send({ message: 'Kniha bola uspesne zmazana! '});
};

module.exports = {getAllBooks, getBooksById, createBook, updateBook, deleteBook };